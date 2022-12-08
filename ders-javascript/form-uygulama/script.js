let userFormDOm = document.querySelector("#userForm")
userFormDOm.addEventListener("submit", formHandler)
let alertDOM = document.querySelector("#alert")

const alert = (title, message, className="warning") => `
<div class="alert alert-${className} alert-dismissible fade show mt-3" role="alert">
  <strong> ${title} </strong> ${message}
  <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
</div>
`

function formHandler(e) {
    e.preventDefault();
    const USER_NAME = document.querySelector("#username")
    const SCORE = document.querySelector("#score")
    if (USER_NAME.value && SCORE.value) {
        addItem(USER_NAME.value, SCORE.value)
        USER_NAME.value = "";
        SCORE.value = "";
    } else {
        alertDOM.innerHTML = alert("Başlık bilgisi: ", "Eksik bilgi girdiniz!!", "danger");
    }
}

/* <li class="list-group-item d-flex justify-content-between align-items-start">
    <span class="badge bg-primary rounded-pill">14</span>
</li> */
let userListDOM = document.querySelector("#userList")
const addItem = (userName, score) => {
    let liDOM = document.createElement("li")
    liDOM.innerHTML = `
    ${userName}
    <span class="badge bg-primary rounded-pill">${score}</span>
    `
    liDOM.classList.add("list-group-item", "d-flex", "justify-content-between", "align-items-center")
    userListDOM.append(liDOM)
}