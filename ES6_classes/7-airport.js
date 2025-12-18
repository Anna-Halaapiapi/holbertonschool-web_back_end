export default class Airport {
  constructor(name, code) {
    this._name = name;
    this._code = code;
  }
  // method 1: Override toString() method directly
  //   toString() {
  //     return `[Object ${this._code}]`;
  //   }

  // method 2: use built-in to override toString
  get [Symbol.toStringTag]() {
    return this._code;
  }
}
