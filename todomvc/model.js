class Task {
    constructor(id,name) {
        this.id = id;
        this.name = name;
        this.completed = false;
    }
}

class TaskModel {
    constructor() {
        this.tasks = [];
    }
    addTask(name) {
        const id = this.tasks.length + 1;
        const newTask = new Task(id,name);
        this.tasks.push(newTask);
    }
    toggleTaskCompletion(id) {
        const task = this.tasks.find(task => task.id === id);
        task.completed = !task.completed; 
    }
    deleteTask(id) {
        this.tasks = this.tasks.filter(task => task.id !== id);
    }
}