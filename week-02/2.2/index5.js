function waitFor5S(variableName){ // here, resolve = main
    setTimeout(variableName, 5000)
  }
  
  function setTimeoutPromisified(){
    return new Promise(waitFor5S);
  }
  
  function main(){
    console.log("main is called"); 
  }
  
  setTimeoutPromisified().then(main); // promise based approach
  
  setTimeout(main, 5000); // call-back based approach
  
// promise working underhood ~ promise will take a function as input, whatever this function's first argument, whenever that argument is called i  (promise) will call whatever is passed in .then(argument)   

// lke here, when waitFor3S called then it goes to waitFor3S() it passes an argument variableName which is set to 5 sec then it calls main, which will be called after 5 sec, thus main gets printed after this much time