// import the classroom class from the file 0-classroom.js
import ClassRoom from './0-classroom';

export default function initializeRooms() { // export the function initializeRooms
  const sizes = [19, 20, 34]; // create an array of classroom sizes
  const rooms = []; // create an empty array to hold classroom objects
  for (const size of sizes) { // for each classroom size in the array
    rooms.push(new ClassRoom(size)); // create a new classroom object and add it to the array
  }
  return rooms; // return the array of classroom objects
}
