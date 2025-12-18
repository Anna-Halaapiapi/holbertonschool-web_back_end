export default class HolbertonClass {
  constructor(size, location) {
    this._size = size;
    this._location = location;
  }
  // customise logic when converting object to primative value
  [Symbol.toPrimitive](hint) {
    // if class cast into number, return size
    if (hint === 'number') {
      return this._size;
    }
    // if class cast into string, return location
    if (hint === 'string') {
      return this._location;
    }
  }
}
