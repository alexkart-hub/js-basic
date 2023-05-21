// Домашнее задание - Работа со строками
// 21.05.2023

/**
 * Валидация номера карты
 * @param {string} card
 * @return {boolean}
 */
function checkCard(card) {
    const arrCard = getClearCardArray(card);
    return isCorrect(arrCard) && checkCardLuna(arrCard);
}

/**
 * Удаляет тире из номера карты
 * @param {string} card
 * @return {array}
 */
function getClearCardArray(card) {
    return card
        .replaceAll('-', '')
        .split('');
}

/**
 * Проверяет, что все символы номера карты являются числами
 * @param {array} card
 * @return {boolean}
 */
function isCorrect(card) {
    return card.reduce((acc, num) => !isNaN(+num) && acc, true);
}

/**
 * Проверяет номер карты по алгоритму Луна
 * @param {array} card
 * @return {boolean}
 */
function checkCardLuna(card) {
    return card.reduce((acc, num, index) => {
            num = index % 2 === 0 ? +num * 2 : +num;
            return acc += num < 10 ? num : num - 9;
        }, 0) % 10 === 0;
}

/**
 * Тестовые данные
 */
const arrCards = [
    '4561-2612-1234-5464',
    '4561-2612-1234-5467',
    '4561-2612-l234-5467',
    '4561-2612-1230-5461',
    '4561-2612-123O-5461',
];

for (const card of arrCards) {
    console.log(`${card} ${checkCard(card)}`);
}
