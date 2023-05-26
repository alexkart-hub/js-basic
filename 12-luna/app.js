// Домашнее задание - Работа со строками
// 21.05.2023

/**
 * Валидация номера карты
 * @param {string} card
 * @return {boolean}
 */
function checkCard(card) {
    const clearCard = card
        .trim()
        .replaceAll('-', '');

    if (clearCard.length !== 16) {
        return false;
    }
    return clearCard
        .split('')
        .reduce((acc, num, index) => {
        num = !(index % 2) ? +num * 2 : +num;
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
