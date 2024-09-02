// Define a class named Human
class Human {
  firstname: string;
  lastname: string;

  // Constructor to initialize the first name and last name
  constructor(fname: string, lname: string) {
    this.firstname = fname;
    this.lastname = lname;
  }

  // Method to get the full name of the human
  getFullName() {
    return `Full name is ${this.firstname} ${this.lastname}`;
  }
}

// Create an instance of the Human class
const human1 = new Human('John', 'Whick');
// Log the full name of the human instance
console.log(human1.getFullName());

// Define a class named SuperHero1 that extends Human
class SuperHero1 extends Human {
  isSuperHero: boolean;

  // Constructor to initialize the first name, last name, and isSuperHero property
  constructor(firstname: string, lastname: string) {
    super(firstname, lastname); // Call the parent class constructor
    this.isSuperHero = true; // Set the isSuperHero property to true
  }

  // Method for the superhero to fight crime
  fightCrime() {
    return 'SuperHero is fighting crime';
  }
}

// Create an instance of the SuperHero1 class
const hero2 = new SuperHero1('Bruce', 'Wayne');
// Log the full name of the superhero instance
console.log(hero2.getFullName());
// Log the result of the fightCrime method
console.log(hero2.fightCrime());
