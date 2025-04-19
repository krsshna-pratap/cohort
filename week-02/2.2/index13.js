const fs = require("fs");

console.log("top of the file");

function readTheFile(resolve){
    console.log("readTheFile is called");
    setTimeout(function(){
        console.log("callback based setTimeout completed");
        resolve();
    }, 10000);
}

function setTimeoutPromisified(fileName){
    console.log("setTimeoutPromisified called");
    // read the file and return its value 
    return new Promise(readTheFile);
}

const p = setTimeoutPromisified();

function callback(){
    console.log("timer is done");
}

p.then(callback);

console.log("end of the file");