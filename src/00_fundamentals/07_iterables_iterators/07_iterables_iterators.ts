// Define an object with a custom iterator
const obj = {
    // Implement the Symbol.iterator method to make the object iterable
    [Symbol.iterator]: function () {
      let step = 0; // Initialize a step counter
  
      // Define the iterator object
      const iterator = {
        // Implement the next method for the iterator
        next: function () {
          step++; // Increment the step counter
  
          // Return different values based on the step counter
          if (step === 1) {
            return { value: 'Hello', done: false }; // First step: return 'Hello'
          } else if (step === 2) {
            return { value: 'World', done: false }; // Second step: return 'World'
          }
          return { value: undefined, done: true }; // After second step: iteration is complete
        },
      };
      return iterator; // Return the iterator object
    },
  };
  
  // Assign the object to a variable for iteration
  const objIterable = obj;
  
  // Use a for...of loop to iterate over the object
  for (const word of objIterable) {
    console.log(word); // Log each word to the console
  }
  