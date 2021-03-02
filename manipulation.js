function insertItem() {
    const toDoList = document.querySelector('ul');      // To-Do List unordered list element within my HTML file
    const newToDoItem = document.createElement('li');
    newToDoItem.textContent = document.getElementById("item").value;
    toDoList.appendChild(newToDoItem);
}