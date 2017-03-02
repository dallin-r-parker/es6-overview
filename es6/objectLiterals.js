// without Object Literals
function createBookShop(inventory) {
  return {
    inventory: inventory,
    inventoryValue: function () {
      return this.inventory.reduce((total, book) => total + book.price, 0);
    },
    priceForTitle: function(title) {
      return this.inventory.find(book => book.title === title).price;
    }
  };
}

const inventory = [
  { title: 'Harry Potter', price: 10},
  { title: 'Eloquent JS', price: 15 }
];

const bookShop = createBookShop(inventory)

bookShop.inventoryValue();

// With Object Literals
// NOTE: two rules of Object Literals
// 1) When referencing a key value pair that are the same it can be condensed
//into a single statement (line 29)
// 2) if you have a key value pair where the value is a function you can ommit
// the word function and the " : " colon (line 33, 36)

function createBookShop(inventory) {
  return {
    inventory,
    inventoryValue() {
      return this.inventory.reduce((total, book) => total + book.price, 0);
    },
    priceForTitle (title) {
      return this.inventory.find(book => book.title === title).price;
    }
  };
}

const inventory = [
  { title: 'Harry Potter', price: 10},
  { title: 'Eloquent JS', price: 15 }
];

const bookShop = createBookShop(inventory)

bookShop.inventoryValue();

// example
function saveFile() {
  $.ajax({
    url,
    data,
    method: 'POST'
 });

}

const url = "http://fileupload.com"
const data = { color: 'red' }

saveFile(url, data)
