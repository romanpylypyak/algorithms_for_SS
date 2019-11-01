const typewriter = require('node-typewriter');
const colors = require('colors');

module.exports = {
  task243a: function task243a(inq) {
    return new Promise(function(resolve) {
      inq
        .prompt({
          type: 'input',
          name: 'value',
          message:
            'Nimchuk Roman: Task 243a\n> Given a natural number n. Can it be represented as the sum of two squares of natural numbers? if possible then'
              .green +
            '\n> indicate a pair of x,y natural numbers where n = x^2 + y^2'
              .green +
            '\n? Please type a number greater than 1 in my console >>>'.yellow
        })
        .then(({ value }) => {
          if (value === 'back' || value === 'exit') {
            resolve(value);
          } else {
            const number = Number(value);
            if (!Number.isNaN(number) && number > 1) {
              // Conclusion from Fermat's theorem on sums of two squares
              if ((number - 3) % 4 === 0 || number < 0) {
                console.log(
                  `Sorry, but you can't represent  number ${number} as two squares of natural numbers, try again.`
                    .red
                );
                setTimeout(() => {
                  resolve(task243a(inq));
                }, 1000);
              } else {
                const arr = [];
                for (let x = 1; x <= number; x++) {
                  for (let y = 1; y <= number; y++) {
                    if (x ** 2 + y ** 2 === number) {
                      arr.push([`x: ${x}`, `y: ${y}`]);
                    }
                  }
                }
                if (arr.length === 0) {
                  console.log(
                    `> There are no numbers to represent your number in squares`
                      .yellow.underline.bold
                  );
                  setTimeout(() => {
                    resolve('back');
                  }, 2000);
                } else {
                  console.log(
                    `> Pairs of x,y natural numbers where n = x^2 + y^2 \n> ${arr}`
                      .yellow.underline.bold
                  );
                  setTimeout(() => {
                    resolve('back');
                  }, 2000);
                }
              }
            } else {
              console.log(
                'Please try again and type correct value'.red +
                  '\nP.S. You can type exit to finish the whole program'.green +
                  '\nOr you can type back to return on tasks menu\n\n'.green
              );
              setTimeout(() => {
                resolve(task243a(inq));
              }, 2000);
            }
          }
        });
    });
  },
  task243b: function task243b(inq) {
    return new Promise(function(resolve) {
      inq
        .prompt({
          type: 'input',
          name: 'value',
          message:
            'Nimchuk Roman: Task 243b\n> Given a natural number n. Can it be represented as the sum of two squares of natural numbers? if possible then'
              .green +
            '\n> indicate a pair of x,y natural numbers where n = x^2 + y^2 and x greater or equal to y'
              .green +
            '\n? Please type a number greater than 1 in my console >>>'.yellow
        })
        .then(({ value }) => {
          if (value === 'back' || value === 'exit') {
            resolve(value);
          } else {
            const number = Number(value);
            if (!Number.isNaN(number) && number > 1) {
              // Conclusion from Fermat's theorem on sums of two squares
              if ((number - 3) % 4 === 0) {
                console.log(
                  `Sorry, but you can't represent  number ${number} as two squares of natural numbers, try again.`
                    .red
                );
                setTimeout(() => {
                  resolve(task243b(inq));
                }, 2000);
              } else {
                const arr = [];
                for (let x = 1; x <= number; x++) {
                  for (let y = 1; y <= number; y++) {
                    if (x ** 2 + y ** 2 === number && x >= y) {
                      arr.push([`x: ${x}`, `y: ${y}`]);
                    }
                  }
                }
                if (arr.length === 0) {
                  console.log(
                    `> There are no numbers to represent your number in squares`
                      .yellow.underline.bold
                  );
                  setTimeout(() => {
                    resolve('back');
                  }, 2000);
                } else {
                  console.log(
                    `> Pairs of x,y natural numbers where n = x^2 + y^2 \n> ${arr}`
                      .yellow.underline.bold
                  );
                  setTimeout(() => {
                    resolve('back');
                  }, 2000);
                }
              }
            } else {
              console.log(
                'Please try again and type correct value'.red +
                  '\nP.S. You can type exit to finish the whole program'.green +
                  '\nOr you can type back to return on tasks menu\n\n'.green
              );

              setTimeout(() => {
                resolve(task243b(inq));
              }, 2000);
            }
          }
        });
    });
  },
  task107: function task107(inq) {
    return new Promise(function(resolve) {
      inq
        .prompt({
          type: 'input',
          name: 'value',
          message:
            'Nimchuk Roman: Task 107\n> Given an integer m,  which is greater than 1 (m>1)'
              .green +
            '\n> Get a biggest integer k, for which following expression 4^k < m,  will be true?'
              .green +
            '\n? Type a number greater than 1 in my console. Please dont try anything except numbers >>>'
              .yellow
        })
        .then(({ value }) => {
          if (value === 'back' || value === 'exit') {
            resolve(value);
          } else {
            let number = Number(value);
            if (!Number.isNaN(number) && number > 1) {
              let k = 0;
              do {
                number /= 4;
                k++;
              } while (number > 4);
              console.log(
                `> A biggest integer k, for which following expression 4^k < m,  will be true, is ${k}`
                  .underline.bold
              );
              setTimeout(() => {
                resolve('back');
              }, 2000);
            } else {
              typewriter(
                '......\nOkay... I get it... I mean nothing to you'.green +
                  '\nCan you please next time try with'.yellow,
                8000
              ).then(function() {
                typewriter('\nCORRECT NUMBER (•ˋ _ ˊ•)'.red.bold, 5000).then(
                  function() {
                    console.log(
                      '\nP.S. You can type exit to finish the whole program'
                        .green +
                        '\nOr you can type back to return on tasks menu\n\n'
                          .green
                    );
                    setTimeout(() => {
                      resolve(task107(inq));
                    }, 3000);
                  }
                );
              });
            }
          }
        });
    });
  }
};
