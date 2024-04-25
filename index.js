#! /usr/bin/env node
import inquirer from 'inquirer';
import chalk from 'chalk';
console.log(chalk.blue.bold("\n\tWelcome to the \'Muhammad Harmain\' - CLI Currency Converter!\n"));
let currencyRates = {
    "U.S. dollar (USD)": 1, //Base currency
    "European Union (EUR)": 0.93, //European Euro
    "Japanese Yen (JPY)": 155.56, //Japanese Yen
    "British Pound (GBP)": 0.80, //British Pound
    "Australian Dollar (AUD)": 1.54, //Australian Dollar
    "Canadian Dollar (CAD)": 1.37, //Canadian Dollar
    "Chinese Yuan (CNY)": 7.25, //Chinese Yuan
    "New Zealand Dollar (NZD)": 1.68, //New Zealand Dollar
    "Indian Rupee (INR)": 83.27, //Indian Rupee
    "Pakistani Rupee (PKR)": 278.52, //Pakistani Rupee
};
let loop = true;
while (loop) {
    let answer = await inquirer.prompt([
        {
            name: 'fromcurrency',
            message: chalk.yellow('Enter the currency you want to convert from:'),
            type: 'list',
            choices: Object.keys(currencyRates)
        },
        {
            name: 'tocurrency',
            message: chalk.yellow('Enter the currency you want to convert into:'),
            type: 'list',
            choices: Object.keys(currencyRates)
        },
        {
            name: 'amount',
            message: chalk.yellow('Enter the amount you want to convert:'),
            type: 'number'
        }
    ]);
    if (answer.fromcurrency === answer.tocurrency) {
        console.log(chalk.red("Please select different currencies to convert!\n"));
    }
    else {
        let fromCurrencyRate = currencyRates[answer.fromcurrency];
        let toCurrencyRate = currencyRates[answer.tocurrency];
        let amount = answer.amount;
        let convertedAmount = (amount / fromCurrencyRate) * toCurrencyRate;
        console.log(chalk.green(`\nCurrency Converted Successfully!\n`));
        console.log(chalk.green(`${amount} ${answer.fromcurrency} is equal to ${convertedAmount.toFixed(2)} ${answer.tocurrency}\n`));
        let answer2 = await inquirer.prompt([
            {
                name: 'continue',
                message: chalk.yellow('Do you want to convert more currencies?'),
                type: 'list',
                choices: ['Yes', 'No']
            }
        ]);
        if (answer2.continue === 'No') {
            loop = false;
            console.log(chalk.blue.bold("\nThank you for using the currency converter!\n"));
        }
        else {
            console.log("\n");
        }
    }
}
