/*
const now = new Date(); // Current date and time
console.log(now.toISOString()); // Outputs the date in ISO format
console.log(now.getDay()); 
console.log(now.getMonth()); // 0->Jan, 1->Feb, .... 11->Dec 
console.log(now.getFullYear());  
*/
const map = new Map();
map.set('name', 'Alice');
map.set('age', 30);
console.log(map.get('name'));
console.log(map.get('age'));
// can also write it as like : 
let firstName = map.get('name');
console.log(firstName);