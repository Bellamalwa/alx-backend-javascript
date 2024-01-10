/**
 * Create an interface for a Director with the 3 expected methods
 * - workFromHome() - returns a string
 * - getCoffeeBreak() - returns a string
 * - workDirectorTasks() - returns a string
 */

// Director interface
interface DirectorsInterface {
  workFromHome(): string;
  getCoffeeBreak(): string;
  workDirectorTasks(): string; 
}

/**
 * Create an interface for a Teacher with the 3 expected methods
 * - workFromHome() - returns a string
 * - getCoffeeBreak() - returns a string
 * - workTeacherTasks() - returns a string
 */
// Teacher interface
interface TeacherInterface {
  workFromHome(): string;
  getCoffeeBreak(): string;
  workTeacherTasks(): string;
}

/**
 * Create a class for a Director that implements the Director interface
 */
class Director implements DirectorsInterface {
  workFromHome(): string {
    return 'Working from home';
  }
  getCoffeeBreak(): string {
    return 'Getting a coffee break';
  }
  workDirectorTasks(): string {
    return 'Getting to director tasks';
  }
}

/**
 * Create a class for a Teacher that implements the Teacher interface
 */
class Teacher implements TeacherInterface {
  workFromHome(): string {
    return 'Cannot work from home';
  }
  getCoffeeBreak(): string {
    return 'Cannot have a break';
  }
  workTeacherTasks(): string {
    return 'Getting to work';
  }
}

/**
 * Function that creates a Employee object with the following requirements:
 * - Can be a Director or a Teacher instance
 * - Accepts 1 argument:
 *  - salary (either a number or a string):
 *    - If a number and less than 500 returns a new Teacher instance
 *    - Otherwise it should return a Director instance
 */
function createEmployee(firstName: string, lastName: string, salary: number | string): Director | Teacher {
  if (salary as number && salary < 500) return new Teacher();
  else return new Director(); 
}

console.log(createEmployee('Guillaume', 'Salva', 200));
console.log(createEmployee('John', 'Doe', 1000));
console.log(createEmployee('Gerard', 'Zuck', '$500'));

// Function to check if the employee is a director
function isDirector(employee: Director | Teacher): employee is Director {
  return (employee instanceof Director) ? true : false;
}
// Funtion to check type of employee and establish the correct task
function executeWork(employee: Director | Teacher): string {
  return isDirector(employee) ? employee.workDirectorTasks() : employee.workTeacherTasks();
}

console.log(executeWork(createEmployee('Guillaume', 'Salva', 200)));
console.log(executeWork(createEmployee('John', 'Doe', 1000)));

// String literal that allows a variable to have the value of Math or History only.
type Subjects = 'Math' | 'History';
// Function that takes todayClass as an argument and returns a correspondent string
function teachClass(todayClass: Subjects): string{
  return todayClass === 'Math' ? 'Teaching Math' : 'Teaching History';
}

console.log(teachClass('Math'));
console.log(teachClass('History'));
