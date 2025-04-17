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
    for (var i = 1; i < lines.length; i++) {
        var _a = lines[i].split(" "), n = _a[0], m = _a[1], l = _a[2], r = _a[3];
        // console.log(n, m, l, r);
        if (Math.abs(Number(l)) > Number(m)) {
            console.log(-Number(m), 0);
        }
        else {
            console.log(Number(l), Number(m) - Math.abs(Number(l)));
        }
    }
};
