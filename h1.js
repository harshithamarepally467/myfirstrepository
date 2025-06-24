let a=10;
let  b=5;
console.log("arithmetic operators:");
console.log("a=",a,",b=",b);
let sum=a+b;
let difference=a-b;
let product=a*b;
let quotient=a/b;
let remainder=a%b;
let exponent=a**b;
console.log("arithmetic operators");
console.log("sum:",sum);
console.log("difference:",difference);
console.log("product:",product);
console.log("quotient:",quotient);
console.log(remainder);
console.log(exponent);




//ASSIGMENT OPERATORS
let x=10;
x +=5;
x -=3;
x *=2;
x /=4;
x %=6;
console.log("arithmetic operators:");
console.log("x after assignments",x);
console.log("\n");

//comparision operators
let isEqual=(a == b);
let isStrictEqual = (a === b);
let isNotEqual = (a != b);
let isStrictNotEqual = (a !==b);
isGreaterThan = (a > b);
isLessThan =(a<b);
isGreaterThanOrEqual =(a>=b);
isLessThanOrEqual =(a<=b);
console.log("comparision operator:");
console.log(isEqual);
console.log(isStrictEqual);
console.log(isNotEqual);
console.log(isStrictNotEqual);
console.log(isGreaterThanOrEqual);
console.log(isLessThanOrEqual);


//logical operators
let andOperator =(a > 0 && b > 0);
let orOperator =(a > 0 || b <0);
let notOperator =!(a<b);
console.log("logical operators:");
console.log(andOperator);
console.log(orOperator);
console.log(notOperator);

//bitwise operators
let bitwiseAnd = a & b;
let bitwiseOr = a|b;
let bitwiseXor = a ^ b;
let bitwiseNot = ~a;
let leftshift = a << 1;
let rightshift = a >> 1;
console.log("bitwise operators");
console.log(bitwiseAnd);
console.log(bitwiseOr);
console.log(bitwiseXor);
console.log(bitwiseNot);
console.log(leftshift);
console.log(rightshift);
//



//ternary operatorss
let age =17;
let eligibility =(age >= 18)? "elligible to vote":"not eligible to vote";
console.log("ternary operator:");
console.log("eligibility",eligibility);
console.log("\n");
//


//type of operator
let variableType = typeof a;
console.log("Type of operator");
console.log("type of variable 'a':",variableType);
console.log("\n");