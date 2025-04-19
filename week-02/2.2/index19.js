// create promisified version of setTimeout

/* 
function setTimeoutPromisified(ms){
    return new Promise (resolve => setTimeout(resolve, ms))
}
  
function afterDone() {
    console.log("5 seconds done");
}

setTimeoutPromisified(5000).then(afterDone); 
*/

function waitFor5S(variableName){ // here, resolve = main
    setTimeout(variableName, 5000);
  }
  
  function setTimeoutPromisified(){
    return new Promise(waitFor5S);
  }
  
  function main(){
    console.log("main is called");
  }
  
  setTimeoutPromisified().then(main); // promise based approach
  
  setTimeout(main, 5000); // call-back based approach

// create promisified version of fetch fs.readFile

const fs = require("fs");

function readTheFile(sendTheFinalValueHere){

  fs.readFile("a.txt", "utf-8", function(err, data){
    sendTheFinalValueHere(data);
  })
  
}

function readFile(fileName){
  // read file and return its value
  return new Promise(readTheFile);
}

const p = readFile();

function callback(contents) {
  console.log(contents);
}

p.then(callback);