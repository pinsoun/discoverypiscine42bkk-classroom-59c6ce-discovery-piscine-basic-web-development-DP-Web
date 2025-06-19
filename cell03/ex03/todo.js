// Function to get cookies
function getCookie(name) {
  const value = `; ${document.cookie}`;
  const parts = value.split(`; ${name}=`);
  if (parts.length === 2) return parts.pop().split(';').shift();
  return "";
}

// Function to set cookies
function setCookie(name, value, days) {
  const expires = new Date();
  expires.setTime(expires.getTime() + (days * 24 * 60 * 60 * 1000));
  document.cookie = `${name}=${value};expires=${expires.toUTCString()};path=/`;
}

// Function to load saved to-do items from the cookie
function loadTodos() {
  const todos = getCookie('todos');
  if (todos) {
    const todoArray = JSON.parse(todos);
    todoArray.forEach(todo => {
      createTodoElement(todo);
    });
  }
}

// Function to create a new to-do element
function createTodoElement(todoText) {
  const todoList = document.getElementById('ft_list');

  const todoItem = document.createElement('div');
  todoItem.classList.add('todo-item');
  todoItem.textContent = todoText;

  todoItem.addEventListener('click', () => {
    const confirmDelete = confirm("Do you want to remove this TO DO?");
    if (confirmDelete) {
      todoItem.remove();
      updateCookie();
    }
  });

  todoList.prepend(todoItem);
}

// Function to update the cookie after a to-do is added or removed
function updateCookie() {
  const todoList = document.querySelectorAll('.todo-item');
  const todos = Array.from(todoList).map(item => item.textContent);
  setCookie('todos', JSON.stringify(todos), 7);
}

// Event listener for the "New" button
document.getElementById('newTodoBtn').addEventListener('click', () => {
  const newTodo = prompt("Please enter your new TO DO:");
  if (newTodo && newTodo.trim() !== "") {
    createTodoElement(newTodo);
    updateCookie();
  }
});

// Load saved to-dos when the page is loaded
window.onload = loadTodos;

// Show alert every 30 seconds
setInterval(() => {
  alert("Please, use me...");
}, 30000);