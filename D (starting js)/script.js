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
