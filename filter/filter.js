//this is the old way
var products = [
  { name: 'MacBook Pro', type: 'hardware' },
  { name: 'FinalCut Pro', type: 'software' },
  { name: 'Adapters', type: 'hardware' },
  { name: 'Case', type: 'accessory' }
];

var filteredProducts = [];
// by having this second array it doesn't "mutate" the existing array
for (var i = 0; i < products.length; i++) {
  if (products[i].type === 'hardware') {
    filteredProducts.push(products[i])
  }
}

// Helper Method substitution
products.filter(function(product) {
  return product.type === 'hardware';
  //the boolean statement creates a truthy or falsy statement which it then returns
});

// NOTE: it might be habbit to put an "if" statment; however, it's not necessary
// because you're already creating a truthy or falsy value with the return statment.

// second example
var inventory = [
  { name: 'iPod', type: 'hardware', quantity: '10', price: 300 },
  { name: 'MacBook Pro', type: 'hardware', quantity: '110', price: 1300 },
  { name: 'Mac Pro', type: 'hardware', quantity: '150', price: 2300 },
  { name: 'iPad', type: 'hardware', quantity: '510', price: 700 },
  { name: 'iMac', type: 'hardware', quantity: '210', price: 1500 }
]

// goal: Filter type is 'hardware', quantity is > 100, price is < 1400

inventory.filter(function() {
  return inventory.type === 'hardware'
  && inventory.quantity > 100
  && inventory.price < 1400
});

// this will return the Macbook Pro & iPad
