console.log("Level 1 : Practice\n")

console.info("1)- \n");
console.log('Numbers from 1-10:');
for (let i = 1; i < 11; i++) {
    console.log(i)
}
console.info('************************');
console.info("\n2)- \n");
console.log('Even numbers from 1 to 20:')
for (let i = 1; i < 21; i++) {
    if (i % 2 === 0) {
        console.log(i);
    }
}
console.info('************************');
console.info("\n3)- \n");
console.log('Numbers from 10 to 1:')
for (let i = 10; i > 0; i--) {
    console.log(i);
}
console.info('************************');
console.info("\n4)- \n");
console.log('Print the word "yes" 5 times:')
let i = 0;
while (i < 5) {
    console.log("Yes");
    i++;
}
console.info('************************');
console.info("\n5)- \n");
console.log('Check even or odd from 1 to 10 :')
for (let i = 1; i < 11; i++) {
    if (i % 2 === 0) console.log(`${i} - Even`);
    else console.log(`${i} - Odd`);
}
console.info('************************');
console.info("\n6)- \n");
console.log('Check positive or negative :')
let num = prompt("Enter a valid number");
if (num === null) console.log("You clicked on cancel.");
else if (num.trim() === '') console.log("You entered blank.");
else {
    num = Number(num.trim());
    if (isNaN(num)) console.log("Invalid entry.");
    else if (num < 0) console.log(`You entered negative number : ${num}`);
    else if (num === 0) console.log(`You entered zero: ${num}`);
    else console.log(`You entered positive number : ${num}`);
}
console.info('************************');
console.info("\n7)- \n");
console.log('Check vote eligibility:');
let age = num;   // for the sake of this assignment age is taken from prev prompt entry
if (age < 0) console.log("Negative number is not allowed");
else if (age > 120) console.log("Age seems unrealistic");
else {
    age >= 18 ? console.log('Eligible to vote') : console.log('Not eligible to vote');
}
console.info('************************');
console.info("\n8)- \n");
console.log('Multiplication table of 5:');
for (let i = 1; i < 11; i++) {
    console.log(`5 x ${i} = ${i * 5}`);
}
console.info('************************');
console.info("\n9)- \n");
let count = 0
for (let i = 1; i < 16; i++) {
    if (i > 8) count++;
}
console.log(`Between 8 - 15, numbers greater than 8 are ${count}`);

console.info('************************');
console.info("\n10)- \n");
console.log('Check access status-')
const saved_pwd = "javascript";
const pwd = prompt("Enter your password");
if (pwd === null) {
    console.log("You clicked on cancel.");
} else if (pwd === '') {
    console.log("You entered blank password.");
} else {
    if (pwd === saved_pwd) {
        console.log("Success - Login successful!");
    } else {
        console.log("Failed - Incorrect password.");
    }
}
console.info('************************');
console.info("\nLevel - 2\n");
console.info('************************');
console.info("\n11)- \n");
console.log('3 attempts to enter correct password-');
const password = 'fullstack';
let attempts = 0;
const maxAttempts = 3;

while (attempts < maxAttempts) {
    const curr_pwd = prompt(`Enter your password\n Remaining attempts left - ${maxAttempts - attempts}\n`);
    if (curr_pwd === null) {
        console.log("Login cancelled.");
        break;
    }
    if (curr_pwd.trim() === "") {
        console.log("Blank password entered. Try again.");
        continue;
    }
    if (curr_pwd === password) {
        console.log("Login successful!");
        break;
    } else {
        attempts++;
        console.log(`Incorrect password. Attempts left: ${maxAttempts - attempts}`);
        if (attempts === maxAttempts) {
            console.log("Account locked for 24 hours.");
        }
    }
}

console.info('************************');
console.info("\n12)- \n");
console.log('Ask words, exit on “stop”. Count “yes"-');
const keyword = "stop";
let counter = 0;
do {
    let word = prompt("Enter right keyword : \nHint-stop to exit.");
    if (word === null) {
        console.log("Process cancelled by user.");
        break;
    }
    word = word.trim().toLowerCase();
    if (word === "") {
        console.log("Please enter something!");
        continue;
    }
    if (word === 'yes')
        counter++;
    if (word === keyword.toLowerCase())
        break;
} while (true);

