// 

function Player(name, marker) {
  this.name = name;
  this.marker = marker;
  
  this.sayName = function() {
    console.log(this.name)
  };
}

const player1 = new Player('steve', 'X');
const player2 = new Player('also steve', 'O');

console.log(player1 )
console.log(Object.getPrototypeOf(player1) === Player.prototype); // returns true
console.log(Object.getPrototypeOf(player2) === Player.prototype); // returns true

console.log(Object.getPrototypeOf(player1))

Player.prototype.sayHi=function(){
  console.log("Hi")
}


// Don't do this!
console.log(player1.__proto__ === Player.prototype); // returns true
console.log(player2.__proto__ === Player.prototype); // returns true

function person(name, age, location){
  this.name = name;
  this.age = age;
  this.location = location;
}
let mustafa = new person("Mustafa Noman", 19, "Islamabad");

console.log(Object.getPrototypeOf(Player.prototype) === Object.prototype);
console.log(player1.valueOf());

Object.prototype.saySmth = function(){//defining function on the object prototype, it is then inherited by all types of objects
  console.log("What do I say?");
}
player1.saySmth()//shated by both object
mustafa.saySmth()

console.log(player1.hasOwnProperty('valueOf'));// false, because player1 does not has its own valueOf property
console.log(Object.prototype.hasOwnProperty('valueOf')); // true, because Object has its own valueOf property
console.log(Object.getPrototypeOf(Object.prototype))

let y = new Array(3)

console.log(y);
console.log(y.__proto__)
console.log(y.__proto__.__proto__); //goes back to object

console.log(y instanceof Array);
console.log(Array instanceof Object)
//############################################################################################################################
// Initialize constructor functions
function Hero(name, level) {
  this.name = name;
  this.level = level;
}

function Warrior(name, level, weapon) {
  Hero.call(this, name, level);

  this.weapon = weapon;
}

function archer(name, level, ability) {
  Hero.call(this, name, level);

  this.ability = ability;
}

// Link prototypes and add prototype methods
Object.setPrototypeOf(Warrior.prototype, Hero.prototype);
Object.setPrototypeOf(archer.prototype, Hero.prototype);

Hero.prototype.greet = function () {
  return `${this.name} says hello.`;
}

Warrior.prototype.attack = function () {
  return `${this.name} attacks with the ${this.weapon}.`;
}

archer.prototype.heal = function () {
  return `${this.name} casts ${this.spell}.`;
}

// Initialize individual character instances
const hero1 = new Warrior('Bjorn', 1, 'axe');
const hero2 = new archer('Kanin', 1, 'cure');