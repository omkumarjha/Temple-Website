
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

// below code mai bas jaise hi screen ki width 600 px ho jayegi to hum  "welcome to" ke niche bache hue text ko laa denge .

// This media query targets viewports that have a maximum width of 600px
const mQuery = window.matchMedia('(max-width: 600px)')

function handleMobilePhoneResize(e) {   
   // Check if the media query is true
   if (e.matches) {     
        let right = document.querySelector(".right");
        right.children[0].innerHTML = "Welcome To <br> Baijantri Shakti Peeth Trust";
   }
   else{
        let right = document.querySelector(".right");
        right.children[0].innerHTML = "Welcome To Baijantri Shakti Peeth Trust";
   }
} 

// Set up event listener 
mQuery.addListener(handleMobilePhoneResize)