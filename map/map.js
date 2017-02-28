// this is the old way
var numbers = [1,2,3];
var doubledNumbers = [];

for (var i = 0; i < numbers.length; i++) {
  // numbers[i] = numbers[i] * 2 <--- this is mutating the numbers array
  doubledNumbers.push(numbers[i] * 2);
}

doubledNumbers;

// NOTE: The reason for using the empty array "doubledNumbers" is simply
// to avoid mutating the array "numbers"

// Helper Method substitution
var doubled = numbers.map(function(number){
  return number * 2;
});

doubled;

// Second example
// goal is to find out ONLY the prices of the cars array
var cars = [
  { model: 'Toyota', price: '$17,000' },
  { model: 'BMW', price: '$65,000' }
]

var prices = cars.map(function(car) {
  return car.price;
});

// NOTE: using dot notation we can access the specific value of the key we are
// looking for.
