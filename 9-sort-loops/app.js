// Домашнее задание - Циклы
// 15.05.2023
const arr = [1, 40, -5, 10, 0];

/**
 * Сортирует массив. Возвращает отсортированный массив, не изменяет исходный.
 * @param {number[]} arr - исходный массив
 * @param {boolean} asc - направление сортировки. Если true - по возрастанию, если
 * false - по убыванию. По умолчанию true
 * @return array - отсортированный массив
 */
function sortArray(arr, asc = true) {
    const [...resArr] = arr;
    let wasReplaced;
    let point = 1;
    do {
        wasReplaced = false;
        for (let index = point; index < resArr.length; index++) {
            if (compare(resArr[index - 1], resArr[index], asc)) {
                swapPlaces(resArr, index - 1, index);
                wasReplaced = true;
            }
        }
    } while (wasReplaced);
    return resArr;
}

/**
 * Меняет местами элементы массива arr с индексами index1 и index2
 * @param {number[]} arr
 * @param {number} index1
 * @param {number} index2
 * @return void
 */
function swapPlaces(arr, index1, index2) {
    let tmp = arr[index1];
    arr[index1] = arr[index2];
    arr[index2] = tmp;
}

/**
 * Сравнивает числа num1 и num2 в соответствии с третьим параметром asc.
 * Если asc = true, то вернет true, если num1 > num2;
 * Если asc = false, то вернет true, если num1 < num2;
 * @param {number} num1 - 1-е число для сравнения
 * @param {number} num2 - 2-е число для сравнения
 * @param {boolean} asc - необязательный, по умолчанию true
 * @return boolean
 */
function compare(num1, num2, asc = true) {
    return asc ? num1 > num2 : num1 < num2;
}

console.log(arr);
console.log(sortArray(arr, false));
