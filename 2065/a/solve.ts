// npx ts-node solve.ts < input.txt (to run)
// npx tsc solve.ts (to compile)
// node solve.js < input.txt (to run compiled code)

const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
  terminal: false,
});

let input = "";

rl.on("line", (line: string) => {
  input += line + "\n";
});

rl.once("close", () => {
  // end of input
  solve(input.trim());
});

const solve = (input: string): void => {
  const words = input.split("\n");
  for (const word of words) {
    if (word.slice(word.length - 2) === "us") {
      console.log(word.slice(0, word.length - 2) + "i");
    }
  }
};
