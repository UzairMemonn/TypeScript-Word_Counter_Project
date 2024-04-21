#! /usr/bin/env node
//importing inquirer and chalk packages
import inquirer from "inquirer";
import chalk from "chalk";
// display a colourfull Welcome Message
console.log(chalk.bold.cyanBright("\n \t\t Coder Uzair - Word Counter"));
console.log("=".repeat(70));
// prompt the user to enter a sentence
let answer = await inquirer.prompt([
    {
        name: "sentence",
        type: "input",
        message: "Enter a sentence",
    }
]);
// triming the sentence and spiliting into words based on "spaces"
let words = answer.sentence.trim().split(" ");
//Analysis of user input sentence
console.log("=".repeat(70));
console.log(chalk.bold("- Sentence Words:"));
console.log(words);
console.log(chalk.bold(`\n - Words Count: ${chalk.bold.redBright(words.length)}`));
console.log("=".repeat(70));
