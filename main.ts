import inquirer from "inquirer";

let todos = [];
let condition = true;

while (condition) {
  let todoquestion = await inquirer.prompt([
    {
      name: "firstquestion",
      type: "input",
      message: "What would you like to add in your todos?",
    },
    {
      name: "secondquestion",
      type: "confirm",
      message: "Would you like to add more in your todos?",
      default: "true",
    },
  ]);
  todos.push(todoquestion.firstquestion);
  console.log(todos);
  condition = todoquestion.secondquestion;
}
