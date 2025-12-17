// simulate an abstract class called Building
export default class Building {
  constructor(sqft) {
    // run this check for subclasses only, not instances
    if (new.target !== Building) {
      const derivedPrototype = Object.getPrototypeOf(this);
      const basePrototype = Building.prototype;
      // checks if subclass has overridden the abstract method
      if (derivedPrototype.evacuationWarningMessage === basePrototype.evacuationWarningMessage) {
        throw new Error('Class extending Building must override evacuationWarningMessage');
      }
    }

    // call setter
    this.sqft = sqft;
  }

  // sqft - getter & setter (with validation)
  get sqft() {
    return this._sqft;
  }

  set sqft(newSqft) {
    if (typeof newSqft !== 'number') {
      throw new TypeError('sqft must be a number');
    }
    this._sqft = newSqft;
  }

  // simulation of abstract method (empty)
  evacuationWarningMessage() {
  }
}