console.log(`Yes was entered ${counter} times.`);

console.info('************************');
console.info("\n13)- \n");

for (let i = 1; i < 51; i++) {
    if (i % 7 === 0) {
        console.log(`Number divisible by 7 in 1-50 : ${i}`);
    }
}
console.info('************************');
console.info("\n14)- \n");
let sumOdds = 0;
for (let i = 1; i < 31; i++) {
    if (i % 2 !== 0) {
        sumOdds += i;
    }
}
console.log(`Sum of all odd numbers from 1-30 : ${sumOdds}`);

console.info('************************');
console.info("\n15)- \n");
let even = false;
while (!even) {
    let inp = prompt("Enter a number");
    if (inp === null) {
        console.log('Process is cancelled.');
        break
    }
    if (inp.trim() === '') {
        console.log('Blank entry.');
        continue;
    } else {
        inp = Number(inp.trim());
        if (isNaN(inp)) {
            console.log('Invalid number.');
        } else if (inp % 2 === 0) {
            even = true;
            console.log(`Even number ${inp} is entered.`)
        } else {
            console.log('Try again.');
        }
    }
}

console.info('************************');
console.info("\n16)- \n");
let check = 0;
let arr = [];
while (check < 2) {
    let inpNum = prompt(`Enter ${check === 0 ? 'first' : 'second'} number:`);
    if (inpNum === null) {
        console.log("Cancel clicked.");
    } else if (inpNum.trim() === "") {
        console.log("Blank entry.");
    } else {
        inpNum = Number(inpNum.trim());
        if (isNaN(inpNum)) {
            console.log(`${check === 0 ? 'First' : 'Second'} number is invalid`);
        } else {
            console.log(`${check === 0 ? 'First' : 'Second'} number is ${inpNum}`);
            arr.push(inpNum);
            check += 1;
        }
    }
}

if (check === 2) {
    let start = Math.min(...arr);
    let end = Math.max(...arr);

    console.log(`Numbers between ${start} and ${end} are:`);
    if ((end - start) <= 1) {
        console.log("No numbers between them.");
    } else {
        for (let i = start + 1; i < end; i++) {
            console.log(`${i}`);
        }
    }
} else {
    console.log(`Unable to proceed with any invalid entry.`);
}

console.info('************************');
console.info("\n17)- \n");
console.log('First 3 odd numbers from 1 to 20:')
let oddCount = 3;
for (let i = 1; i < 20; i++) {
    if (i % 2 !== 0) {
        console.log(`Odd : ${i}`);
        oddCount--;
    }
    if (oddCount === 0) {
        break;
    }
}

console.info('************************');
console.info("\n18)- \n");
let positive = 0;
let fiveTimes = 1;
while (fiveTimes < 6) {
    let input = prompt(`Enter number ${fiveTimes} out of ${6 - fiveTimes} remaining number inputs.`);
    fiveTimes += 1;
    if (input === null) {
        console.log('Process cancelled.');
    } else if (input.trim() === '') {
        console.log('Blank entry.');
    } else {
        input = Number(input.trim());
        if (isNaN(input)) {
            console.log('Invalid number.');
        } else {
            console.log(`You entered ${input}`);

            if (input > 0) {
                positive += 1;
            }
        }
    }
}
console.log(`You entered ${positive} positive numbers.`)

console.info('************************');
console.info("\n19)- \n");
console.log('ATM Simulator :');
let balance = 1000;
let withdrawalTimes = 3;
while (withdrawalTimes > 0) {
    let amt = prompt(`Enter withdrawal amount : \nWithdrawal Attempts Remaining - ${withdrawalTimes}\n`);
    withdrawalTimes--;
    if (amt === null) {
        console.log('Withdrawal cancelled.');
    } else if (amt.trim() === '') {
        console.log('Amount not entered.');
    } else {
        amt = Number(amt.trim());
        if (isNaN(amt)) {
            console.log('Invalid amount entered.');
        } else if (amt <= 0) {
            console.log('Amount must be positive.');
        } else {
            if (balance >= amt) {
                console.log(`You are withdrawing ${amt} now`);
                balance -= amt;
                console.log(`Remaining balance : ${balance}`);
            } else {
                console.log("Insufficient balance.");
            }
        }
    }
}