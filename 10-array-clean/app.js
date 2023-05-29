// Домашнее задание - Функции высшего порядка
// 15.05.2023

/**
 * Удаляет из массива элементы по правилу, определенному в колбэк-функции.
 * Возвращает новый массив, исходный массив не модифицирует.
 * @param {any[]} arr
 * @param {function(*): boolean} func
 * @return array
 */
function arrayClean(arr, func) {
    const resArr = [];
    for (const item of arr) {
        if (!func(item)) {
            resArr.push(item);
        }
    }
    return resArr;
}

const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
console.log(arr);

console.log(arrayClean(arr, (item) => item % 2 === 0));
console.log(arrayClean(arr, (item) => item % 2 === 1));
console.log(arrayClean(arr, (item) => item > 5));
console.log(arrayClean(arr, (item) => item < 6));
console.log(arrayClean(arr, (item) => item % 3 > 0));

const arr1 = ['Саша', 'Петя', 'Иван', 'Таня', 'Настя', 'Коля', 'Федя', 'Женя', 'Катя', 'Соня'];
console.log(arr1);

console.log(arrayClean(arr1, (item) => item.split('').includes('К')));
console.log(arrayClean(arr1, (item) => !item.split('').includes('С')));

