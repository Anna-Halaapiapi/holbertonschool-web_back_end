const fs = require('node:fs/promises');

async function countStudents(filePath) {
  // reads file asynchronously - automatically returns fufilled/rejected promise
  try {
    // 1. Read the file content as a string
    const data = await fs.readFile(filePath, 'utf8');

    // 2. Split the string by line breaks (works for Unix and Windows formats)
    const lines = data.trim().split(/\r?\n/);

    // 3. Process the header
    const headers = lines[0].split(',');

    // 4. Process the data rows
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
    // 5. Remove any empty objects
    const filteredRecords = records.filter((obj) => Object.keys(obj).length !== 0);

    // 6. log total number of students
    console.log(`Number of students: ${filteredRecords.length}`);

    // 7. create new obj as format {SWE: [M, T], HR: [A]
    const newObj = {};

    filteredRecords.forEach((record) => {
      // check if field exists in new obj
      if (record.field in newObj) {
        // if yes: add only first name to existing list
        newObj[record.field].push(record.firstname);
      } else {
        // if no: add both field as key to obj and name to its value
        newObj[record.field] = [record.firstname];
      }
    });

    // 8. log total number and names of students in each field
    for (const [key, value] of Object.entries(newObj)) {
      console.log(`Number of students in ${key}: ${value.length}. List: ${value.join(', ')}`);
    }
  } catch (err) {
    throw new Error('Cannot load the database');
  }
}
module.exports = countStudents;
