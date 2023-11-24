function addNewTask() {
    var list = document.getElementById("list");
    var text = document.getElementById("task_name");

    if(text.value.length === 0) {
        alert('Rapaz ele tá sem zap');
        return;
    }

    var listItem = document.createElement("li");
    listItem.className = "list-item";

    const textElement = document.createTextNode(text.value);
    listItem.appendChild(textElement);
    list.appendChild(listItem)
    
    text.value = '';
}