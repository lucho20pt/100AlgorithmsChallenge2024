// Function to clone objects and modify their properties
export function cloningObjects(userDetails: {
  [key: string]: string | number
}): string | number {
  // Clone userDetails using the spread operator
  const spreadUser = { ...userDetails };
  // Modify the name property of the cloned object
  spreadUser.name = 'Daniela';

  // Clone userDetails using Object.assign
  const newUser2 = Object.assign({}, userDetails);
  // Modify the name property of the cloned object
  newUser2.name = 'Miguel';

  // Clone userDetails using JSON methods
  const newUser3 = JSON.parse(JSON.stringify(userDetails));
  // Modify the name property of the cloned object
  newUser3.name = 'Lara';

  // Return the name property of the original userDetails object
  return userDetails.name;
}

// Call the function with an example object and log the result
console.log(cloningObjects(
  { name: 'lucho', age: 20 }
));
