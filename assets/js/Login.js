const signin=document.querySelector(".signin");
const signup=document.querySelector(".signup");
const clickme=document.querySelector(".clickhere");
const log=document.querySelector(".start");

// ================  Login  ==================
function login(){
    signin.classList.remove("disable");
    log.classList.add("disable");
}

// ===============  
function change(){
     signin.classList.add("disable");
     signup.classList.remove("disable")
}
function wrong1(){
    signin.classList.add("disable");
    log.classList.remove("disable");
}
function wrong2(){
    signup.classList.add("disable");
    log.classList.remove("disable");
}