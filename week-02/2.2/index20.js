function setTimeoutPromisified(ms){
    return new Promise(resolve => setTimeout(resolve, ms));
}

async function solve(){
    await setTimeoutPromisified(1000);
    console.log("hi");
    await setTimeoutPromisified(3000);
    console.log("hello");
    await setTimeoutPromisified(5000);
    console.log("hi there");
}

solve();

console.log("after solve function");

/*
    option 1 ->
    hi 
    hello
    hi there
    after solve function 

    option 2 ->
    after solve function
    hi 
    hello
    hi there
*/