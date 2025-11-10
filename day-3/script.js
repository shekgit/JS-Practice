console.log("Level 1 : Functions Practice\n");
console.log("================================\n");
console.log("Q1-\n");

function sayHello(){
    console.log("Hello JavaScript!");
}
sayHello();

console.log("================================\n")
console.log("Q2-\n");

function add(a,b){
    return a + b;
}
console.log(add(10,20));

console.log("================================\n")
console.log("Q3-\n");

function greet(name = "Guest"){
    console.log(`Hi ${name}!`);
}
greet("JS");
greet();

console.log("================================\n")
console.log("Q4-\n");

function addUnlimited(...numbers){
    return numbers.reduce((total,current)=>{
        return total + current;
    },0);
}
console.log(addUnlimited(1,2,3,4,5,6,7,8,9,10));

console.log("================================\n")
console.log("Q5-\n");

(function(){
    console.log('I run instantly!');
})();

console.log("================================\n")
console.log("Q6-\n");

function outer(){
    let outer = "Outer string";
    function inner(){
        console.log(outer);
        outer = 'Modified by inner';
    }
    inner();
    console.log(outer);
}
outer();

console.log("================================\n")
console.log("Q7-\n");

function arrFun(){
    const fruits = ["Mango", "Apple", "Peach", "Pear", "Orange"];
    console.log(fruits);
    fruits.push("Grapes");
    fruits.shift();
    console.log(fruits);
}
arrFun();

console.log("================================\n")
console.log("Q8-\n");

function arrEl(){
    const arr = [111,333,555,777,999];
    arr.forEach(el=>{
        console.log(el);
    });
}
arrEl();

console.log("================================\n")
console.log("Q9-\n");

function personData() {
    const person = {
        name: 'John',
        age: 25,
        city: 'San Francisco',
    }
    for(let key in person){
        console.log(person[key]);
    }
}
personData();

console.log("================================\n")
console.log("Q10-\n");

function timeOut(){
    setTimeout(()=>{
        console.log("Time's up!");
    },2000);
}
timeOut();