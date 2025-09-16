class Animal {
  constructor(name) {
    this.name = name;
  }

  speak() {
    console.log(`${this.name} makes a noise.`);
  }
}

class Dog extends Animal {
  constructor(name, type) {
    super(name); // call the super class constructor and pass in the name parameter
    this.type = type;
  }

  speak() {
    console.log(`${this.name} barks.`);
  }
  species(){
    console.log(this.name + "\n" + this.type);
  }
}

const d = new Dog("Mitzie", "dog");
d.speak(); // Mitzie barks.
d.species();