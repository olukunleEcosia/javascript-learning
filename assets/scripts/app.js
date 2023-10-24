const defaultResult = 0;
let currentResult = defaultResult;

currentResult = (currentResult + 10) * 3 / 2 - 1;
let description = '(' + defaultResult + ' + 10) * 3 / 2 -1 is:';
outputResult(currentResult, description);

function add(num1, num2){
    const result = num1 + num2;
    return result;
}