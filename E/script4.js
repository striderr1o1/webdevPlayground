var age = 110;//let and const declarations are not attached to the window
function showAge(){
    let age = 100; //if i remove this, it will go one scope up and look for age. Right now, it will look for it here. 
    console.log(age);
}

showAge();