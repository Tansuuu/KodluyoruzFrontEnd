const todoInput = document.querySelector(".todo-input");
const todoButton = document.querySelector(".button");
const todoList = document.querySelector("#list");
let items;
// const items = [
//   "3 Litre Su İç",
//   "Ödevleri Yap",
//   "En Az 3 Saat Kodlama Yap",
//   "Yemek Yap",
//   "50 Sayfa Kitap Oku",
// ];

loadItems();
eventListeners();
function eventListeners() {
  todoButton.addEventListener("click", newElement);
  todoList.addEventListener("click", deleteElement);
}

function loadItems() {
  items = getItemsFromLS();
  items.forEach((item) => createItem(item));
}

function getItemsFromLS() {
  if (localStorage.getItem("items") === null) {
    items = [];
  } else {
    items = JSON.parse(localStorage.getItem("items"));
  }
  return items;
}

function setItemToLS(text) {
  items = getItemsFromLS();
  items.push(text);
  localStorage.setItem("items", JSON.stringify(items));
}

function deleteItemFromLS(text) {
  items = getItemsFromLS();
  items.forEach(function (item, index) {
    if (item === text) {
      items.splice(index, 1);
    }
  });
  localStorage.setItem("items", JSON.stringify(items));
}

function createItem(text) {
  const todoLi = document.createElement("li");
  const todoDiv = document.createElement("div");
  todoDiv.innerHTML =
    '<i class="fa-solid fa-xmark" style="color: #8e8e90"></i>';
  todoLi.innerHTML = text;
  todoLi.appendChild(todoDiv);
  todoLi.setAttribute("onclick", "completeElement(this)");
  todoList.appendChild(todoLi);
}

function newElement(e) {
  e.preventDefault();

  const isEmpty = (str) => !str.trim().length;

  if (isEmpty(todoInput.value)) {
    $(".error").toast("show");
  } else {
    $(".success").toast("show");
    createItem(todoInput.value);
    setItemToLS(todoInput.value);
  }
  todoInput.value = "";
}

function deleteElement(e) {
  if (e.target.className === "fa-solid fa-xmark") {
    e.target.parentElement.parentElement.remove();
  }
  deleteItemFromLS(e.target.parentElement.parentElement.textContent);
}

function completeElement(todoLi) {
  if (todoLi.className === "checked") {
    todoLi.classList.remove("checked");
  } else {
    todoLi.classList = "checked";
  }
}
