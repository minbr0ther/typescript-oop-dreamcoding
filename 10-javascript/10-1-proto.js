const x = {};
const y = {};
console.log(x); // {}
console.log(y); // {}

console.log(x.__proto__ === y.__proto__); // true

function CoffeeMachine(beans) {
  this.beans = beans;
}

// prototype member level
CoffeeMachine.prototype.makeCoffee = (shots) => {
  console.log('making...☕️');
};

const machine1 = new CoffeeMachine(10);
const machine2 = new CoffeeMachine(20);

function LatteMachine(milk) {
  this.milk = milk;
}
LatteMachine.prototype = Object.create(CoffeeMachine.prototype);

// latteMachine은 CoffeeMachine을 상속하고
// CoffeeMachine은 Object를 상속한다.
const latteMachine = new LatteMachine(123);
console.log(latteMachine.makeCoffee());
