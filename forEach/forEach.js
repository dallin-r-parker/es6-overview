// this is the old way
var colors = ['red', 'blue', 'green'];

for (var i = 0; i < colors.length; i++) {
  console.log(colors[i]);
}
// Helper Method substitution

colors.forEach(function(color) {
  console.log(color);
})
// second example

//Create an array of numbers
var numbers = [1,2,3,4,5]
// Create a variable to hold the sum
var sum = 0;
// Loop over the array, incrementing the sum variable
numbers.forEach(function(number){
  sum += number;
});
// print the sum variable
sum;

// another options is to pass a function into the "forEach"
// that does the adding for us.

// second example part A
var numbers = [1,2,3,4,5]

var sum = 0

function adder(number){
  sum += number;
}

numbers.forEach(adder);
sum;

// NOTE: You don't need to invoke the "adder" function as an argument
