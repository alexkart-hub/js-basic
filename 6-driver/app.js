// Домашнее задание - Булева логика
// 12.05.2023

const isAvailable =
    (hasLicence, age, isDrink) => (hasLicence && age >= 18 && !isDrink) ? 'Может' : 'Не может';

console.log(`Может?: ${isAvailable(true, 30, false)}`);
console.log(`Может?: ${isAvailable(false, 30, false)}`);
console.log(`Может?: ${isAvailable(true, 17, false)}`);
console.log(`Может?: ${isAvailable(true, 30, true)}`);
console.log(`Может?: ${isAvailable(true, 18, false)}`);
