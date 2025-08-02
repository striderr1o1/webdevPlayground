
//rendering a function inside a function call

// const calculator = (function(){
//   const add = (a, b) => a + b;
//   const sub = (a, b) => a - b;
//   const mul = (a, b) => a * b;
//   const div = (a, b) => a / b;
//   return { add, sub, mul, div };
// })();

// calculator.add(3,5); // 8
// calculator.sub(6,2); // 4
// calculator.mul(14,5534); // 77476
// console.log(calculator.add(3,5));

const Formatter = (function() {
  let timesRun = 0;

  const log = (message) => console.log(`[${Date.now()}] Logger: ${message}`);
  const setTimesRun = () => { 
    log("Setting times run");
    ++timesRun;
  }

  const makeUppercase = (text) => {
    log("Making uppercase");
    setTimesRun();
    return text.toUpperCase();
  };

  return {
    makeUppercase,
    timesRun,
  }
})();

console.log(Formatter.makeUppercase("tomek"));
console.log(Formatter.timesRun = 10);


