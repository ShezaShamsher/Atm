#! /usr/bin/env node
import inquirer from "inquirer";
console.log(`\t"Welcome To Cli ATM!"\n`);
let myBalance = 50000; //Dollars
// console.log(`Your current balance is $${myBalance}`);
let pinCode = 9876;
console.log(`Your pin code is ${pinCode}`);
const pinAnswer = await inquirer.prompt([
    {
        name: "mypin",
        message: "Enter your pin code",
        type: "number"
    }
]);
if (pinAnswer.mypin === pinCode) {
    console.log("correct pin code!!");
    let operationAns = await inquirer.prompt([
        {
            name: "operations",
            message: "what you want to do??",
            type: "list",
            choices: ["withdraw Cash", "checking Balance", "Fast Cash"]
        }
    ]);
    if (operationAns.operations == "withdraw Cash") {
        let amountAns = await inquirer.prompt([
            {
                name: "amount",
                message: "Enter amount for withdraw cash",
                type: "number"
            }
        ]);
        // =, -=, +=
        if (amountAns.amount <= myBalance) {
            myBalance -= amountAns.amount;
            console.log(`Your remaining balance is $${myBalance}`);
        }
        else {
            console.log("Your balance is insufficient");
        }
    }
    else if (operationAns.operations == "checking Balance") {
        console.log(`Your current balance is $${myBalance} `);
    }
    else if (operationAns.operations == "Fast Cash") {
        let fastCash = await inquirer.prompt([
            {
                name: "fastCashAmount",
                message: "select amount",
                type: "list",
                choices: [5000, 8000, 10000, 15000, 20000, 25000]
            }
        ]);
        myBalance -= fastCash.fastCashAmount;
        console.log("transaction successfully done");
        console.log(`Your Remaining Balance Is: $${myBalance}`);
    }
}
else {
    console.log("Incorrect pin code");
}
