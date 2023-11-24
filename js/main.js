function addNewTask() {
    let list = document.getElementById("list");
    let taskName = document.getElementById("task_name");
    let taskTime = document.getElementById("task_time");

    if(taskName.value.length === 0 || taskTime.value.length === 0) {
        alert("Rapaz ele tá sem zap");
        return;
    }

    let listItem = document.createElement("li");
    listItem.className = "list-item";

    let text = taskName.value + " | " + taskTime.value;

    const taskNameElement = document.createTextNode(text);
    listItem.appendChild(taskNameElement);
    list.appendChild(listItem)
    
    taskName.value = "";
    taskTime.value = "";
}