// Constructor function for Alien
function Alien(fname: string, lname: string) {
  // Assigning first name and last name to the instance
  this.firstname = fname;
  this.lastname = lname;
}

// Adding a method to Alien's prototype to get the full name
Alien.prototype.getFullname = function () {
  return 'My fullname is ' + this.firstname + ' ' + this.lastname;
};

// Example of creating an instance of Alien and logging the full name
// const alien1 = new (Alien as any)('John', 'Doe');
// console.log(alien1.getFullname());

// Constructor function for SuperHero
function SuperHero(fname: string, lname: string) {
  // Calling the Alien constructor with SuperHero's context
  Alien.call(this, fname, lname);
  // Adding a new property specific to SuperHero
  this.isSuperHero = true;
}

// Setting up inheritance: SuperHero inherits from Alien
SuperHero.prototype = Object.create(Alien.prototype);
// Correcting the constructor pointer for SuperHero
SuperHero.prototype.constructor = SuperHero;

// Adding a new method to SuperHero's prototype
SuperHero.prototype.fightCrime = function () {
  return 'Hero is Fighting Crime';
};

// Creating an instance of SuperHero
const hero1 = new (SuperHero as any)('Bruce', 'Wayne');
// Logging the instance to see its properties
console.log(hero1);
// Logging the full name using the inherited method
console.log(hero1.getFullname());
// Logging the result of the fightCrime method
console.log(hero1.fightCrime());
