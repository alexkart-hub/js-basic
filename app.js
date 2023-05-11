// Циклы

// Цикл for
for (let i = 1; i < 5; i++) {
    console.log(`Наш балланс ${i}$`);
}

const tasks = [];
for (let i = 0; i < 10; i++) {
    tasks[i] = `Задача ${i+1}`;
}

for (let i = 0; i < tasks.length; i++) {
    if (tasks[i] === 'Задача 3') {
        continue;
    }
    if (tasks[i] === 'Задача 8') {
        break;
    }
    console.log(tasks[i]);
}

const arrText = ['!', 'JS', 'люблю', 'Я'];
let resStr = '';
for (let i = 3; i >= 0; i--) {
    resStr += arrText[i] + (i > 1 ? ' ' : '');
}
console.log(resStr);

const arrResText = [];
for (let i = 3; i >= 0; i--) {
    arrResText.push(arrText[i]);
}
resStr = arrResText.join(' ');
console.log(resStr);

// Цикл while
let i = 1;
while (i < 5) {
    console.log(`Вывод - ${i}`);
    i++;
}

const arr = [1, 4, 8, 7];
for (let i = 0; i < arr.length; i++) {
    if (arr[i] > 5) {
        break;
    }
    console.log(arr[i]);
}

let ii = 0;
while (arr[ii] <= 5 && ii < arr.length) {
    console.log(arr[ii++]);
}

// Цикл do while

let j = 0;
do {
    console.log(j++);
} while (j < 0)

// Циклы for of и for in
console.log('--- Циклы for of и for in ---')
for (let element of arr) {
    console.log(element);
}

console.log('-------');

for (let index in arr) {
    console.log(index);
}

console.log('------- Упражнение -------');

const operations = [1000, -700, 300, -500, 10000];
const start = 100;

function getBallans()
{
    let ballans = start;
    for (let operation of operations) {
        ballans += operation;
    }
    return ballans;
}

function checkOperationsMy() {
    let ballans = start;
    for (let operation of operations) {
        ballans += operation;
        if (ballans < 0) {
            return false;
        }
    }
    return true;
}

function getAverage()
{
    let profit = 0;
    let countProfit = 0;
    let costs = 0;
    let countCosts = 0;
    for (const operation of operations) {
        if (operation > 0) {
            profit += operation;
            countProfit++;
        } else {
            costs += operation;
            countCosts++;
        }
    }
    averageProfit = profit / (countProfit > 0 ? countProfit : 1);
    averageCosts = costs / (countCosts > 0 ? countCosts : 1);
    return [averageProfit, -averageCosts];
}

console.log(getBallans());
console.log(checkOperationsMy());
const [profit, costs] = getAverage();
console.log(profit, costs);

console.log('-------');
function getBalance(arrayOfOperations, initialBalance = 0) {
    let balance = initialBalance;
    for (const element of arrayOfOperations) {
        balance += element;
    }
    return balance;
}

function checkOperations(arrayOfOperations, initialBalance = 0)
{
    let balance = initialBalance;
    let isOk = true;
    for (const element of arrayOfOperations) {
        balance += element;
        if (balance < 0) {
            isOk = false;
            break;
        }
    }
    return isOk;
}

function averageOperations(arrayOfOperations) {
    let positiveCount = 0;
    let negativeCount = 0;
    let positiveSum = 0;
    let negativeSum = 0;
    for (const element of arrayOfOperations) {
        if (element > 0) {
            positiveCount++;
            positiveSum += element;
        }
        if (element < 0) {
            negativeCount++;
            negativeSum += element;
        }
    }
    return [
        positiveSum / positiveCount,
        negativeSum / negativeCount
    ];
}

console.log(getBalance(operations, start));
console.log(checkOperations(operations, start));
console.log(averageOperations(operations));