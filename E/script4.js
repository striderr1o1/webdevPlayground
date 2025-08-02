var age = 110;
function showAge(){
    let age = 100; //if i remove this, it will go one scope up and look for age.
    console.log(age);
}

showAge();