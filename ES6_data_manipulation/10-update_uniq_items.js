export default function updateUniqueItems (mapArg) {
  // updates items in mapArg with value of 1, to 100. Returns the updated map.
  for (const [key, value] of mapArg) {
    if (value === 1) {
      mapArg.set(key, 100);
    }
  }
  return mapArg;
}