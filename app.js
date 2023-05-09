//Массивы
const roles = ['admin', 'user', 'superuser'];
console.log(roles.at(0));
console.log(roles.at(-1)); // последний элемент массива
const anyArray = new Array('Один', 'Два', 'Три');
console.log(anyArray);

//Управление элементами массива
const users = ['Аня', 'Вика', 'Катя'];
console.log(users);
users[2] = 'Кристина';
console.log(users);
users[3] = 'Никита';
console.log(users);
users[5] = 'Иван';
console.log(users);
console.log('Массив имеет ' + users.length + ' элементов');

// Поиск элементов массива

// indexOf
const elemIndex = users.indexOf('Вика');
console.log('Вика: ' + elemIndex);

// include
let inArray = users.includes('Катя');
console.log(inArray ? 'Катя есть' : 'Кати нет');
inArray = users.includes('Кристина');
console.log(inArray ? 'Кристина есть' : 'Кристины нет');

//Добавление элементов массива

//push Добавляет элемент в конец массива; Возвращает длину измененного массива
const len1 = users.push('Николай');
console.log(users);
console.log(len1);
//unshift Добавляет элемент в начало массива; Возвращает длину измененного массива
const len2 = users.unshift('Вася');
console.log(users);
console.log(len2);

//Удаление элементов массива

//pop Удаляет последний элемент массива; Возвращает удаленный элемент
const elem1 = users.pop();
console.log(elem1);
console.log(users);

//shift Удаляет первый элемент массива; Возвращает удаленный элемент
const elem2 = users.shift();
console.log(elem2);
console.log(users);

//slice, splice, concat, reverse
console.log('slice, splice, concat, reverse');
const arrExample = ['user', 'admin', 'manager', 'superuser'];
console.log(arrExample);


// slice(indexStart, indexEnd) - срез массива с элемента indexStart до indexEnd (не включает indexEnd)
// не модифицирует исходный массив
// Если indexEnd опущен, то до конца массива
const exampleRes1 = arrExample.slice(2);
console.log(exampleRes1); // ['manager', 'superuser']
const exampleRes2 = arrExample.slice(2, 3);
console.log(exampleRes2); // ['manager']
const exampleRes3 = arrExample.slice(-1); // с конца
console.log(exampleRes3); // ['superuser']
const exampleRes4 = arrExample.slice(1, -1);
console.log(exampleRes4); // с элемента с индексом 1 до 1-го элемента с конца (не включая)

// splice(indexStart, count) - вырезает из исходного массива срез; возвращает вырезанный срез;
// модифицирует исходный массив

// reverse() - разворачивает массив. Модифицирует исходный массив
arrExample.reverse();

// concat(arr) - конкатенирует массив arr к исходному массиву; не модифицирует исходный массив.
const arr = ['sysadmin', 'developer'];
const exampleRes5 = arrExample.concat(arr);
console.log(exampleRes5);

// Из строки в массив и обратно
console.log('Из строки в массив и обратно');

// split(separator) - разбивает строку по разделителю separator
const url = 'auth/user/login';
console.log('Строка: ' + url);
const exampleRes6 = url.split('/');
console.log(exampleRes6);

// join(separator) - собирает строку из элементов массива, разделяя их разделителем separator
const exampleRes7 = exampleRes6.join(':');
console.log(exampleRes7);

const tasks = ['Задача 1'];

function addTask(task = '')
{
    if (task.length > 0) {
        tasks.push(task);
        return true;
    }
    return false;
}

function deleteTask(task)
{
    const index = tasks.indexOf(task);
    if (index >= 0) {
        tasks.splice(index, 1);
        return true;
    }
    return false;
}

function prioritize(task)
{
    if (deleteTask(task)) {
        tasks.unshift(task);
        return true;
    }
    return false;
}

addTask('Задача 2');
addTask('Задача 3');
addTask('Задача 4');
addTask('Задача 5');
console.log(tasks);

deleteTask('Задача 3');
console.log(tasks);

prioritize('Задача 4');
console.log(tasks);

// Деструктуризация
function getData() {
    return ['Александр', 48, 'Азов'];
}

const name = getData()[0];
const age = getData()[1];
const city = getData()[2];

console.log(name, age, city);

// это можно записать короче (аналог list в php)

const [name1, age1, city1] = getData(); // можно использовать _ для пропуска
console.log(name1, age1, city1);

// Rest оператор

const data = [1, 2, 3, 4, 5, 6, 7, 8, 9];
const [one, two, ...others] = data; //используется только в конце
console.log(one, two, others);

function parse_url(url)
{
    const urlData = url.split('://');
    const protocol = urlData[0];
    const arUrl = urlData[1].split('/');
    const domain = arUrl.shift();
    return [
        protocol,
        domain,
        '/' + arUrl.join('/')
    ];
}

console.log(parse_url('https://purpleschool.ru/course/javascript'));

function getUrlParts(url)
{
    const [protocol, _ , host, ...arPath] = url.split('/');
    const path = '/' + arPath.join('/');
    return [protocol, host, path];
}

console.log(getUrlParts('https://purpleschool.ru/course/javascript'));