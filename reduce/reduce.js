// ====== old way of doing things ==============
var sum = 0;

for (var i = 0; i < numbers.length; i++) {
  sum += numbers[i];
}

// ====== ES6 way ==============================
numbers.reduce(function(sum, number) {
  return sum + number
}, 0)

// NOTE: second argument ( 0 ) given to the reducer function is setting the
// initial value that reduce will iterate from.

// second example
var primaryColors = [
  { color: 'red' },
  { color: 'yellow' },
  { color: 'blue' }
]

primaryColors.reduce(function(previous, primaryColor){
  previous.push(primaryColor.color);

  return previous;
}, [])
