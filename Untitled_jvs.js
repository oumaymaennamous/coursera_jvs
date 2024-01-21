// Define an array of names
var names = ["John", "Jane", "Jerry", "Tom", "Alice"];

// Loop over each name in the array
for (var i = 0; i < names.length; i++) {
  // Get the current name
  var name = names[i];

  // Check if the name starts with 'J' or 'j'
  if (name.charAt(0).toLowerCase() === 'j') {
    // If it starts with 'J' or 'j', print 'Goodbye'
    console.log("Goodbye " + name);
  } else {
    // If it starts with any other letter, print 'Hello'
    console.log("Hello " + name);
  }
}
