#! /usr/bin/env node
import inquirer from "inquirer";

import chalk from "chalk";

console.log(chalk.blue.underline(`\n\t"Welcome To Cli ATM!"\n`));

let myBalance = 50000 ; //Dollars

let pinCode = 9876 ;

const pinAnswer = await inquirer.prompt ([
    {
    name : "mypin",
    message : chalk.yellow.bold("Enter your pin code"),
    type : "number"
    }
])
if (pinAnswer.mypin === pinCode)
 {
    console.log(chalk.blueBright.bold("correct pin code!!"));
 
let operationAns = await inquirer.prompt ([
    {
        name : "operations" ,
        message :chalk.yellow.bold("what you want to do??"),
        type : "list",
        choices : ["withdraw Cash", "checking Balance", "Fast Cash"]
    }
]);

if(operationAns.operations == "withdraw Cash"){
    
let amountAns = await inquirer.prompt([
    {
        name : "amount",
        message : chalk.yellow.bold("Enter amount for withdraw cash"),
        type : "number"
    }
]);
// =, -=, +=

    if (amountAns.amount <= myBalance) {
        myBalance -= amountAns.amount;
        console.log(chalk.green.underline(`Your remaining balance is $${myBalance}`));
        
    }
    else {
        console.log(chalk.red.underline("Your balance is insufficient"));
        
    }
}

else if (operationAns.operations == "checking Balance") {
    console.log(chalk.white.bgBlue.bold(`Your current balance is $${myBalance} `));

}
else if (operationAns.operations == "Fast Cash"){

  let fastCash = await inquirer.prompt([
  {
   name : "fastCashAmount",
   message : chalk.red.bold("select amount"),
   type : "list",
   choices : [5000, 8000, 10000,15000,20000,25000]
  }
  ]);
    myBalance-=fastCash.fastCashAmount;
    console.log(chalk.magenta.bold(`"transaction successfully done"`));
    console.log(chalk.yellowBright.underline(`Your Remaining Balance Is: $${myBalance}`));
    
  
}
}
else {
    console.log(chalk.red.bold("Error!! Your pin code is incorrect"));
    
}