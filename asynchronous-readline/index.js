const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

function question(message) {
  return new Promise((resolve) => {
    rl.question(message, (answer) => {
      resolve(answer);
    });
  });
}

async function runReadline() {
  const name = await question("What is your name? ");
  const age = await question("What is your age? ");
  const language = await question(
    "What is your favorite programming language? ",
  );

  showSummary(name, age, language);
}

function showSummary(name, age, language) {
  console.log("\n=== SUMMARY ===");

  console.log(`Hello, ${name}!`);
  console.log(`Your age is ${age} years old!`);
  console.log(`Your favorite programming language is ${language}!`);

  rl.close();

  console.log("Thank you for using the basic readline example. Goodbye!");
}

// START APPLICATION
runReadline();
