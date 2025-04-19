// create function which takes array of objects as an i/p and returns user whose age > 18 and are males 

function function1(users){
    let arr = [];
    for(let i=0; i<users.length; i++){
        if ( users[i].gender === "male" && users[i].age > 18 ) {
            arr.push(users[i]);
        }
    }
    return arr;
}

let users = [
    {
        name : "krsshna",
        age : 20,
        gender : "male"
    }, 
    {
        name : "shraddha",
        age : 21,
        gender : "female"
    }, 
    {
        name : "naitik",
        age : 20,
        gender : "male"
    }
]

let finalAnswer = function1(users); console.log(finalAnswer);
console.log(function1(users));