
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

// below code mai bas jaise hi screen ki width 600 px ya usse kam ho jayegi to hum  "welcome to" ke niche bache hue text ko laa denge .

setInterval(()=>{
    if(window.screen.availWidth < 600){
        let right = document.querySelector(".right");
        right.children[0].innerHTML = "Welcome To <br> Baijantri Shakti Peeth Trust";
    }
    else{
        let right = document.querySelector(".right");
        right.children[0].innerHTML = "Welcome To Baijantri Shakti Peeth Trust";
    }
},100)

// below code tab run karega jab user refund wale footer option pe click karega.
document.getElementById("refund").addEventListener("click",(e)=>{
    alert("For Refund Please contact us through form or through phone.")
})