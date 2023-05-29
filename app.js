'use strict';

const user = {
    name: 'Вася'
};
const user1 = user;
user1.name = 'Петя';

const user2 = Object.assign({}, user);
user2.name = 'Саша';

const user3 = {
    ...user
};
user3.name = 'Миша';

console.log(user);
console.log(user1);
console.log(user2);
console.log(user3);
