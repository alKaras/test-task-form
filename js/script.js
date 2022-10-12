
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
let userEmail = document.getElementById("email");
let userPass = document.getElementById("password");
submitBtn.addEventListener('click', () => {
    if (userEmail.value !== "" && userPass.value !== ""){
        confirmationModal.style.display = 'block';
        message.textContent = userEmail.value;
    }
})


