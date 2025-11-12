console.log("Level 2 : Functions Practice\n");
console.log("================================\n");
console.log("Q1-\n");
//Write a higher-order function `runTwice(fn)` that
// takes another function and executes it two times.
function runTwice(fn) {
    fn();
    fn();
}

runTwice(() => {
    console.log(`Higher Order Function.`);
});


console.log("================================\n")
console.log("Q2-\n");
//Create one pure function that always returns the
// same output for a given input, and one impure
// function using a global variable.

// Pure function
function multiply(num) {
    return num * 2;
}

console.log(multiply(5));

// Impure function
let gloNum = (Math.random() * 9).toFixed(1);

function randFunc(globNum) {
    return globNum * globNum;
}

console.log(randFunc(gloNum));

console.log("================================\n")
console.log("Q3-\n");
//Write a function that uses object destructuring
// inside parameters to extract and print `name` and
// `age`.

// obj destructuring
function objFunc({name, age}) {
    console.log(name);
    console.log(age);
}

objFunc({
    name: "John", age: 32,
});

console.log("================================\n")
console.log("Q4-\n");
// Demonstrate the difference between normal
// function and arrow function when used as object
// methods

const person = {
    name: "John", normFun: function () {
        console.log('Normal', this.name);
    }, arrowFun: () => {
        console.log('Arrow', this.name);
    }
};

person.normFun();   //John
person.arrowFun();  // undef

//Normal functions as object methods dynamically bind this to the calling object. Arrow functions lexically inherit
// this from their surrounding scope, which is usually the global context when used as object methods, leading to
// this not referring  to the object itself


console.log("================================\n")
console.log("Q5-\n");
// Given an array of numbers, use `map()` to create a
// new array where each number is squared.

function arrMap(arr){
   return arr.map(el=>
       el*el
    );
}
console.log(arrMap([1,2,3,4,5]));

console.log("================================\n")
console.log("Q6-\n");
// Use `filter()` to get only even numbers from an array.

function arrFilter(arr){
    return arr.filter(el=>
         el % 2 ===0
    );
}
console.log(arrFilter([88,33,62,89,10,99,36]));

console.log("================================\n")
console.log("Q7-\n");
//Use `reduce()` to find the total salary from an array of numbers `[1000, 2000, 3000]`

function arrReduce(arr){
    return arr.reduce((total,current)=>
    total+current );
}
console.log(arrReduce([1000, 2000, 3000]));

console.log("================================\n")
console.log("Q8-\n");
//Create an array of names and use `some()` and `every()` to test a condition (e.g., all names longer than 3 chars).

const names = ["Jane", "Ram", "Haley", "Cindy", "Simi", "Natalie", "Sam"];
console.log(names.some(name => name.length > 5));
console.log(names.some(name => name.startsWith("M")));

console.log(names.every(name => name.length >= 3));
console.log(names.every(name => name.includes('a')))

console.log("================================\n")
console.log("Q9-\n");
// Create an object `user` and test the behavior of `Object.freeze()` and `Object.seal()` by adding/changing keys.

const user = {
    id: 1101,
    name: 'Max',
    department: 'Operation',
}
Object.freeze(user);
user.department = 'Finance';    // modification not allowed due to freeze
user.location = 'Finland';  // new addition not allowed
console.log(user);
console.log(user.department);

const user2 = {...user};
user2.id = 9090;
user2.department = 'IT';
user2.name = 'Shane';
console.log(user2);

Object.seal(user2);
user2.id = 5656; // modification allowed
user2.name = 'Cindy'; // allowed
user2.location = 'Moscow';  // new addition not allowed
console.log(user2);

console.log("================================\n")
console.log("Q10-\n");
//Create a nested object (`user → address → city`) and access the city name inside it.
const user3 = {
    name: 'Leo',
    home: {
        address: {
            city: 'Delhi',
            country: 'India',
        }
    }
};
console.log(user3.home.address.city);
const { city } = user3.home.address;
console.log(city);