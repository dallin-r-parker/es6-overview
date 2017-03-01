// old way of doing things

var computers = [
  { name: 'Apple', ram: 24 },
  { name: 'Compaq', ram: 4 },
  { name: 'Acer', ram: 32 }
]

var allComputersCanRunPrograms = true;
var onlySomeComputersCanRunProgram = false;

for (var i = 0; i < computers.length; i++) {
  var computer = computers[i];
  if (computer.ram < 16) {
    allComputersCanRunPrograms = false;
  } else {
    onlySomeComputersCanRunProgram = true;
  }
}

// Helper Method Substitute
computers.every(function(computer) {
  return computer.ram > 16;
})


 // NOTE: the difference between the 'every' and 'some' operator is
 // everything in the array has to fit the logic to come back 'true'
 // whereas the some operator is like saying 'or' || so at least one

 computers.some(function(computer) {
   return computer.ram > 16;
 })


// example

var names = [
  'Dallin',
  'Parker',
  'Mikayda'
];

names.every(function(name){
  return name.length > 4;
})
// False

names.some(function(name){
  return name.length > 4
})

// True
