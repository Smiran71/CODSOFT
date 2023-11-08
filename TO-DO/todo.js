let inputs = document.getElementById("inp");
let todolist = document.getElementById("list");

function Add() {
    if (inputs.value === "") {
        alert("Please Enter Something");
    } else {
        let element = document.createElement("li");
        // let icon = document.createElement("i");
        let deleteButton = document.createElement("button");
        deleteButton.textContent = "DEL";
        deleteButton.classList.add("delete-button");
        deleteButton.addEventListener("click", function () {
            // Remove the parent li element when the "Delete" button is clicked
            element.remove();
        });
        element.textContent = inputs.value;
        // todolist.appendChild(element);
        element.appendChild(deleteButton);
        todolist.appendChild(element);
        inputs.value = "";
    }
}