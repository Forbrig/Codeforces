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
  for (let i = 1; i < lines.length; i = i + 2) {
    const n = lines[i].split(" ").map(Number);
    const a = lines[i + 1].split(" ").map(Number);

    if (a.length === 1) {
      console.log(a[0]);
      continue;
    } else {
      // the biggest x is always a + b - 1
      // the catch is for each new x we need to subtract -1 of the total sum thus -n
      const sum = a.reduce((acc, num) => acc + num, 0);
      console.log(sum - n[0] + 1);
    }
  }
};
