// Define num 1 and num 2 for multiplication
let num1 = 31;
let num2 = 2;
let multiply = num1*num2;// 31*2 = 62

// Generate a random integer grater than 0
let random = Math.floor(Math.random()*10)+1;

// Define num3 and num4 for modulus operation
let num3 = 10;
let num4 = 6;
let mod = num3 % num4;//10 % 6 = 4

// Find the highest number in a set
let max = Math.max(5,10,15,20);//returns 20

//Export variables if needed
module.exports = {multiply,random,mod,max};

