// the real operation that we want to promisfy

function doAsyncOp(resolve){
    setTimeout(resolve, 3000); // old, callback based, async function
}
// note ~ first argument of doAsyncOp is a function 

function setTimeoutPromisified(){
    return new Promise(doAsyncOp);
}

const p = setTimeoutPromisified();

// const p = new Promise(doAsyncOp);

function callback(){
    console.log("3 seconds have passed");
}
p.then(callback);