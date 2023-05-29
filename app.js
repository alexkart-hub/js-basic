// Scope и this
// Упражнение - объект в объекте

const company = {
    name: 'ООО Агро',
    employees: [
        {
            name: 'Света',
            getName: function () {
                return this.name
            }
        }
    ],
    ceo: {
        name: 'Вася'
    },
    getName: function () {
        return this.name;
    },
};

console.log(company.getName());
company.ceo.getName = company.getName;
console.log(company.ceo.getName());
console.log(company.employees.map(staff => staff.getName()));
