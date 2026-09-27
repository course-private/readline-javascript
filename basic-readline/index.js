const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

// rl.question("What is your name? ", (name) => {
//   console.log(`Hello, ${name}!`);
//   rl.close();
// });

console.log("Welcome to the basic readline example!");
console.log("We will ask you for your name and age.");
console.log("--------------------------------");

function runReadline() {
  rl.question("What is your name? ", (name) => {
    rl.question("What is your age? ", (age) => {
      rl.question(
        "What is your favorite programming language? ",
        (language) => {
          showSummary(name, age, language);
        },
      );
    });
  });
}

function showSummary(name, age, language) {
  console.log(`Hello, ${name}!`);
  console.log(`Your age is ${age} years old!`);
  console.log(`Your favorite programming language is ${language}!`);
  rl.close();
  console.log("Thank you for using the basic readline example. Goodbye!");
}

// START APPLICATION
runReadline();
