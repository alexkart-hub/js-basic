// Домашнее задание - Основы
// 12.05.2023

function getDistance(positionLat, positionLong, addressLat, addressLong) {
    return Math.sqrt((addressLat - positionLat) ** 2 + (addressLong - positionLong) ** 2);
}

const distance = getDistance(5, 10, 8, 14); // 5
console.log(`Расстояние: ${distance}`);