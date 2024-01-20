export default class Currency {
  constructor(code, name) {
    // Create objs
    this._code = code;
    this._name = name;
  }

  // Method to display the currency code and name

  displayFullCurrency() {
    return (`${this.name} (${this.code})`);
  }

  // Setters for code and name attributes for the class
  set name(newName) { // Setter for name attribute (string)
    this._name = newName;
  }

  set code(newCode) { // Setter for code attribute (string)
    this._name = newCode;
  }

  // Getters for code and name attributes for the class
  get name() { // Getter for name attribute (string)
    return this._name;
  }

  get code() { // Getter for code attribute (string)
    return this._code;
  }
}
