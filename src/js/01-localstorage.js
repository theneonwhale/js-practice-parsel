const user = {
  name: 'Mango',
  age: 28,
};

// console.log(JSON.stringify(user));

const savedUaerData = '{"name":"Mango","age":28}';

// console.log(JSON.parse(savedUaerData));

// console.log(localStorage);

localStorage.setItem('my-data', JSON.stringify(user));
localStorage.setItem('my-data1', '676');

const savedData = localStorage.getItem('my-data');
const parseData = JSON.parse(savedData);
console.log(savedData);
console.log(parseData);

console.log(sessionStorage);
