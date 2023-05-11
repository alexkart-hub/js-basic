/* Функции высшего порядка
Функция высшего порядка - это функция, которая принимает в качестве параметра
или возвращает в качестве результата работу функцию.
*/

/** callback */
function add(a, b)
{
    return a + b;
}

/** callback */
function subtract(a, b)
{
    return a - b;
}

/** callback */
function pwr(a, b)
{
    return a ** b;
}

/** Функция высшего порядка */
function calculate(a, b, fn)
{
    console.log(fn.name);
    const res = fn(a, b);
    return res;
}

let result = calculate(3, 5, add);
console.log(result);
result = calculate(3, 5, subtract);
console.log(result);
result = calculate(3, 5, pwr);
console.log(result);

// ---- Возврат функции ----
console.log('---- Возврат функции ----');
function power(pow)
 {
     return function (num) {
         return num ** pow;
     }
 }

const powerOfTwo = power(2);
const powerOfThree = power(3);
console.log(powerOfTwo(5));
console.log(powerOfThree(5));
console.log(power(5)(4));

// ---- Упражнение "Стрелочные функции" ----
console.log('---- Упражнение "Стрелочные функции" ----');
const arrowPower = pow => num => num ** pow;

const arrowPowerOfTwo = arrowPower(2);
const arrowPowerOfThree = arrowPower(3);
console.log(arrowPowerOfTwo(5));
console.log(arrowPowerOfThree(5));
console.log(arrowPower(5)(4));

const cube = x => y => z => x * y * z;
console.log(cube(2)(2)(2));
