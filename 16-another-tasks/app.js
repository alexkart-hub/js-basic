// Домашнее задание - Управление this
// 31.05.2023
'use strict';

/**
 * Объект из предыдущего Д/з
 */
const ToDoList = {
    tasks: [],
    addTask: function (title, priority) {
        const lastId = this.tasks.slice(-1)[0]?.id ?? 0;
        this.tasks.push({id: lastId + 1, title, priority});
    },
    deleteTask: function (id) {
        if (!this.findTask(id)) {
            console.log('Задача с id = ' + id + ' не найдена в списке задач');
            return false;
        }
        this.tasks.splice(this.tasks.findIndex(task => task.id === id), 1);
    },
    updateTask: function (id, paramName, paramValue) {
        const task = this.findTask(id);
        if (!task) {
            console.log('Задача с id = ' + id + ' не найдена в списке задач');
            return false;
        }
        task[paramName] = paramValue;
    },
    sortTasks: function () {
        return [...this.tasks].sort((task1, task2) => task1.priority - task2.priority);
    },
    findTask: function (id) {
        return this.tasks.find(task => task.id === id);
    }
};

/**
 * Новый объект
 */
const newTask = {
    tasks: [],
    addTask(name, description, order) {
        ToDoList.addTask.call(this, name, order);
        this.tasks.slice(-1)[0].description = description;
    },
    deleteTask: ToDoList.deleteTask,
    updateTask: ToDoList.updateTask,
    sortTasks: ToDoList.sortTasks,
    findTask: ToDoList.findTask,
};

newTask.addTask('Отдохнуть', 'Полежать', 1);
newTask.addTask('Прочитать книгу', 'Фантастику', 2);
newTask.addTask('Посмотреть видео', 'Кино', 3);
newTask.addTask('Погулять', 'В парк', 3);
newTask.deleteTask(2);
newTask.deleteTask(5);
newTask.addTask('Прочитать книгу', 'Про пиратов', 2);
newTask.updateTask(5, 'title', 'Дочитать книгу');
newTask.updateTask(3, 'description', 'Про программирование');
newTask.updateTask(4, 'priority', 4);
newTask.updateTask(10, 'priority', 1);
console.log(newTask.sortTasks());

console.log(newTask);