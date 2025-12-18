import Building from './5-building.js';

export default class SkyHighBuilding extends Building {
  constructor(sqft, floors) {
    // calls parent class constructor which sets sqft
    super(sqft);
    this.floors = floors;
  }

  get floors() {
    return this._floors;
  }

  set floors(newFloor) {
    this._floors = newFloor;
  }

  // override abstract method in parent class
  evacuationWarningMessage() {
    return `Evacuate slowly the ${this.floors} floors`;
  }
}
