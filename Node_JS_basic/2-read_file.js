// reads file synchronously
function countStudents(filePath) {
  const fs = require('fs');

  try {
  // 1. Read the file content synchronously as a string
  const data = fs.readFileSync(filePath, 'utf8');

  // 2. Split the string by line breaks (works for Unix and Windows formats)
  const lines = data.trim().split(/\r?\n/);

  // 3. Process the header
  const headers = lines[0].split(',');

  // 4. Process the data rows
  const records = [];
  for (let i = 1; i < lines.length; i++) {
    const values = lines[i].split(',');
    if (values.length === headers.length) {
      const record = {};
      for (let j = 0; j < headers.length; j++) {
        record[headers[j].trim()] = values[j].trim();
      }
      records.push(record);
    }
  }

//   // Resulting array of objects
//   console.log(records);

  // 5. Remove any empty objects
  const filteredRecords = records.filter(obj => {
  return Object.keys(obj).length !== 0;
});

  // 6. log total number of students
  console.log(`Number of students: ${filteredRecords.length}`);

  // 7. create new obj as format {SWE: [M, T], HR: [A]
  const newObj = {};
  
  filteredRecords.forEach(function(record) {
  // check if field exists in new obj
  if(record.field in newObj) {
    // if yes: add only first name to existing list
    newObj[record.field].push(record.firstname);
  } else {
    // if no: add both field as key to obj and name to its value
    newObj[record.field] = [record.firstname];
  }
  });

  // 8. log total number and names of students in each field
  for (const[key, value] of Object.entries(newObj)) {
    console.log(`Number of students in ${key}: ${value.length}. List: ${value.join(', ')}`);
  }

} catch (err) {
  console.error('Cannot load the database');
}
}

// countStudents('database.csv');