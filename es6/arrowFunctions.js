// old way
const add = function (a, b) {
  return a + b
}
add(1,2);

// ES6 way
const add = (a, b) => {
  return a + b
}
add(3, 6);

// NOTE: when dealing with a single js expression like the example shows it can
// be refactored down to:

const add = (a, b) => a + b;

// more features of fat arrow

const double = function(number) {
  return 2 * number;
}
double(8)

// ES6 refactored
// NOTE: with a single argument you can take off the parenthesis, but if there > 1 argument or
// no arguments you must leave the ( )
const double = number => 2 * number;
const number = [ 1,3,5,6,];

numbers.map(number => 2 * number)

// another example
const team = {
  members: ['Jane', 'Bill'],
  teamName: 'Super Squad',
  teamSummary: function(){
    return this.members.map(member => {
      return `${member} is on team ${this.teamName}`;
    })
  }
}

team.teamSummary()
