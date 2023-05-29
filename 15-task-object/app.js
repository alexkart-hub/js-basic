// Домашнее задание - Scope и this
// 29.05.2023

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

ToDoList.addTask('Отдохнуть', 1);
ToDoList.addTask('Прочитать книгу', 2);
ToDoList.addTask('Посмотреть видео', 3);
ToDoList.addTask('Погулять', 3);
ToDoList.deleteTask(2);
ToDoList.deleteTask(5);
ToDoList.addTask('Прочитать книгу', 2);
ToDoList.updateTask(5, 'title', 'Дочитать книгу');
ToDoList.updateTask(3, 'priority', 5);
ToDoList.updateTask(10, 'priority', 1);
console.log(ToDoList.sortTasks());
console.log(ToDoList);