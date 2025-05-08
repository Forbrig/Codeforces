// npx ts-node solve.ts < input.txt (to run)
// npx tsc solve.ts (to compile)
// node solve.js < input.txt (to run compiled code)
var readline = require("readline");
var rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
    terminal: false,
});
var input = "";
rl.on("line", function (line) {
    input += line + "\n";
});
rl.once("close", function () {
    // end of input
    solve(input.trim());
});
var solve = function (input) {
    var lines = input.split("\n");
    for (var i = 1; i < lines.length; i = i + 2) {
        var n = lines[i].split(" ").map(Number);
        var a = lines[i + 1].split(" ").map(Number);
        if (a.length === 1) {
            console.log(a[0]);
            continue;
        }
        else {
            var sum = a.reduce(function (acc, num) { return acc + num; }, 0);
            console.log(sum - n[0] + 1);
            // while (a.length !== 1) {
            //   const ai = a.shift() ?? 0;
            //   const aj = a.shift() ?? 0;
            //   const x = ai + aj - 1;
            //   a.push(x);
            // }
            // console.log(a[0]);
        }
    }
};
