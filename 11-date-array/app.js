// Домашнее задание - Итерации в массивах
// 17.05.2023

/**
 * Принимает массив строк и формирует массив дат, полученных из этих строк
 * @param {string[]} arr
 * @return array
 */
function getDates(arr) {
    return arr.map(date => {
        const [day, month, year] = splitDate(date);
        if (isNotDate(day, month, year)) {
            return '';
        }
        return `${day}-${month}-${year}`;
    }).filter(date => date !== '');
}

/**
 * Разбирает строку по разделителю "-" или "/"
 * В зависимости от разделителя устанавливается порядок элементов
 * в возвращаемом массиве: если "-", то [1, 2, 3], иначе [2, 1, 3]
 * @param {string} date
 * @return array
 */
function splitDate(date) {
    let [month, day, year] = date.split('/');
    if (!year) {
        [day, month, year] = date.split('-');
    }
    return [day, month, year];
}

/**
 * Проверка, является ли набор данных корректной датой
 * @param {*} day
 * @param {*} month
 * @param {*} year
 * @return boolean
 */
function isNotDate(day, month, year) {
    day = +day;
    month = +month;
    year = +year;
    return (
        isNaN(day) || isNaN(month) || isNaN(year) ||
        day > 31 || day < 1 ||
        month > 12 || month < 1 ||
        year > 2023 || year < 1900 ||
        (month === 2 && day > 28) ||
        ([4, 6, 9, 11].includes(month) && day > 30)
    );
}

const dates = [
    '10-02-2022',
    'Первое-02-2022',
    'тест',
    'тест/тест',
    'тест/тест/тест',
    '11/тест/тест',
    '11/12/тест',
    '11/12/2023',
    '11-12-2023',
    '11-12/2023',
    '11/12-2023',
    '00/13/2022',
    '41/12/2023',
    '11/31/2023',
    '11/30/2023',
    '31-02-2023',
    '28-02-2010',
    '02-28-2010',
    '29-02-2010',
];

console.log(getDates(dates));