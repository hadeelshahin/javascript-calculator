const defaultValue = 0;
let currentResult = defaultValue;
let logEntreis = [];

function getUserInput() {
  return parseInt(userInput.value);
}
function createAndWriteOutput(operator, resultBeforeCalc, calcNumber) {
  const descriptionResult = `${resultBeforeCalc} ${operator} ${calcNumber}`;
  outputResult(currentResult, descriptionResult); //from the vendor file
}
function calculateResult(calculationType) {
  const enterdNumber = getUserInput();
  const initialResult = currentResult;
  if (calculationType === "add") {
    currentResult += enterdNumber;
    createAndWriteOutput("+", initialResult, currentResult);
    writeToLog("ADD", enterdNumber, currentResult);
  } else if (calculationType === "subtract") {
    currentResult -= enterdNumber;
    createAndWriteOutput("-", initialResult, currentResult);
    writeToLog("SUBTRACT", enterdNumber, currentResult);
  } else if (calculationType === "divide") {
    currentResult /= enterdNumber;
    createAndWriteOutput("/", initialResult, currentResult);
    writeToLog("DIVIDE", enterdNumber, currentResult);
  } else if (calculationType === "multiply") {
    currentResult *= enterdNumber;
    createAndWriteOutput("*", initialResult, currentResult);
    writeToLog("MULTIPLY", enterdNumber, currentResult);
  }
}
function writeToLog(operationIdentifer, operationNumber, newResult) {
  const logEntry = {
    operation: operationIdentifer,
    number: operationNumber,
    result: newResult,
  };
  logEntreis.push(logEntry.operation);
  console.log(logEntreis);
}

function add() {
  calculateResult("add");
}
function subtract() {
  calculateResult("subtract");
}
function multiply() {
  calculateResult("multiply");
}
function divide() {
  calculateResult("divide");
}
divideBtn.addEventListener("click", divide);
multiplyBtn.addEventListener("click", multiply);
subtractBtn.addEventListener("click", subtract);
addBtn.addEventListener("click", add);
