/**********************************
 * JAVASCRIPT PRACTICE
 **********************************/

// ========== SECTION 1: BASIC OPERATORS ==========
console.info("============================");
console.log("SECTION 1: BASIC OPERATORS");
console.info("============================");
console.log("(1.a):\n");
let a = 10, b = 3;
console.log("a+b ", a+b);
console.log("a-b ", a-b);
console.log("a*b ", a*b);
console.log("a/b ", a/b);
console.log("a%b ", a%b);

console.log("\n(1.b):\n");
let x = 5;
x = x + 3;
console.log("x ", x);
x += 3;
console.log("x += ", x);
x -= 3;
console.log("x -= ", x);
x *= 3;
console.log("x *= ", x);
x /= 3;
console.log("x /= ", x);

console.log("\n(1.c):\n");
let count = 5;
console.log("count = ", count);
count++;
console.log("count++ = ", count);
count--;
console.log("count-- = ", count);

console.log("\n(1.d):\n");
console.log("5 == '5' ",5 == '5');
console.log("5 === '5' ",5 === '5');

console.log("\n(1.e):\n");
console.log("10 > 5 ",10 > 5);
console.log("10 < 20 ",10 < 20);
console.log("10 === 10 ",10 === 10);

console.log("\n(1.f):\n");
console.log("true && false ", true && false);
console.log("true || false ", true || false);

console.log("\n(1.g):\n");
console.log("(5 > 3 && 10 > 8) ", (5 > 3 && 10 > 8));   //true
console.log("(5 > 3 || 10 < 8) ", (5 > 3 || 10 < 8));   //true

console.log("\n(1.h):\n");
console.log("5 & 1 ", 5 & 1);
console.log("5 | 1 ", 5 | 1);

console.info("============================");
console.log("SECTION 2: VARIABLE HOISTING");
console.info("============================");

console.log("\n(2.a):\n");
console.log(a2) ;    // a2 = 10
var a2 = 10;
console.log("a2 ", a2) ;

console.log("\n(2.b):\n");
// console.log(b2) ;   // not defined error
let b2 = 10;
console.log("b2 ", b2, "should be used only after declaration") ;  // should be used only after declaration

console.log("\n(2.c):\n");
test();     // works fine
function test() {console.log("Hello");}

console.log("\n(2.d):\n");
// hello();    // don't work when used as func expression, type error
var hello = function() {console.log("Hi");};
console.log("hello() should be called only after defining it")

console.log("What gets hoisted? ",`\nFunction and var gat hoisted. \n Function expression used as variables and let don't get hoisted fully.`);

console.info("================================");
console.log("SECTION 3: CONDITIONAL OPERATORS");
console.info("=================================");

console.log("\n(3.a):\n");
let age = prompt("Enter Age in number : ");
age = Number.parseInt(age);
console.log("Entered age: ",age);
if(age >= 18){
    console.log("Adult");
}
else
    console.log("Minor");

console.log("\n(3.b):\n");
let marks = 75;
if(marks >= 90){
    console.log("A grade");
}else if(marks >= 75){
    console.log("B grade");
}else if(marks >= 50){
    console.log("C grade");
}else{
    console.log("Fail");
}

console.log("\n(3.c):\n");
let city = 'Bhopal';
if(city === 'Bhopal') {
    console.log("MP");
}else if(city === 'Delhi'){
    console.log("Capital");
}else {
    console.log("Unknown city");
}

console.log("\n(3.d):\n");
let score = 40;
score > 35 ? console.log("Pass"): console.log("Fail");

console.log("\n(3.e):\n");
let temperature = 10;
temperature > 30 ? console.log("Hot") : console.log("Pleasant");

console.log("\n(3.f):\n");
let day_num = 3;
switch (day_num) {
    case 1: console.log("Sunday"); break;
    case 2: console.log("Monday"); break;
    case 3: console.log("Tuesday"); break;
    case 4: console.log("Wednesday"); break;
    case 5: console.log("Thursday"); break;
    case 6: console.log("Friday"); break;
    case 7: console.log("Saturday"); break;
    default: console.log("Invalid day");
}

console.log("\n(3.g):\n");
let country = 'India';
age >= 18 && country === "India"? console.log("Eligible for vote"): console.log("Not eligible");