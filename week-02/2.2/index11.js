/* 

function callback() {
  console.log("hi");
} 

setTimeout(callback, 1000);

// can also write it in this format

setTimeout(
  function callback() {
    console.log("hello-there");
  },
1000);

*/

// make code which print hello after 1 second then hello repeat after 5 second 
// callback hell ~ when we have to make one asynchronous call after another asynchronous call  

setTimeout(
    function (){
      console.log("hello-there-1X");
      setTimeout(
        function(){
          console.log("hello-there-2X")
        }
      , 5000);
    }
  , 10000);