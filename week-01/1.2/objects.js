let user1Name = "krsshna-pratap";
let user1Age = "20";
let user1Gender = "male";

// create object  
let user1 = {
    name : "krsshna-pratap",
    age : 20,
    gender : "male"
}
console.log(user1.name); console.log(user1["name"]);
console.log(user1.age); console.log(user1["age"]);

// function 
function introduction(user){
    console.log("hi there, " + user1.name + " this side. " + "i am " + user1.age + " periods old");
}

introduction(user1);

// note points 
// 1 - let will not let u create another variable w similar name
// let touristPlace = "bali";
// let touristPlace = "bali";
// var will let u create but even then it will get overridden w earlier one
// var combatSports = "wrestle-box";
// var combatSports = "mixed-martial-arts";
// console.log(combatSports);

