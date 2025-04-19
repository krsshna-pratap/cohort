// promise chains - more clearer syntax than callback hells thus we use promise more than callbacks

function setTimeoutPromisified(duration) {
    return new Promise (function (resolve) {
      setTimeout(resolve, duration);
    });
  }
  
  // promise-chains
  
  setTimeoutPromisified(1000).then(function(){
    console.log("hi-1X");
    return setTimeoutPromisified(3000);
  }).then(function(){
    console.log("hi-2X");
      return setTimeoutPromisified(5000);
  }).then(function(){
    console.log("hi-3X");
  })
  
  console.log("outside-callback-hell")
  
  // sort string in javascript
  
  let str = "acbedf";
  const sortedstr = str.split("").sort().join("");
  // acbedf -> split ["a", "c", "b", "e", "d", "f"]
  // sort then join them 
  console.log(sortedstr);