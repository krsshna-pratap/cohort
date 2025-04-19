function promiseFn(resolve){
    // resolve is kind of works as an teleport  
    let c = 0;
    for(let i=0; i<100000000; i++){
        c++;
    }
    resolve();
    resolve("hi there mard");
}

const p = new Promise(promiseFn);

function callback(){
    console.log("hi there");
}
p.then(callback);