// Define a generator function named objGeneratorFn
function* generatorFn() {
  // Yield the first value 'Hello'
  yield 'Hello';
  // Yield the second value 'World'
  yield 'World';
}

// Create an iterator from the generator function
const iterateGenerator = generatorFn();

// Use a for...of loop to iterate over the generator
for (const word of iterateGenerator) {
  // Log each yielded value to the console
  console.log(word);
}
