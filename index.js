const inquirer = require('inquirer');
const colors = require('colors');

const { task107, task243a, task243b } = require('./tasks/Nimchuk_Roman_tasks');

const choices = [
  { name: 'Nimchuk Roman - task 107', value: task107 },
  { name: 'Nimchuk Roman - task 243a', value: task243a },
  { name: 'Nimchuk Roman - task 243b', value: task243b },
  { name: 'Exit', value: 'exit' }
];

const questions = [
  {
    type: 'list',
    name: 'task',
    message: 'Choose task from list please>',
    choices
  }
];

function ask() {
  inquirer.prompt(questions).then(answers => {
    if (answers.task !== 'exit') {
      answers.task(inquirer).then(res => {
        if (res === 'back') {
          ask();
        }
      });
    }
  });
}

ask();
