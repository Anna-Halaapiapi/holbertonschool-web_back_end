// returns string of all set values that start with startString
export default function cleanSet (set, startString) {
  // condition 1: startString not provided
  if (startString === '') {
    return ''; // return empty string
  }
  // condition 2: startString provided
  const rawArray = [...set]; // convert set to array
  const filteredByMatchesArray = rawArray.filter(element => element.startsWith(startString)); // create new arr containing items whose prefix matches startString
  const removedPrefixArray = filteredByMatchesArray.map(element => { // remove startString from start of each element 
    const regex = new RegExp(`^${startString}`);
    return element.replace(regex, ''); // replace prefix with empty string
  });

  // format and return results
  const resultString = removedPrefixArray.join('-'); // add dashes between arr elements
  return resultString;  
}
