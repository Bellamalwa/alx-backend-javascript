/**
 * Create an interface for a Teacher that has the following elements:
 * - First name (string)
 * - Last name (string)
 * - fullTimeEmployee (boolean)
 * - yearsOfExperience (number)
 * - location (string)
 * - attribute name (string) (optional)
 */

// Teacher interface
interface Teacher {
  readonly firstName: string; // readonly means that the value cannot be changed
  readonly lastName: string; // readonly means that the value cannot be changed
  fullTimeEmployee: boolean;
  location: string;
  yearsOfExperience?: number;
  [propName: string]: any;
}

/**
 * Create an interface for a Directors that extends the Teacher interface
 * Requires the following attribute:
 * - numbreOfReports (number)
 */

// Directors interface
interface Directors extends Teacher {
  numberOfReports: number;
}

// Creating a teacher and a director object (Provided by Holberton School)
const teacher3: Teacher = { // Creating a teacher object
  firstName: 'John',
  fullTimeEmployee: false,
  lastName: 'Doe',
  location: 'London',
  contract: false,
};
console.log(teacher3); // Prints the teacher object

const director1: Directors = { // Creating a director object
  firstName: 'John',
  lastName: 'Doe',
  location: 'London',
  fullTimeEmployee: true,
  numberOfReports: 17,
};
console.log(director1); // Prints the director object

// Function to print the teacher's name in this format: A. Arevalo
function printTeacher(firstName: string, lastName: string): string {
  return `${firstName[0]}. ${lastName}`;
}

console.log(printTeacher('Alex', 'Arevalo')); // Prints the teacher's name

// Class description interface
interface classInterface {
  firstName: string;
  lastName: string;
  workOnHomework(): string;
  displayName(): string;
}

// Constructor description interface
interface classConstructor {
  new (firstName: string, lastName: string): classInterface;
}

/**
 * Creating a Class and Constructor through interfaces
 */

// Class description interface for the class Student
class StudentClass implements classInterface {
  firstName: string;
  lastName: string;

// Constructor accepts two arguments
  constructor(firstName: string, lastName: string) { 
    this.firstName = firstName;
    this.lastName = lastName;
  }

  // Method to return what the student is Currently working on
  workOnHomework(): string { 
    return 'Currently working';
  }

  // Method to return the student's first name
  displayName(): string {
    return this.firstName;
  }
}

/**
 * Creating instance of StudentClass that returns the student's name and 
 * says if he is working on homework
 */
const studentClass: StudentClass = new StudentClass('Imanol', 'Asolo');
console.log(studentClass.displayName());
console.log(studentClass.workOnHomework());
