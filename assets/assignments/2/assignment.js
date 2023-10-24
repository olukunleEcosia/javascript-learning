const task3Element = document.getElementById('task-3');

function show(){
    alert('Hello');
}

function myName(name){
    alert(name);
}

show();
myName('Joe');

const task3 = document.getElementById('task-3');
task3.addEventListener('click', show);

function joinStrings(text1, text2, text3){
    return text1 + text2 + text3;
}

alert(joinStrings('One', 'Two', 'Three'));