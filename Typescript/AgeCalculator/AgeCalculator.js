"use strict";
exports.__esModule = true;
var prompt = require('prompt-sync')();
while (1) {
    var dobInput = prompt("Enter your DOB:(YYYY-MM-DD): ");
    if (!isValidDate(dobInput)) {
        console.log("Wrong Input!! Try once more in format (YYYY-MM-DD): ");
    }
    else {
        var dob = new Date(dobInput);
        var age = calculateAge(dob);
        console.log(isNaN(age) ? "Invalid input format" : age);
        var moreInput = prompt("Find someone else's age? (type y for yes): ");
        if (!(moreInput.charAt(0) == "Y" || moreInput.charAt(0) == "y")) {
            console.log("---------END--------");
            break;
        }
    }
}
function calculateAge(dob) {
    var differenceInTime = Date.now() - dob.getTime();
    if (differenceInTime <= 1) {
        console.log("Date of birth cant be greater than today's date!");
        return NaN;
    }
    var differenceInYear = new Date(differenceInTime);
    return Math.abs(differenceInYear.getUTCFullYear() - 1970);
}
function isValidDate(dobInput) {
    if (dobInput.length < 10)
        return false;
    if (parseInt(dobInput.substring(5, 7)) > 12 || parseInt(dobInput.substring(8, 10)) > 31)
        return false;
    return true;
}
