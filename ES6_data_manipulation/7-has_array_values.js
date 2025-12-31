export default function hasValuesFromArray (set, array) {
  // returns true if all elements in array exist within set, else return false
//   for (const value of array) {
//     let result = set.has(value)
//     if (result === false) {
//       return result;
//     }
//   }
//   return true;
  // refactor
  return array.every(element => set.has(element));
}
