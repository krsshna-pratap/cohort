const fs = require("fs");

function setTimeoutPromisified(duration){
    return new Promise(function(resolve){
        setTimeout(resolve, duration);
    });
}

function readFileAsync(){
    return new Promise(function(resolve, reject){
        fs.readFile("a.txt","utf-8", function(err, data){
            // err
            if(err){
                reject("file not found");
            }
            else {
                resolve(data);
            }
        })
    })
}

readFileAsync()
    .then(function(x){
        console.log("file has been read");
        console.log(x);
    })
    .catch(function(e){
        console.log(e);
    })