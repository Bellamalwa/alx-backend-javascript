// Import the class Building from 5-building.js
import Building from './5-building';

export default class SkyHighBuilding extends Building {
  constructor(sqft, floors) {
    // Call constructor of super class (Building)
    super(sqft);

    // Create objs
    this._floors = floors;
  }

  // Method

  evacuationWarningMessage() {
    // Return a string with the message to evacuate the building (number of floors)
    return `Evacuate slowly the ${this.floors} floors`;
  }

  // Getters for the attributes of the class
  get sqft() { // Getter for sqft attribute (number)
    return this._sqft;
  }

  get floors() { // Getter for floors attribute (number)
    return this._floors;
  }
}
