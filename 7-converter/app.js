// Домашнее задание - Функции
// 12.05.2023

/**
 * Конвертирует сумму из валюты currencyFrom в валюту currencyTo
 * @param sum
 * @param currencyFrom
 * @param currencyTo
 * @return {string|null}
 */
function currencyConverter(sum, currencyFrom, currencyTo) {
    const currencies = {
        rub: {
            course: 1,
            title: 'руб'
        },
        usd: {
            course: 60,
            title: '$'
        },
        eur: {
            course: 70,
            title: 'EUR'
        },
        new: {
            course: 5,
            title: 'нов'
        }
    };
    if (sum <= 0 || !currencies[currencyFrom] || !currencies[currencyTo]) {
        return null;
    }

    const result = (sum / currencies[currencyTo].course) * currencies[currencyFrom].course;

    return `${sum} ${currencies[currencyFrom].title} -> ` +
        `${result.toFixed(2)} ${currencies[currencyTo].title}`;
}


console.log(currencyConverter(1000, 'usd', 'rub'));
console.log(currencyConverter(-1000, 'usd', 'rub'));
console.log(currencyConverter(1000, 'rub', 'eur'));
console.log(currencyConverter(1000, 'usd', 'eur'));
console.log(currencyConverter(1000, 'new', 'rub'));
console.log(currencyConverter(1000, 'new', 'usd'));
console.log(currencyConverter(1000, 'rub', 'usd'));
console.log(currencyConverter(1000, 'old', 'usd'));
