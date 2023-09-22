class TaskView {
    constructor() {
        this.taskList = document.getElementById('task-list');
    }
    clearInput() {
        document.getElementById('task-input').value = '';
    }

    renderTasks(tasks) {
        this.taskList.innerHTML = '';
        tasks.forEach((task) => this.renderTask(task));
    }

    renderTask(task) {
        const listItem = document.createElement('li');
        listItem.className = 'task-item';
        listItem.innerHTML = `
        <input type ="checkbox" ${task.completed ? 'checked' : ''}>
        <span>${task.name}</span>
        <button class="delete-button">Delete</button>`;
        listItem.querySelector('input').addEventListener('change', () => {
            taskController.toggleTaskCompletion(task.id);
        });
        listItem.querySelector('.delete-button').addEventListener('click',() => {
            taskController.deleteTask(task.id);
        });
        this.taskList.appendChild(listItem);
    }
}