// creates report obj with all depts & their employees, and returns num of depts
export default function createReportObject(employeesList) {
  const obj = { 
  // allEmployees key points to employeeList obj (returned from task 11)
  allEmployees: employeesList, 
  // use this obj's data to return num of depts
  getNumberOfDepartments(allEmployees) {
  return Object.keys(allEmployees).length}
};
  return obj;
}
