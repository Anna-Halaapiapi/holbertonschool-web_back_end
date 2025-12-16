// use computed property names for 'key' (departmentName)
export default function createEmployeesObject(departmentName, employees) {
  const obj = { [departmentName]: employees };
  return obj;
}
