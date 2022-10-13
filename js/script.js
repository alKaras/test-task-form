
//Modal Windows
const formContainer = document.querySelector(".form-container");
const greetingModal = document.querySelector(".greeting-container");
const confirmationModal = document.querySelector(".modal-window");
//Buttons

const submitBtn = document.querySelector(".submit-btn");
const confirmBtn = document.querySelector(".confirm-btn");
const cancelBtn = document.querySelector(".cancel-btn");
const form = document.querySelector(".registration");

let message = document.querySelector("#user-email");
let greetmsg = document.querySelector("#g-user-email");
let userEmail = document.getElementById("email");
let userPass = document.getElementById("password");
submitBtn.addEventListener('click', () => {

    if (userEmail.value !== "" && userPass.value !== "") {
        event.preventDefault();
        confirmationModal.style.display = 'block';
        message.textContent = userEmail.value;
    }
})

cancelBtn.addEventListener('click', () => {
    event.preventDefault();
    confirmationModal.style.display = 'none';
    userEmail.value = "";
    userPass.value = "";
})

confirmBtn.addEventListener('click', () => {
    event.preventDefault();
    formContainer.style.display = 'none';
    confirmationModal.style.display = 'none';
    greetingModal.style.display = 'block';
    greetmsg.textContent = userEmail.value;
})