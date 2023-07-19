// Домашнее задание - Document Object Model
// 9.06.2023

const body = document.querySelector('body');

// Создаю и добавляю на страницу input-ы
for (let i = 1; i <= 2; i++) {
    let input = document.createElement('input');
    input.setAttribute('type', 'number');
    input.setAttribute('id', `${i}`);
    input.value = '0';
    body.appendChild(input);
}

// Кнопки операций оберну в div, чтобы они отображались ниже инпутов
const blockOperations = document.createElement('div');
blockOperations.classList.add('operations');

// Объект, в котором хранятся операции
const operations = {
    plus: '+',
    minus: '-',
    multiply: '*',
    divide: '/'
};

// Добавляю кнопочки с операциями. Добавляю класс, чтобы можно было стилизовать.
// Складываю их в div.operations
for (const operation of Object.keys(operations)) {
    let button = document.createElement('button');
    button.setAttribute('operation', operation);
    button.setAttribute('onclick', 'calculate(event)');
    button.classList.add('button-operation');
    button.innerText = operations[operation];
    blockOperations.appendChild(button);
}

// Добавляю div с кнопочками операций на страницу
body.appendChild(blockOperations);

// Создаю div, в котором будет отображаться результат
const result = document.createElement('div');
result.style.color = 'white';
result.classList.add('result');

// Добавляю div.result на страницу
body.appendChild(result);

/**
 * Обработчик нажатия на кнопку операции
 * @param e
 */
function calculate(e) {
    const operation = e.target.getAttribute('operation');
    const num1 = +document.getElementById('1').value;
    const num2 = +document.getElementById('2').value;

    let resultText = `${num1} ${operations[operation]} ${num2} = `;
    switch (operation) {
        case 'plus':
            resultText += num1 + num2;
            break;
        case 'minus':
            resultText += num1 - num2;
            break;
        case 'multiply':
            resultText += num1 * num2;
            break;
        case 'divide':
            resultText += (num2 !== 0) ?
                Math.round(num1 / num2 * 1000) / 1000 :
                'На ноль делить нельзя!';
            break;
    }
    document.querySelector('.result').innerText = resultText;
}





