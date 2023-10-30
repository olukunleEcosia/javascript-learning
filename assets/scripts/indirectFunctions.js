const defaultResult = 0;
let currentResult = defaultResult;

function add() {
  currentResult = currentResult + userInput.value; //an input value here is treated as a string, so the + concatenates it
  outputResult(currentResult, '');
}

addBtn.addEventListener('click', add);
