//Generic function
function identity<T>(arg: T): T {
    return arg;
}

let num = identity<number>(42); // T is number
let str = identity<string>("Hello"); // T is string

//Generic interface 
interface Pair<T, K> {
  first: T;
  second: K;
}

let pair: Pair<string, number> = { first: "one", second: 2 }

//Generic type
type Person<T, K, V> = {
  name: T,
  age: K,
  isMarried: V
}

const person1: Person<string, number, boolean> = {
  name: 'Bob',
  age: 67,
  isMarried: false
}

//Generics in class
class Box<T> {
  content: T

  constructor(content: T){
    this.content = content
  }

  getContent(): T {
    return this.content
  }
}

const letterBox = new Box('a')
const numberBox = new Box(1)

//constraints
type LengthType = {length: number}
function getLength<T extends LengthType>(args: T){
  return args.length
}

console.log(getLength('abc'))
getLength([1, 2])

//this doesn't work
//Argument of type 'number' is not assignable to parameter of type 'LengthType'
//getLength(5)

