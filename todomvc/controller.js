class TaskController {
    constructor(model,view) {
        this.model = model;
        this.view = view;
    }
    addTask(name) {
        if(name.trim() !== '') {
            this.model.addTask(name);
            this.view.clearInput();
            this.view.renderTasks(this.model.tasks);
        }
    }
    toggleTaskCompletion(id) {
        this.model.toggleTaskCompletion(id);
        this.view.renderTasks(this.model.tasks);
    }
    deleteTask(id) {
        this.model.deleteTask(id);
        this.view.renderTasks(this.model.tasks);
    }
}