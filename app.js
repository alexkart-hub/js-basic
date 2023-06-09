// JSON
'use strict';

function changeClick() {
    const input = document.querySelector('.input').value;
    if (!input) {
        return;
    }
    document.querySelector('.panel').innerText = input;
    document.querySelector('.input').value = '';
    document.querySelector('.notification')
        .setAttribute('class', 'notification notification_active');
    const text = JSON.stringify({
        text: input
    });
    localStorage.setItem('text', text);
}

function changeInput(e) {
    if (e.code === 'Enter' || e.key === 'Enter') {
        changeClick();
    }
}


const obj = {
    a: 1,
    name: 'Вася',
    color: [
        {name: 'red', num: '#FF0000'}
    ]
};

const json = JSON.stringify(obj);
console.log(json);
const objFromJson = JSON.parse(json);
console.log(objFromJson);

localStorage.setItem('text', json);