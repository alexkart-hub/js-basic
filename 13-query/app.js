// Домашнее задание - Объекты
// 26.05.2023

function getParamString(objParams) {
    let paramString = '';
    let tmpStr = '';
    for (const param of Object.keys(objParams)) {
        tmpStr = `${param}=${objParams[param]}`;
        paramString += !(paramString.length) ? tmpStr : '&' + tmpStr;
    }
    return paramString;
}

const objParams = {
    search: 'Вася',
    take: 10,
    age: 25
};

console.log(getParamString(objParams));