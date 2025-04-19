// internal working of promise 

function random(resolve){ // resolve is also a function 
  // resolve();
  setTimeout(resolve, 5000);
}

/*
let p1 = new Date(); // object of date class 
console.log(p1);

let p2 = new Map();
console.log(p2);
*/

let p = new Promise(random); // promise is supposed to return u something eventually 
// console.log(p);

// using the eventual value returned by the promise 
function callback(){
  console.log("promise-succeded");
}
p.then(callback); // thus, whenever promise gets complete please call call-back function

// thus defination also satisfies like whenever we will call random then in random function whatever argument is there(resolve), whenever it will called then promise will run .then part and will eventually return u something 