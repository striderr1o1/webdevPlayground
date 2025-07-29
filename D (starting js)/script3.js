let head = {
  glasses: 1
};

let table = {
  pen: 3,
  __proto__: head
};

let bed = {
  sheet: 1,
  pillow: 2,
  __proto__: table
  
};

let pockets = {
  money: 2000,
  __proto__: bed
};

//SOME OBSERVATIONS ON PROTOTYPAL INHERITANCE
// head --> table --> bed --> pockets
//pocket inherits from bed, bed from table, table from head, head from Object
