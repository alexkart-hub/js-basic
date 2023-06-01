// Document Object Model (DOM)
'use strict';

const panelText = document.querySelector('.panel').innerText;
console.log(panelText);
document.querySelector('.panel').innerText = 'New text';
document.querySelector('.input').value = 'Text';

// document.querySelector('.button').addEventListener('click', function () {
//     const input = document.querySelector('.input').value;
//     if (!input) {
//         return;
//     }
//     document.querySelector('.panel').innerText = input;
//     document.querySelector('.input').value = '';
// });

function changeClick() {
    const input = document.querySelector('.input').value;
    if (!input) {
        return;
    }
    document.querySelector('.panel').innerText = input;
    document.querySelector('.input').value = '';
    // document.querySelector('.notification').style.display = 'block';
    // document.querySelector('.notification').classList.add('notification_active');
    // document.querySelector('.notification').classList.remove('notification_hidden');
    console.log(document.querySelector('.notification').getAttribute('class'));
   document.querySelector('.notification').setAttribute('class', 'notification notification_active');
}

// document.querySelector('.input').addEventListener('keydown', (e) => {
//     console.log(e);
//     if (e.key === 'Enter') {
//         changeClick();
//     }
// });

function changeInput(e) {
    if (e.code === 'Enter' || e.key === 'Enter') {
        changeClick();
    }
}