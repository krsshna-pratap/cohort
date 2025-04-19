// promisified version of fs.readFile 
// it's done by wrapping fs.readFile's actual functionality inside a promise 

// using the promise 

/*

function readFile(){
  // read the file and return its value 
  return new Promise();
  
}

const p = readFile("a.txt");

function callback(contents){
  console.log(contents);
}
p.then(callback);

*/

// define the promise 

const fs = require("fs");

function readTheFile(sendTheFinalValueHere){
  // do ur thing whenever u have the final value call sendTheFinalValueHere("finalValue");
  fs.readFile("a.txt","utf-8", function(err,data){
    sendTheFinalValueHere(data);
  })
}

function readFile(){
  // read the file and return its value 
  return new Promise(readTheFile);
}

const p = readFile("a.txt");

function callback(contents){
  console.log(contents);
}
p.then(callback);

// whatever we pass in promise's argument ( readTheFile function ) in that argument's argument ( readTheFile's function argument sendTheFinalValueHere) then p.then part will be called 