function setTimeoutPromisified(duration){
    return new Promise(function(resolve){
        setTimeout(resolve, duration);
    })
}

// setTimeout => promisified setTimeout
function callback(){
    console.log("5 seconds has passed");
}

setTimeoutPromisified(5000).then(callback);