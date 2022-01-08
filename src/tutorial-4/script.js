let tasks = [];
const addTodo = document.getElementById("addTodo");
const todoInput = document.getElementById("todoTextInput");
const todoList = document.getElementById("todo__list");

function render() {
  todoList.innerHTML = "";
  for (var i = 0; i < tasks.length; i++) {
    todoList.innerHTML +=
      "<li class='todo__elem'>" +
      tasks[i] +
      " <button class='removeBut' onclick='handleClickRemove(" +
      i +
      ")' >x</button></li> ";
  }
}

function handleClickAdd() {
  if (todoInput.value) {
    tasks.push(todoInput.value);
    render();
    todoInput.value = "";
  } else {
    return false;
  }
}

function handleClickRemove(index) {
  tasks.splice(index, 1);
  render();
}

addTodo.addEventListener("click", handleClickAdd);
