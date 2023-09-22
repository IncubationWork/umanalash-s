const taskModel = new TaskModel();
const taskView = new TaskView();
const taskController = new TaskController(taskModel,taskView);

function addTaskFromInput() {
    const taskInput = document.getElementById('task-input');
    const taskName = taskInput.value.trim();
    taskController.addTask(taskName);
}

document.getElementById('task-input').addEventListener('keydown', function(event) {
    if (event.key === "Enter") {
        addTaskFromInput();
    }
});

document.getElementById('add-button').addEventListener('click', function() {
    addTaskFromInput();
});
taskView.renderTasks(taskModel.tasks);