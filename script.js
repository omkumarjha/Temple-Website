
const formSubmit = () => {
    let nameInput = document.querySelector(".nameInput");
    let mailInput = document.querySelector(".mailInput");
    let messsageInput = document.querySelector(".messageInput");

    nameInput.value = ""; 
    mailInput.value = ""; 
    messsageInput.value = ""; 
}

// For hamburger

let hamburger = document.querySelector(".hamburger");
let logo = document.querySelector(".logo");
let ul = document.querySelector(".ul");
let navbar = document.getElementById("navbar");

hamburger.addEventListener("click",()=>{
    logo.classList.toggle("v-hidden")
    ul.classList.toggle("v-hidden")
    navbar.classList.toggle("h-navbar")
})