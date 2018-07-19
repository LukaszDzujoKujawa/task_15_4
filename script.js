// TASK 1

const string1 = 'Hello';
const string2 = 'World';
const addedStrings = (`${string1} ${string2}`);

console.log(addedStrings);

//TASK  2

const multiply = (number1 = 1, number2 = 1) => number1 + number2;
console.log(multiply(2));
console.log(multiply(6,5));

//TASK 3
	
console.log('reduce');

const averageReduce = (...args) => args.reduce((sum, arg) => sum + arg, 0)/args.length;

console.log(averageReduce(1,2,3)); 

//TASK 4 

const grades = [1, 5, 5, 5, 4, 3, 3, 2, 1];

average(...grades);

// TASK 5

const array1 = [1, 4, 'Iwona', false, 'Nowak'];

const [, , firstName, ,lastName] = array1;

console.log(`The first name is: ${firstName}`);
console.log(`The last name is: ${lastName}`);