const fs = require("fs");

function print1(err, data){
  console.log(data);
}

fs.readFile("b.txt", "utf-8", print1);

fs.readFile("c.txt", "utf-8", print1);

fs.readFile("a.txt", "utf-8", print1);

console.log("done");

// readFile function ~ defination or syntax explained

// function readFile(filePath, encoding, function){
//   // read file 
//   function("error"(err), "hi-there"(data);
// }

function print2(err, data){
  if(err){
    console.log("file not found");
  } else {
    console.log(data);
  }
}

fs.readFile("b.txt", "utf-8", print2); // asynchronous 
console.log("done");