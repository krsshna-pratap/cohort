function greet1(name){
    return "namaste, " + name;
}
let ans1 = greet1("harkirat");
console.log(ans1);

// pros 

// 1 ~ can use same logic again n again / no need write greet code separately just change name  
let ans2 = greet1("shivam"); 
let ans3 = greet1("rajesh"); 
console.log(ans2, ans3);

// 2 ~ can change once for all / hello to namaste, no need to do it separately
function greet2(name){
    return "hello, " + name;
}
let ans4 = greet2("bhuvnesh");
console.log(ans4);

// another example 

function sumTwo(a, b){
    return a+b;
}
let sum1 = sumTwo(2, 3);
console.log(sum1);
let sum2 = sumTwo(3, 5);
console.log(sum2);


function sumThree(a, b, c){
    return a+b+c;
}
let sum3 = sumThree(20, 30, 50); 
let sum4 = sumThree(100, 500, 400); 
console.log(sum3, sum4);