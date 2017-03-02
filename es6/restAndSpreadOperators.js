// using the rest operator
function addNumbers(...numbers) {
  return numbers.reduce((sum, number) => {
    return sum + number;
  }, 0)
}
addNumber(1,2,4,5,3)

// exmaple
const defaultColor = [ 'red', 'green' ];
const userFavColor = [ 'blue', 'yellow' ];
const fallColors  = [ 'fire red', 'fall orange']
// possible approach is the concat method
defaultColor.concat(userFavColor);

// using the spread operator
[ 'green', ...fallColors, ...defaultColor, ...userFavColor ];
// NOTE: you can add in single colors

// example 2 (rest & spread operator)
function validateShoppingList(...items) {
  if(items.indexOf('milk') < 0) {
    return [ 'milk', ...items ];
  }
  return items
}

validateShoppingList('orange', 'bread');

// example 3

const MathLibrary = {
  calculateProduct(...rest){
    console.log('please use the multiply method instead');
    return this.multiply(...rest);
  },
  multiply(a, b) {
    return a * b
  }
}
