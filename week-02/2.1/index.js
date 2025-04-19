function sum1(a, b){
    return a+b;
}

let finalSum1 = sum1(20, 30);
console.log(finalSum1);

// if we will pass one number in " ", it will take it as string and string concatenation will happen instead of sum  

let finalSum2 = sum1("20", 30); 
console.log(finalSum2);

// to make code more secure, can also use parse method ~ will parse string into int / can use typecast etc also 

function sum2(a, b){
    return parseInt(a)+parseInt(b);
}

let finalSum3 = sum2("20", "30");
console.log(finalSum3); 

// write function for find sum from 1 to n w loops

function sum(n) {
	let ans = 0;
	for (let i = 1; i <= n; i++) {
		ans = ans + i;
	}
	return ans;
    // can also use direct formula for it ~ n*(n+1)/2
    // return n*(n+1)/2;
}

const ans = sum(10);
console.log(ans);