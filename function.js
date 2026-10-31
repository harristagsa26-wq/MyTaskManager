const input = document.getElementById("task-add");
const addButton = document.getElementById("add-btn");
const list = document.getElementById("tasks");
const error = document.getElementById("error");
const count = document.getElementById("count");

function updateCount() {
    count.textContent = list.children.length;
}

function addTask() {
    const text = input.value.trim();

    if (text == "") {
        error.textContent = "Please input a task";
        return;
    }
    error.textContent = "";

    const li = document.createElement("li");

    const span = document.createElement("span")
    span.className = "task-text";
    span.textContent = text;

    const completeBtn = document.createElement("button");
    completeBtn.textContent = "Complete";
    completeBtn.addEventListener("click", function () {
        span.classList.toggle("done");
    });

    const deleteBtn = document.createElement("button");
    deleteBtn.className = "delete";
    deleteBtn.textContent = "Delete";
    deleteBtn.addEventListener("click", function () {
       li.remove();
       updateCount();
    });


        li.append(span, completeBtn, deleteBtn);
        list.appendChild(li);

        input.value = "";
        input.focus();
        updateCount();

}

    addButton.addEventListener("click", addTask);

    input.addEventListener("keydown", function (e) {
        if (e.key == "Enter") addTask();
    });

