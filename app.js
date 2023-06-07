// Упражнение - получение DOM элементов
'use strict';

const elem1 = document.querySelectorAll('.one')[0].innerText;
const elem2 = document.getElementsByClassName('one')[1].innerText;
const elem3 = document.querySelector('#two').innerText;
const elem4 = document.querySelector('[user-id="4"]').innerText;
console.log(elem1);
console.log(elem2);
console.log(elem3);
console.log(elem4);