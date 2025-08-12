// "Named Class Expression"
// (no such term in the spec, but that's similar to Named Function Expression)
let User = class MyClass {
  sayHi() {
    console.log(MyClass); // MyClass name is visible only inside the class
  }
};

new User().sayHi(); // works, shows MyClass definition
// new MyClass().sayHi();
// console.log(MyClass); // error, MyClass name isn't visible outside of the class

function makeClass(phrase) {
  // declare a class and return it
  return class {
    sayHi() {
      console.log(phrase);
    }
  };
}

// Create a new class
let User2 = makeClass("My name is Mustafa");

new User2().sayHi(); // My name is Mustafa

//Using computed names
class Person {
    ['Say'+'name'](){
        console.log("Mustafa");
    }
}

new Person().Sayname();

