// Работа со строками

// Базовые методы

const userName = '🔥Вася Пупкина';
console.log(userName[0]); // к строке можно обратиться как к массиву
console.log(userName[1]);
console.log(userName[0] + userName[1]);
console.log(userName.charAt(2)); // аналог
console.log('----- length -----');
console.log(userName.length);
console.log('----- indexOf -----');
console.log(userName.indexOf('упс')); // -1, нет такой буквы
console.log(userName.indexOf('уп')); // поиск символа, точнее, подстроки (первое вхождение)
console.log(userName.indexOf('а')); //
console.log('----- lastIndexOf -----');
console.log(userName.lastIndexOf('а')); // (последнее вхождение)
console.log('----- includes -----');
console.log(userName.includes('уп')); // проверка вхождения подстроки
console.log(userName.includes('упс')); //
console.log('----- slice -----');
console.log(userName.slice(7)); // срез сироки, начиная с какого индекса
console.log(userName.slice(7, 10)); // срез сироки, начиная с какого индекса и до какого, не включая
// Еще есть
// .startsWith - проверяет, начинается ли строка с переданного символа
// .endsWith - проверяет, заканчивается ли строка переданным символом

// Упражнение - выделение имени
console.log('==== Упражнение - выделение имени');
const name = 'Вася aka Terminator Vinovator Пупкин';
const firstSpace = name.indexOf(' ');
const lastSpace = name.lastIndexOf(' ');
const firstName = name.slice(0, firstSpace);
const surname = name.slice(lastSpace + 1);
const result = `${firstName} ${surname}`;
console.log(name);
console.log(result);

// Преобразование строки
console.log('==== Преобразование строки');

const str = 'Василий Пупкин';
console.log(str);
console.log(str.toLowerCase());
console.log(str.toUpperCase());
console.log(str.replace('В', 'Б'));
console.log(str.replace('и', 'ю'));
console.log(str.replaceAll('и', 'ю'));
console.log(str.replace(/и/, 'ю'));
console.log(str.replace(/и/g, 'ю'));

const str1 = ' Василий Пупкин   \n';
console.log('---- trim ----');
console.log(str1.trim());
console.log(str1.trimStart());
console.log(str1.trimEnd());

// Упражнение - проверка номера
console.log('==== Упражнение - проверка номера');

/**
 * Проверяет, является ли переданная строка валидным номером телефона
 * @param {string} phone
 * @return {boolean}
 */
function validatePhone(phone) {
    return checkNumber(clearString(phone));
}

/**
 * Удаляет из переданной строки скобки, тире и пробелы;
 * Меняет +7 на 8
 * @param {string} str
 * @return {string}
 */
function clearString(str) {
    return str
        .trim()
        .replace('+7', '8')
        .replace(/[\s()-]/g, '');
}

/**
 * Проверяет, что в строке содержатся только числа
 * @param str
 * @return {boolean}
 */
function isStringContainOnlyNumbers(str) {
    return str
        .split('')
        .reduce((acc, simbol) => !isNaN(+simbol) && acc, true);
}

/**
 * Проверяет, является ли символ, переданный вторым параметром,
 * первым символом строки, переданной первым параметром
 * @param str
 * @param symbol
 * @return {boolean}
 */
function isFirstSymbolEqual(str, symbol) {
    return str.startsWith(String(symbol));
}

/**
 * Проверяет, равна ли длина строки, переданной первым параметром,
 * числу, переданному вторым параметром
 * @param {string} str
 * @param {number} length
 * @return {boolean}
 */
function isLengthEqual(str, length) {
    return str.length === length;
}

/**
 * Выполняет окончательную валидацию номера
 * @param number
 * @return {boolean}
 */
function checkNumber(number) {
    return isStringContainOnlyNumbers(number)
    && isFirstSymbolEqual(number, 8)
    && isLengthEqual(number, 11)
}

const arPhones = [
    '89103235356',
    '+79103235356',
    '+7(910)3235356',
    '+7(910) 323-53-56',
    '+7(910) 323-53-56 ',
    '89103235',
    '+7d910d323-53-56',
    '9+7103235356',
    '89103g35356',
];

for (const phone of arPhones) {
    console.log(`${phone}: ${validatePhone(phone) ? 'Valid' : 'Invalid'}`);
}

// Строки и массивы

/**
 ... Всё!!! Дальше конспект в тетради. Так быстрее, и проще искать.
 Здесь только упражнения.
 */

const maskCard = card => card.slice(-4).padStart(card.length, '*');
const card = '4737054723165935';
console.log(maskCard(card));

