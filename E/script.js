//CLOSURES
function firstname(firstName){
    let first = firstName;
    function lastn(lastname){
        console.log( first + " "+lastname);
    }
    return lastn;
    
}
//FACTORY ADDER FUNCTION
function makeAdder(x){
    return function(y){
        return x+y;
    }
}

let add = makeAdder(2);
let add2 = add(2);
console.log(add2);
//#################################################################
function Player(name, age){
    this.name = name;
    this.age = age;
}

let ranger = new Player("ranger", 19);
console.log(ranger);
//#################################################################

function createUser(name, age, location){
    return {name, age, location};
}
let obj1 = createUser("Mustafa", 19, "Pakistan");
console.log(obj1);
console.log(obj1.age);
console.log(obj1["name"]);
//DESTRUCTURING
const {location, age} = obj1;
console.log(location);
console.log(age);

const array = [1,2,3,4,5];
const [a,b,c,d,e] = array;
console.log(e); //logs 5
console.log(c); //logs 3





