//picking up selectors to be available in our JS

const todoInput = document.querySelector(".todo-input");
const todoButton = document.querySelector(".todo-button");
const todoList = document.querySelector(".todo-list");
//variable for the filter option
const filterOption = document.querySelector(".filter-todo");

//adding event listeners
todoButton.addEventListener("click", addTodo);

//eventlistener to delete a todo item
todoList.addEventListener("click", deleteCheck);

//eventlistener for the todo filter
filterOption.addEventListener("click", filterTodo);

//function that would create the todo

function addTodo(event) {
  //to prevent the form (input type) from submitting
  event.preventDefault();

  //create todo div
  const todoDiv = document.createElement("div");
  //adding a classlist to the div
  todoDiv.classList.add("todo");

  //create list LI
  const newTodo = document.createElement("li");
  newTodo.innerText = todoInput.value;

  //adding a classlist to the list
  newTodo.classList.add("todo-item");
  todoDiv.appendChild(newTodo);

  //checkmark button
  const completedButton = document.createElement("button");
  completedButton.innerHTML = '<i class= "fas fa-check">';
  completedButton.classList.add("complete-btn");
  todoDiv.appendChild(completedButton);

  //for the trash button
  const trashButton = document.createElement("button");
  trashButton.innerHTML = '<i class= "fas fa-trash">';
  trashButton.classList.add("trash-btn");
  todoDiv.appendChild(trashButton);

  //to append to the list
  todoList.appendChild(todoDiv);

  //clearing the todo input value after a user makes an input
  todoInput.value = "";
}

//creating the delete function

function deleteCheck(e) {
  //(e) can be used in place of (event) as a short form
  // target is the element that triggers the function
  const item = e.target;

  //delete the todo item by clicking the trash btn
  if (item.classList[0] === "trash-btn") {
    const todo = item.parentElement;

    //this function totally removes the todo item when the animation ends
    todo.classList.add("fall");
    //TRANSITIONEND IS A JS EVENT THAT IS TRIGGERED WHEN A CSS
    //TRANSITION IS COMPLETED
    todo.addEventListener("transitionend", function () {
      todo.remove();
    });
  }

  /*
the conditional statement checks if the first classname with index number 0
is in the list of the classes of the elements called trash btn
*/

  //checkmark area
  if (item.classList[0] === "complete-btn") {
    const todo = item.parentElement;
    todo.classList.toggle("completed");
  }
}

//function for the todo filter
function filterTodo(e) {
  const todos = todoList.childNodes;
  todos.forEach(function (todo) {
    switch (e.target.value) {
      case "all":
        todo.style.display = "flex";
        break;
      case "completed":
        if (todo.classList.contains("completed")) {
          todo.style.display = "flex";
        } else {
          todo.style.display = "none";
        }
        break;
      case "uncompleted":
        if (!todo.classList.contains("completed")) {
          todo.style.display = "flex";
        } else {
          todo.style.display = "none";
        }
        break;
    }
  });
}
