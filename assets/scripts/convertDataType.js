const defaultResult = 0;
let currentResult = defaultResult;
function getUserInput() {
  return parseInt(userInput.value);
}
function add() {
  const enteredNumber = getUserInput();
  const calDesc = `${currentResult} + ${enteredNumber}`; //enteredNumber will be treated here as a string because the currentResult variable stores a string
  currentResult = currentResult + enteredNumber;
  outputResult(currentResult, calDesc);
}
function substract() {
  const enteredNumber = getUserInput();
  const calDesc = `${currentResult} - ${enteredNumber}`; //enteredNumber will be treated here as a string because the currentResult variable stores a string
  currentResult = currentResult - enteredNumber;
  outputResult(currentResult, calDesc);
}

addBtn.addEventListener("click", add);
subtractBtn.addEventListener("click", substract);
