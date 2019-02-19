// ====== The Old Way ==============================
var expense = {
  type: 'Business',
  amount: '$45 USD'
}

var type = expense.type;
var amount = expense.amount;

// ====== ES6 way ==============================

const { type } = expense;
const { amount } = expense;
// further destructing is:
const { type, amount } = expense;

type;
amount;

// NOTE: This is not create a new object, but rather declaring a new variable
// that is referencing what is on the right side of the " = "

// ====== The Old Way ==============================
var savedFiled = {
  extension: 'jpg',
  name: 'repost',
  size: 14010
}

function fileSummary(file){
  return `The file ${file.name}.${file.extension} is of size ${file.size}`
}

fileSummary(savedFiled)

// ====== ES6 way ==============================
function fileSummary({name, extension, size}) {
  return `The file ${name}.${extension} is of size ${size}`
}

fileSummary(savedFiled)

// NOTE: if you have a second object being passed in and you want acces to that
// simply add a comma and open the curly braces to access the key


// DESTRUCTURING OFF OF ARRAYS

const comapnies = [
  'Google',
  'Facebook '
]

const [ name, name2 ] = comapnies;
name;  //this will return "Google"
name2; // this will return 'Facebook'

// NOTE: when destructing an array you're grabbing 1 item, and follows
// the practice of the first item will match the index 0 and so on.

// NOTE: to destructure a property use { } to destructure an element use [ ]


// DESTRUCTURING ARRAY & OBJECTS

const companies = [
  { name: 'Google', location: 'Mountain View' },
  { name: 'Facebook', location: 'Menlo Park' },
  { name: 'Uber', location: 'San Fancisco' }
];

// goal get location to Google
// ====== The Old Way ==============================
 var gLocation = companies[0].location;
 gLocation;

// ====== ES6 way ==============================
 const [{location}] = companies;
location;

//NOTE: outside in we grab the first element and then deconstruct the location property off of it.

// ANOTHER EXAMPLE
const Google = {
  locations: ['Mountain View', 'New York', 'London']
};

const { location: [location] } = Google


// ANOTHER EXAMPLE
function signup({name, password, email, dob, city}){
  console.log(name);
}

const user = {
  name: 'dallin',
  password: 'password',
  email: 'drp@example.com',
  dob: '1/1/1990',
  city: 'New York'
}

signup(user);
//NOTE: when a list of argument gets to be rather large, it becomes
// hard to remember ALL the arguments and order of them.
