export default class HolbertonCourse {
  constructor(name, length, students) {
    // type validation for attributes
    if (typeof name !== 'string') {
      throw new TypeError('Name must be a string');
    }
    if (typeof length !== 'number') {
      throw new TypeError('Length must be a number');
    }
    // first check if students is an array
    if (!Array.isArray(students)) {
      throw new TypeError('Students must be an array');
    }
    // then check if array contains strings
    const allStrings = students.every(item => typeof item === 'string');
    if (!allStrings) {
      throw new TypeError('Students must be an array of strings');
    }
    // call setters
    this.name = name;
    this.length = length;
    this.students = students;
    }
    // name getter
    get name() {
      return this._name;
    }
    // name setter
    set name(newName) {
      this._name = newName;
    }
    // length getter
    get length() {
      return this._length;
    }
    // length setter
   set length(newLength) {
     this._length = newLength;
   }
   // students getter
   get students() {
    return this._students;
   }
   // students setter
   set students(newStudents) {
    this._students = newStudents;
   }
}
