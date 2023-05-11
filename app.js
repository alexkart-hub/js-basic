// Итерации в массивах

// forEach

const score = [5, 10, 0, 15];
for (const [i, el] of score.entries()) {
    console.log(`Раунд ${i + 1}: ${el}`);
}

score.forEach((el) => {
    console.log(`Раунд: ${el}`);
})

console.log('---');

const iterator = (scoreEl, i) => console.log(`Раунд ${i + 1}: ${scoreEl}`);
score.forEach(iterator);

// Внутри forEach не работает break

// Map
console.log('---- Map ----');

// map возвращает новый массив

const transactionsInUSD = [10, -7, 50, -10, 100];
const transactionsInRUB = [];
for (const transaction of transactionsInUSD) {
    transactionsInRUB.push(transaction * 60);
}
console.log(transactionsInUSD);
console.log(transactionsInRUB);

console.log('----');

const transactionsInRUB2 = transactionsInUSD
    .map(transaction => transaction * 60);
console.log(transactionsInRUB2);

// Filter
console.log('---- Filter ----');

const operations = [100, -20, 7, -30, 50];

const positiveOperations = [];
for (const operation of operations) {
    if (operation > 0) {
        positiveOperations.push(operation);
    }
}

console.log(operations);
console.log(positiveOperations);

console.log('----');
const positiveOperations1 = operations.filter(operation => operation > 0);
console.log(positiveOperations1);

console.log('----');
const positiveRubOperations = operations
    .filter(operation => operation > 0)
    .map(operation => operation * 60);
console.log(positiveRubOperations);

console.log('------- Упражнение -------');

const prices = [[100, 200], [120, 100], [200, 350]];
const result = prices
    .map(prices => prices[1] - prices[0])
    .filter(delta => delta > 0);
console.log(result);

// Reduce
console.log('---- Reduce ----');

let balance = 0;
for (const operation of operations) {
    balance += operation;
}
console.log(balance);

console.log('----');
const finalBalance = operations.reduce((acc, operation, i) => {
    console.log(`${i}: acc = ${acc}, operation = ${operation}`);
    return acc += operation;
}, 0);
console.log(`Итог: ${finalBalance}`);

console.log('----');
const minElement = operations.reduce((acc, operation) => {
    return acc < operation ? acc : operation;
}, 0);
console.log(operations);
console.log(`Min: ${minElement}`);

console.log('------- Упражнение -------')
const arr = [1, 4, 4, 10];

const avg = arr.reduce((avg, elem, i) => {
    const isLast = (i === arr.length - 1);
    return !isLast ? avg + elem : (avg + elem) / arr.length;
}, 0);
console.log(`Avg = ${avg}`);

// find и findIndex
console.log('---- find и findIndex');
arr.push(20);
console.log(arr);
// find возвращает ПЕРВЫЙ элемент массива, удовлетворяющий условию из колбэк-функции
let elGT5 = arr.find(el => el > 5);
console.log(elGT5);
// findIndex возвращает индекс ПЕРВОГО элемента массива, удовлетворяющего условию из колбэк-функции
let elGT5Index = arr.findIndex(el => el > 5);
console.log(elGT5Index);

// Упражнение - функция some
console.log('---- Упражнение - функция some');

function some(arr, elem) {
    return elem === arr.find(el => el === elem);
}

for (const el of [10, 20, 5, 0]) {
    console.log('' + el + ': ' + (some(arr, el) ? 'Да' : 'Нет'));
}

// или можно (нужно) так

for (const el of [10, 20, 5, 0]) {
    console.log('' + el + ': ' + (arr.some(elem => elem === el) ? 'Да' : 'Нет'));
}
for (const el of [10, 20, 5, 0]) {
    console.log('' + el + ': ' + (arr.includes(el) ? 'Да' : 'Нет'));
}

// flat и flatMap
console.log('---- flat и flatMap');
// flat - делает массив плоским. Параметр - уровень вложенности
const arNum = [[100, 200], [120, 80], [150, [300, 240]]];
console.log(arNum);
const res = arNum.flat(2);
console.log(res);

// flatMap - это аналог последовательно выполненных map() и flat()

// sort()
console.log('---- sort()');

const users = ['Вася', 'Маша', 'Катя', 'Аня'];
console.log(users);
users.sort();
console.log(users);

const sum = [100, -300, -100, 50, 480];
console.log(sum);
sum.sort();
console.log(sum);
sum.sort((a, b) => a - b);
console.log(sum);

const arr3 = Array.from({length: 5}, (cur, i) => i + 1);
console.log(arr3);


