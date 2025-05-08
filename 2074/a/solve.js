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
        // ignore first line
        var _a = lines[i].split(" "), l = _a[0], r = _a[1], d = _a[2], u = _a[3];
        if (l === r && r === d && d === u) {
            console.log("YES");
        }
        else {
            console.log("NO");
        }
    }
};
