// constructor function
function Car(options) {
  this.title = options.title;
}

Car.prototype.drive = function() {
  return console.log('vroom');
}

function Toyota(options){
  Car.call(this, options);
  this.color = options.color;
}

Toyota.prototype = Object.create(Car.prototype);
Toyota.prototype.constructor = Toyota;

Toyota.prototype.hone = function() {
  return 'beep';
}

const toyota = new Toyota({ color: 'red', title: 'Daily Driver'});
toyota;
toyota.drive();
toyota.honk();

const car = new Car({title: 'Focus'})
car.drive()
car;

// ES6 Classes ===========================================
class Car {
  constructor({title}){
    this.title = title
  }

  drive(){
    return 'vroom'
  }
}

class Toyota extends Car {
  constructor(options) {
    super(options);
  	this.color = options.color
  }

  honk(){
  	return 'beep';
  }
}

const toyota = new Toyota({color: 'red'});
'-----';
toyota;
toyota.honk()
