import Currency from "./3-currency.js";

export default class Pricing {
  constructor(amount, currency) {
    // call setters
    this.amount = amount;
    this.currency = currency;
  }

  // amount - getter & setter (with validation)
  get amount() {
    return this._amount;
  }

  set amount(newAmount) {
    if (typeof newAmount !== 'number') {
      throw new TypeError('amount must be a number');
    }
    this._amount = newAmount;
  }

  // currency - getter & setter (with no validation)
  get currency() {
    return this._currency;
  }

  set currency(newCurrency) {
    this._currency = newCurrency;
  }

  // method - calls getters (currency is a Currency instance stored in Pricing)
  displayFullPrice() {
    return `${this.amount} ${this.currency.name} (${this.currency.code})`;
  }

  // static method - parameters are passed from outside class
  static convertPrice(amount, conversionRate) {
    return amount * conversionRate;
  }
}
