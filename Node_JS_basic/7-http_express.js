// === IMPORT MODULES === //
const express = require('express');
const fs = require('node:fs/promises');

// ==== HELPER FUNCTION ==== //
async function countStudents(filePath) {
  // reads file asynchronously - returns error message OR student summary as string
  try {
    const data = await fs.readFile(filePath, 'utf8');
    const lines = data.trim().split(/\r?\n/);
    const headers = lines[0].split(',');
    const records = [];
    for (let i = 1; i < lines.length; i += 1) {
      const values = lines[i].split(',');
      if (values.length === headers.length) {
        const record = {};
        for (let j = 0; j < headers.length; j += 1) {
          record[headers[j].trim()] = values[j].trim();
        }
        records.push(record);
      }
    }
    const filteredRecords = records.filter((obj) => Object.keys(obj).length !== 0);
    const newObj = {};
    filteredRecords.forEach((record) => {
      if (record.field in newObj) {
        newObj[record.field].push(record.firstname);
      } else {
        newObj[record.field] = [record.firstname];
      }
    });
    // build the student summary
    let summary = `Number of students: ${filteredRecords.length}\n`;
    for (const [key, value] of Object.entries(newObj)) {
      summary += `Number of students in ${key}: ${value.length}. List: ${value.join(', ')}\n`;
    }
    return summary.trim(); // upon success - return summary of students as string
  } catch (err) {
    throw new Error('Cannot load the database'); // upoon failure - return err msg
  }
}

// === EXPRESS HTTP SERVER === //
// 1. get database from command line
const database = process.argv[2];
const app = express(); // create instance of express application
const port = 1245; // define port that server will listen on
app.get('/', (request, response) => { // routing for '/'
  response.set('Content-Type', 'text/plain'); // returns plain text
  response.send('Hello Holberton School!');
});

app.get('/students', (async (request, response) => { // routing for '/students'
  response.set('Content-Type', 'text/plain'); // returns plain text
  response.write('This is the list of our students\n');
  try {
    const result = await countStudents(database);
    response.end(result); // send student summary from helper func
  } catch (err) {
    response.end(err.message);
  }
}));
app.listen(port, () => { // start server and listen for incoming requests
});
module.exports = app; // export server
