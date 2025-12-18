export default class Car {
  constructor(brand, motor, color) {
    this._brand = brand;
    this._motor = motor;
    this._color = color;
  }

  // return a new object of the class
  cloneCar() {
    return new this.constructor();
  }
}
