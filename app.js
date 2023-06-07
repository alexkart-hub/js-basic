// Добавление html на лету
'use strict';

const panel = document.createElement('div');
panel.classList.add('panel');
panel.innerText = document.querySelector('.panel').innerText;

const button = document.createElement('button');
button.setAttribute('user-id', 1);
button.classList.add('button');
button.innerText = 'Новая кнопка';
console.log(button);

document.querySelector('.test').appendChild(panel);
document.querySelector('.test').appendChild(button);
