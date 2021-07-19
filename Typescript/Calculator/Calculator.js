var Operator;
(function (Operator) {
    Operator["Add"] = "+";
    Operator["Subtract"] = "-";
    Operator["Multiply"] = "*";
    Operator["Divide"] = "/";
})(Operator || (Operator = {}));
function calculateResult() {
    var firstOperand, secondOperand, operator, result;
    operator = elementValue("operator");
    firstOperand = +elementValue("firstOperand");
    secondOperand = +elementValue("secondOperand");
    switch (operator) {
        case Operator.Add:
            result = firstOperand + secondOperand;
            break;
        case Operator.Subtract:
            result = firstOperand - secondOperand;
            break;
        case Operator.Multiply:
            result = firstOperand * secondOperand;
            break;
        case Operator.Divide:
            result = firstOperand / secondOperand;
            break;
        default:
            alert("Wrong choice of operand !!");
            return;
    }
    console.log(result);
    document.getElementById("answer").innerHTML = result.toString();
}
function elementValue(elementId) {
    return document.getElementById(elementId).value;
}
