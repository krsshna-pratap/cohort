/*

  function promiseCallback(resolve){
    setTimeout(resolve, 5000);
  }

  function main(){
    console.log("main is called");
  }

  promiseCallback(main);

*/

function waitFor5S(variableName){
    setTimeout(variableName, 5000)
}
  
function main(){
    console.log("5 seconds over");
}
  
waitFor5S(main); 