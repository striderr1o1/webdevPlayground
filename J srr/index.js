function Log(msg){
    console.log(msg);
}
//single responsibility rule
class Car{
    constructor(name, model, engine, avg){
        this.name = name;
        this.model = model;
        this.engine = engine;
        this.avg = avg;
    }

    StartCar(){
        Log(`Car name: ${this.name}\nModel: ${this.model}\nEngine: ${this.engine}\n Avg: ${this.avg}...The Car has Started`)
    }
}

let car = new Car("car", "2010", "PIA 2.0", 14);
car.StartCar();

