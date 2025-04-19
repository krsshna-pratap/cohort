// synchronous function 

const { TIMEOUT } = require("dns");

console.log("hello there");

console.log("welcome to india.");

let c = 0;
for(let i = 0; i < 10; i++){
  c = c + 1;
}

console.log(c);

// asynchronous function 

console.log("hello there");

function timeout() {
  console.log("welcome to india.");
}

setTimeout(timeout, 10000);

let x = 0;
for(let i = 0; i < 10; i++){
  x = x + 1;
}

console.log(x);

/* 
    1 setTimeout is io based operation
    2 it doesn't gurantee u that after 10 sec it will run, it will not until cpu is free 
    3 cpu is busier in loop which is a cpu intensive task 
    4 thus setTimeout will be in call-back queue 
    5 cpu will take a look at call-back queue, after its task is done doesn't matter there is more code to it after loop 
    6 first it will finish whole code then it will back to call-back queue
*/ 