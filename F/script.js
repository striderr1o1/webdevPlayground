let user = {
    set name(v){
        this._name = v;
    },
    get name(){
        return this._name;
    }
}
user.name = "Mustafa";
console.log(user.name);
//#####################################################
class food {
    constructor(name, calories) {
        this.name = name;
        this.calories = calories;
    }

    showFood(){
        return {foodname: this.name, cal: this.calories};
    }
    
}

let spaghetti = new food("Spaghetti", 200);
console.log(spaghetti.showFood()["foodname"]);

class Person{
    constructor(name, age, location){
        this.name = name;
        this.age = age;
        this.location = location;
    }
    showPersonInfo(){
        return {name: this.name, age: this.age, location: this.location};
    }
}

let Ranger = new Person("Sikander", 20, "Karachi");

console.log(Ranger.showPersonInfo());