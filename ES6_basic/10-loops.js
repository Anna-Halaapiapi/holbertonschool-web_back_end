// rewrote function to use ES6 for...of op
export default function appendToEachArrayValue(array, appendString) {
//   for (var idx in array) {
//     var value = array[idx];
//     array[idx] = appendString + value;
//   }
  const updatedArray = [];
  for (const value of array) {
    updatedArray.push(appendString + value);
  }
  return updatedArray;
}
