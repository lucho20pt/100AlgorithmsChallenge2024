// The Javascript keyword "this" when whithin a function refers to the object it belongs to
// It make functions reusable by letting you decide the object value
// This value is determinded by how a function is called

// How to determine "this"
//////////////////////////

// # Implicit binding
const Person = {
  name: 'John Doe',
  sayMyName: function () {
    return 'My name is ' + this.name
  },
}

// (the object to the left dot keyword is the object that "this" is refering to)
console.log(Person.sayMyName())

// # Explicit binding
const Car = {
  colour: 'blue',
}
function carBrand() {
  return 'Car colour is ' + this.colour
}
console.log(carBrand.call(Car))

// # New binding
function Zoo(name?: string) {
  // the new keyword creates an new empty obj
  // this = {} 
  this.name = name
}

const animal1 = new (Zoo as any)('Panda')
console.log(animal1.name)

// # Default binding
console.log(Zoo())
// (javscript will try to find the variable name
// and since it does not find it will try to look for it
// into the global scope, witch does not exist and return it undefined)


//////////////////////////
// Order of preference
//////////////////////////

/*
  New binding
  Explicit binding
  Implicite bindig
  Default binding
*/
