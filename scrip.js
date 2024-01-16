function addTask() {
    var taskInput = document.getElementById("taskinput");
    var timeInput = document.getElementById("timeinput");
    var taskList = document.getElementById("tasklist");

    var listItem = document.createElement("li");
    listItem.className = "list-item";

    var taskText = document.createElement("span");
    taskText.textContent = taskInput.value;

    var dateTimeSpan = document.createElement("span");
    var currentDate = new Date();
    var dateString = currentDate.toLocaleDateString();
    var timeString = timeInput.value || currentDate.toLocaleTimeString();
    dateTimeSpan.textContent = dateString + " " + timeString;

    var editButton = document.createElement("button");
    editButton.className = "btn-edit";
    editButton.textContent = "✎";
    editButton.onclick = function () {
        editTask(listItem);
    };

    var removeButton = document.createElement("button");
    removeButton.className = "btn-remove";
    removeButton.textContent = "🗑️";
    removeButton.onclick = function () {
        removeTask(listItem);
    };

    listItem.appendChild(taskText);
    listItem.appendChild(dateTimeSpan);
    listItem.appendChild(editButton);
    listItem.appendChild(removeButton);

    taskList.appendChild(listItem);

    taskInput.value = "";
    timeInput.value = "";
}

function editTask(element) {
    var taskText = element.getElementsByTagName("span")[0];
    var newText = prompt("Edit task:", taskText.textContent);

    if (newText !== null && newText !== "") {
        taskText.textContent = newText;
    }
}

function removeTask(element) {
    element.remove();
}
