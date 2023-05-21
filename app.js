// Объекты

const users = [
    {name: 'Вася', age: 30},
    {name: 'Катя', age: 18},
    {name: 'Аня', age: 40},
    {name: 'Петя', age: 25},
];

function sortUsers(users, asc = true) {
    return users.sort((user1, user2) => asc ? user1.age - user2.age : user2.age - user1.age);
}

console.log(sortUsers(users));

// ===================================

const users1 = [
    {
        name: 'Вася',
        surname: 'Пупкин',
        age: 30,
        skills: ['Разработка', 'DevOps']
    },
    {
        name: 'Катя',
        surname: 'Белова',
        age: 18,
        skills: ['Дизайн']
    },
];

function getNewUsers(users) {
    return users.map(user => {
        return {
            fullName: `${user.name} ${user.surname}`,
            skillNum: user.skills.length
        };
    });
}

console.log(getNewUsers(users1));

const user = {
    name: 'Вася',
    surname: 'Пупкин',
    age: 24,
    fullName: function () {
        return `${this.name} ${this.surname}`
    }
}
console.log(user.fullName());


// Кошелек (wallet)
console.log('==== Кошелек (wallet) ====');
const wallet = {
    balance: 0,
    operations: [],
    in: function (reason, sum) {
        this.balance += sum;
        this.operations.push({
            reason,
            sum
        });
        return true;
    },
    out: function (reason, sum) {
        if (sum > this.balance) {
            return false;
        }
        this.balance -= sum;
        this.operations.push({
            reason,
            sum: -sum
        });
        return true;
    },
    getCountOperations: function () {
        return this.operations.length;
    }
};

console.log(wallet.in('З/п', 40000));
console.log(wallet.out('Квартплата', 4200));
console.log(wallet.out('Инструменты', 10800));
console.log(wallet.out('Еда', 3500));
console.log(wallet.out('Связь', 2800));
console.log(wallet.out('Машина', 1200000));
console.log(wallet.getCountOperations());
console.log(wallet);

const cities = {
    msk: {
        temp: 25,
        area: 2500
    },
    spb: {
        temp: 20,
        area: 1740
    }
};

let tempSum = 0;
const count = Object.keys(cities).length;
for (const city of Object.values(cities)) {
    tempSum += city.temp;
}
console.log(tempSum / count);

const {msk, ...otherCities} = cities;
console.log(msk);
console.log(otherCities);

// аналог array_merge
const newObj = {
    ...wallet,
    ...otherCities,
    ...user
};

console.log(newObj);

// Упражнение
console.log('==== Упражнение ====');

const warehouse = {
    goods: [],
    findGoodById: function (id) {
        return this.goods.find(good => good.id === id) ?? false;
    },
    addGood: function (good) {
        if (typeof good !== 'object' || !Object.keys(good).includes('id')) {
            return 'Некорректные данные!';
        }
        if (this.findGoodById(good.id)) {
            return `Товар с id = ${good.id} уже есть!`;
        }
        this.goods.push(good);
        return `Добавлен товар с id = ${good.id}`;
    },
    getWeightKg: function (id = 0) {
        if (id > 0) {
            const good = this.findGoodById(id);
            return good ?
                good.weight?.kg ? `Вес товара с id = ${id} равен ${good.weight?.kg} кг` : `У товара с id = ${id} нет веса!` :
                `Нет товара c id = ${id}!`;
        } else {
            let weightSum = 0;
            for (const good of this.goods) {
                weightSum += good.weight?.kg;
            }
            return `Общий вес всех товаров ${weightSum} кг.`;
        }
    }
}

// товары

const car = {
    id: 1,
    weight: {
        kg: 1000
    },
    brand: 'Ford'
};

const chair = {
    id: 2,
    weight: {
        kg: 2
    }
}

const paper = {
    id: 3,
    color: 'red'
}

console.log(warehouse.findGoodById(1));
console.log(warehouse.addGood(1));
console.log(warehouse.addGood(car));
console.log(warehouse.addGood(chair));
console.log(warehouse.addGood(chair));
console.log(warehouse.getWeightKg());
console.log(warehouse.getWeightKg(1));
console.log(warehouse.getWeightKg(2));
console.log(warehouse.getWeightKg(3));
console.log(warehouse.addGood(paper));
console.log(warehouse.getWeightKg(3));
console.log(warehouse.findGoodById(1));
