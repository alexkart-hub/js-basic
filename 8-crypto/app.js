// Домашнее задание - Массивы
// 14.05.2023

/**
 * Функция для шифрования/дешифровки
 * @param {string} str
 * @param {boolean} uncrypt - если true, то расшифровываем. По-умолчанию false.
 * @return string
 */
function crypto(str, uncrypt = false) {
    const key = getKey(str.length, uncrypt);

    const arStr = str.split('');
    const arStrNew = arStr.map((_, index) => {
        return arStr[key[index]];
    })

    return arStrNew.join('');
}

/**
 * Функция проверки зашифрованной фразы. Проверяемая фраза подвергается расшифровке,
 * полученный результат сравнивается с незашифрованной фразой
 * Возвращает true, если фраза соответствует, и false, если не соответствует
 * @param {string} checkedStr - проверяемая фраза
 * @param {string} str - незашифрованная фраза
 * @return {boolean}
 */
function check(checkedStr, str) {
    return crypto(checkedStr, true) === str;
}

/**
 * Возвращает ключ для шифрования или дешифровки (если передан параметр uncrypt = true)
 * @param {number} len - длина строки
 * @param {boolean} uncrypt
 * @return array
 */
function getKey(len, uncrypt = false) {
    const uncryptKey = getUncryptKey(len);
    if (uncrypt) {
        return uncryptKey;
    }
    return getCryptKey(uncryptKey);
}

/**
 * Генерит ключ для дешифровки
 * @param {number} len - длина строки
 * @return array
 */
function getUncryptKey(len) {
    const key = [7, 3, 9, 1, 4, 5, 8, 6, 0, 2];
    const result = prepareUncryptKeyStart(key, len);
    const dec = len - len % 10;
    let count = 0;
    for (const index of Object.keys(key)) {
        if (key[index] >= len % 10) {
            continue;
        }
        result.push(+key[index] + dec);
        if (count++ >= (len - dec)) {
            break;
        }
    }
    return result;
}

/**
 * Возвращает пустой массив, если длина фразы меньше 10 знаков.
 * Если длина фразы больше 10 знаков, то возвращает массив, в котором количество
 * элементов кратно 10
 * @param {Array} key
 * @param {number} len
 * @return array
 */
function prepareUncryptKeyStart(key, len) {
    const result = [];
    if (len >= 10) {
        for (let i = 0; i < (len - len % 10) / 10; i++) {
            for (const value of key) {
                result.push(value + i * 10);
            }
        }
    }
    return result;
}

/**
 * Преобразовывает ключ для расшифровки в ключ для шифрования
 * @param {Array} uncryptKey - ключ для расшифровки
 * @return array
 */
function getCryptKey(uncryptKey) {
    const result = [];
    for (const index of Object.keys(uncryptKey)) {
        result[uncryptKey[index]] = +index;
    }
    return result;
}

const test = [
    ['password'],
    ['password', 'wrong'],
    ['Password is very good and very long. Очень длинная фраза.'],
];

for (const testData of test) {
    console.log(testData[0]);
    console.log(crypto(testData[0]));
    console.log(check(crypto(testData[0]), testData[1] ?? testData[0]));
}
