// Управление this
'use strict';

const manager = {
    addTask(id, title, description) {
        console.log(`Добавили задание ${title} сотруднику ${this.name}`);
        this.tasks.push({id, title, description});
    }
};
const staff_1 = {
    name: 'staff 1',
    tasks: []
};
const staff_2 = {
    name: 'staff 2',
    tasks: []
};

const addTask = manager.addTask;

addTask.call(staff_1, 1, 'title 1', 'desc 1');
addTask.call(staff_1, 2, 'title 2', 'desc 2');
addTask.call(staff_2, 3, 'title 3', 'desc 3');
addTask.apply(staff_1, [4, 'title 4', 'desc 4']);
addTask.apply(staff_2, [5, 'title 5', 'desc 5']);
addTask.apply(staff_2, [6, 'title 6', 'desc 6']);

console.log(staff_1);
console.log(staff_2);

const staff_3 = {
    name: 'staff 3',
    tasks: []
}

const addTaskStaff3 = manager.addTask.bind(staff_3);
addTaskStaff3(7, 'title 7', 'desc 7');
const addTaskStaff3_8 = manager.addTask.bind(staff_3, 8);
addTaskStaff3_8('title 8', 'desc 8');
const addTaskStaff3_9 = manager.addTask.bind(staff_3, 9, 'title 9');
addTaskStaff3_9('desc 9');
console.log(staff_3);

// Упражнение
/*
    Создайте объект пользователя с паролем.
    С помощью функции ниже удалить пароль, сделав
    функцию сброса пароля.
*/
function removePassword(reset) {
    if (reset) {
        this.password = undefined;
    } else {
        this.password = '1';
    }
}

const user = {
    name: 'Вася',
    password: 'some_password'
};

const resetPasswordUser = removePassword.bind(user, true);
resetPasswordUser();
console.log(user.password);

// IIFE (Immediately Invoked Function Expression) -
/*
    IIFE - вызов функции непосредственно после определения,
    или немедленно вызываемая функция
 */

function init() {
    console.log('Start');
}
init();
init();

(function (a) {
    console.log('Start IIFE ' + a);
})(5);

// Замыкания
console.log('========= Замыкания');
/*
    Замыкание - это:
        1. Комбинация функции и лексического окружения, в котором
        эта функция была определена.
        2. Простыми словами: функция помнит, в каком контексте она
        была создана, и может его использовать.
 */

function changeBalance() {
    let balance = 0;
    return function (sum) {
        balance += sum;
        console.log(balance);
    }
}

const change = changeBalance();
change(100);
change(-50);
change(200);


// Упражнение - Замыкания
/*
    Сделать функцию пользователя, которая берет за основу userInfo и за счет
    замыкания создает новый объект, с которым можно работать
    как user1().increase(100)
 */
const userObj = {
    balance: 0,
    operations: 0,
    increase(sum) {
        this.balance += sum;
        this.operations++;
    }
};

function superUser() {
    const user = {...userObj};
    return function () {
        return user;
    };
}

const user1 = superUser()();
const user2 = superUser();
user1.increase(100);
user1.increase(100);
user1.increase(100);
console.log(user1);
user2().increase(100);
user2().increase(10);
console.log(user2());

() => console.log('Yes')();
(function () {console.log(this)}).apply(455);

function a(){
    let c = 1;
    return function () {
        return c++;
    }
}
const d = a();
d();
console.log(d());