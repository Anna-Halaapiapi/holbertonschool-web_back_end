export default class Currency{
  constructor(code, name) {
    // call setters
    this.code = code;
    this.name = name;
  }
  // code getter & setter (with type validation)
  get code() {
    return this._code;
  }
  set code(newCode) {
    if (typeof newCode !== 'string') {
        throw new TypeError('code must be a string');
    }
    this._code = newCode;
  }
  // name getter & setter (with type validation)
  get name() {
    return this._name;
  }
  set name(newName) {
    if (typeof newName !== 'string') {
      throw new TypeError('name must be a string');
    }
    this._name = newName;
  }
  // method returns attributes in format name (code)
  displayFullCurrency() {
    return `${this.name} (${this.code})`;
  }
}
