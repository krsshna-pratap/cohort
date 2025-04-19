  function timeout() {
    console.log("click the button.");
  }
  
  console.log("hi");
  
  setTimeout(timeout, 1000); // io intensive tasks 
  
  console.log("welcome to loupe.");
  
  let c = 0;
  
  // cpu intensive tasks ~ will take 3-4 seconds   
  for(i = 0; i < 10000000000; i++){
    c = c + 1;
  }
  
  console.log("extensive operation done.");
  
  /*
    what will be printed ? 
  
    option 1 : correct 
    Hi
    welcome to loupe.
    extensive operation done
    Click the button
  
    option 2 : incorrect 
    Hi
    welcome to loupe.
    Click the button
    extensive operation done
  
    reason : because thread wasn't free, cpu tasks can't be stopped till finished 
  */