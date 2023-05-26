// Домашнее задание - Циклы
// 15.05.2023
const arr = [1, 40, -5, -100, 3, -15];

function sortArr(arr) {
    const arrCopy = arr.slice();
    for (let i = 0; i < arrCopy.length - 1; i++) {
        for (let j = i + 1; j < arrCopy.length; j++) {
            if (arrCopy[i] > arrCopy[j]) {
                [arrCopy[i], arrCopy[j]] = [arrCopy[j], arrCopy[i]];
            }
        }
    }
    return arrCopy;
}

console.log(sortArr(arr));