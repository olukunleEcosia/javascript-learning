const sayHello = name => console.log('Hi ' + name);
const sayHello2 = (salute, name) => console.log(salute + ' ' + name);
const sayHello3 = () => console.log('Hi Kunle');
const sayHello4 = name => 'Hey ' + name;
const sayHello5 = (name = 'Kunle') => console.log('Hallo ' + name);
const sayHello6 = (...name) => {
    for(aName of name){
      console.log('Hallo ' + aName);
    }
};



sayHello('Kunle');
sayHello2('Hello', 'Kunle');
sayHello3();
console.log(sayHello4('Kunle'));
sayHello5();
sayHello6('Kunle', 'Janet', 'Christian');


function checkInput(cb, ...strings) {
  let hasEmptyText = false;
  for (const text of strings) {
    if (!text) {
      hasEmptyText = true;
      break;
    }
  }
  if (!hasEmptyText) {
    cb();
  }
}

checkInput(
  () => {
    console.log('All not empty!');
  },
  'Hello',
  '12',
  'adsfa',
  'Not empty'
);
