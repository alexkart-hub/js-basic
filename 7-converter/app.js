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
    if (!checkData(sum, currencyFrom, currencyTo)) {
        return null;
    }

    const result = sum / getCourse(currencyTo) * getCourse(currencyFrom);

    return prepareResult(sum, result, currencyFrom, currencyTo);
}

/**
 * Проверяем возможность конвертации
 * @param sum - сумма
 * @param currencyFrom - код валюты, из которой конвертируем
 * @param currencyTo - код валюты, в которую конвертируем
 * @return boolean
 */
function checkData(sum, currencyFrom, currencyTo) {
    const [arSupportedCurrencies] = getCurrenciesData();
    return typeof sum === 'number'
        && sum > 0
        && arSupportedCurrencies.includes(currencyFrom)
        && arSupportedCurrencies.includes(currencyTo);
}

/**
 * Данные для конвертации
 * @return array
 */
function getCurrenciesData() {
    return [
        ['rub', 'usd', 'eur', 'new'],
        [1, 60, 70, 5],
        ['руб', '$', 'EUR', 'нов']
    ]
}

/**
 * Возвращает индекс валюты
 * @param currency - код валюты
 * @return number
 */
function getIndex(currency) {
    const [currencies] = getCurrenciesData();
    return currencies.indexOf(currency);
}

/**
 * Возвращает курс валюты
 * @param currency - код валюты
 * @return number
 */
function getCourse(currency) {
    const [, courses] = getCurrenciesData();
    return courses[getIndex(currency)];
}

/**
 * Возвращает название валюты для подстановки в строку
 * @param currency - код валюты
 * @return string
 */
function getTitle(currency) {
    const [, , titles] = getCurrenciesData();
    return titles[getIndex(currency)];
}

/**
 * Возвращает результирующую строку для вывода в консоль
 * @param sumFrom - сумма, которую конвертируем
 * @param sumTo - итоговая сумма
 * @param currencyFrom - код валюты, из которой конвертируем
 * @param currencyTo - код валюты, в которую конвертируем
 * @return string
 */
function prepareResult(sumFrom, sumTo, currencyFrom, currencyTo) {
    return `${sumFrom} ${getTitle(currencyFrom)} -> ${sumTo.toFixed(2)} ${getTitle(currencyTo)}`;
}

console.log(currencyConverter(1000, 'usd', 'rub'));
console.log(currencyConverter(1000, 'rub', 'eur'));
console.log(currencyConverter(1000, 'usd', 'eur'));
console.log(currencyConverter(1000, 'new', 'rub'));
console.log(currencyConverter(1000, 'new', 'usd'));
console.log(currencyConverter(1000, 'rub', 'usd'));
console.log(currencyConverter(1000, 'old', 'usd'));
