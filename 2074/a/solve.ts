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
  const lines = input.split("\n");
  for (let i = 1; i < lines.length; i++) {
    // ignore first line
    const [l, r, d, u] = lines[i].split(" ");
    if (l === r && r === d && d === u) {
      console.log("YES");
    } else {
      console.log("NO");
    }
  }
};
