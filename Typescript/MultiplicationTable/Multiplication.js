"use strict";
exports.__esModule = true;
var process_1 = require("process");
var prompt = require('prompt-sync')();
var row = +prompt("Enter row:  ");
var column = +prompt("Enter column: ");
if (!isValidRowColumn(row, column)) {
    console.log("InValid Input!");
    process_1.exit(1);
}
printTable(row, column);
function printTable(row, column) {
    for (var i = 1; i <= row; i++) {
        for (var j = 1; j < column; j++) {
            var val = i * j;
            process.stdout.write("   " + val);
        }
        console.log();
    }
}
function isValidRowColumn(row, column) {
    if (isNaN(row) || isNaN(column))
        return false;
    if (row < 0 || column < 0)
        return false;
    if (row == 0 || column == 0) {
        console.log("You entered 0. No output for 0 row or column");
        process_1.exit(1);
    }
    return true;
}
