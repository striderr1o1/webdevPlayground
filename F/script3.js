class Rectangle {
  #height = 0;
  height2 = 10;
  #width;
  constructor(height, width) {
    this.#height = height;
    this.#width = width;
  }
  showDetails(){
    return this.#height + ":" + this.#width 
  }
}
let rec = new Rectangle(10,15);
console.log(rec.showDetails());
console.log(rec.height);//does not show
console.log(rec.height2);//does show

