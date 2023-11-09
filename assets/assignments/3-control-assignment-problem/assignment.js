const randomNumber = Math.random(); // produces random number between 0 (including) and 1 (excluding)
const randomNumberB = Math.random();

if(randomNumber > 0.7){
    alert("Number is greater than 0.7");
}

if(randomNumber > 0.7 && randomNumberB > 0.7 || (randomNumber <= 0.2 || randomNumberB <= 0.2)){
    alert("Second Alert!");
}

const numbers = [2,3,4,5,6];
console.log("Array size: " + numbers.length);

for (aNumber of numbers){
    console.log("Number A: " + aNumber);
}

for (let i =  numbers.length - 1; i >= 0; i--){
    console.log("Number B: " + numbers[i]);
}

let j = 0;
while (j < numbers.length){
    console.log("Number C: " + numbers[j])
    j++;
}