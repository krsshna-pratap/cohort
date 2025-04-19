// A Promise in JavaScript is an object that represents the eventual completion (or failure) of an asynchronous operation and its resulting value.

/*

// promise 
function main() {
  
}

setTimeout(main, 5000); // call-back

*/

// it returns instance of promise class
function setTimeoutPromisified(ms){
    return new Promise (resolve => setTimeout(resolve, ms))
  }
  
  function afterDone() {
    console.log("5 seconds done");
  }
  
  setTimeout(afterDone, 5000); // call-back version 
  
  setTimeoutPromisified(5000).then(afterDone); // promise version ~ cleaner syntax