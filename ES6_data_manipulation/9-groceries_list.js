export default function groceriesList () {
  //  returns a Map of groceries with specified items (name, quantity)
  const groceriesMap = new Map([
    ['Apples', 10],
    ['Tomatoes', 10],
    ['Pasta', 1],
    ['Rice', 1],
    ['Banana', 5]
  ]);
  return groceriesMap;
}