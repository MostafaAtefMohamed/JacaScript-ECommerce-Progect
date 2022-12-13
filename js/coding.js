// window.onload=function(){
//     signingButton()
// }
const loginText = document.querySelector(".title-text .login");
const loginForm = document.querySelector("form.login");
const loginBtn = document.querySelector("label.login");
const signupBtn = document.querySelector("label.signup");
const signupLink = document.querySelector("form .signup-link a");
signupBtn.onclick = () => {
  loginForm.style.marginLeft = "-50%";
  loginText.style.marginLeft = "-50%";
};
loginBtn.onclick = () => {
  loginForm.style.marginLeft = "0%";
  loginText.style.marginLeft = "0%";
};
signupLink.onclick = () => {
  signupBtn.click();
  return false;
};
///////////////////////////////////////////////

//login
let email = document.getElementById("email");
let signpassword = document.getElementById("signpassword");
// // email.onkeyup=function(){
//     localStorage.setItem("email",email.value)
if (localStorage.length > 0 && localStorage.getItem("email") != null) {
  email.value = localStorage.getItem("email");
}
if (email.value == "admin@yahoo.com") {
  alert("Welcome Admin You Can Modify The Website As You Like!!");
  location.href = "http://127.0.0.1:5500/shop.html";
} else {
  if (
    email.value == localStorage.getItem("signemail") &&
    signpassword.value == localStorage.getItem("signpassword")
  ) {
    lert("Welcome User!");
    location.href == "http://127.0.0.1:5500/shop.html";
  }
  email.value = localStorage.getItem("email");
}

let password = document.getElementById("password");

if (localStorage.length > 0) {
  password.value = localStorage.getItem("password");
}

function logginButton(e) {
  if (email.value == "admin@yahoo.com") {
    alert("Welcome Admin You Can Modify The Website As You Like!!");
    location.href = "http://127.0.0.1:5500/shop.html";
    localStorage.setItem("email", email.value);
    localStorage.setItem("pas", password.value);
  } else if (
    email.value == localStorage.getItem("signemail") &&
    password.value == localStorage.getItem("signpassword")
  ) {
    // e.preventDefault();
    localStorage.setItem("email", email.value);
    localStorage.setItem("pas", password.value);
    alert("Welcome User");
    location.href = "http://127.0.0.1:5500/shop.html";
    // location.href="www.google.com"
  } else {
    alert("Email & Password Doesn't match");
  }
}

///////////////
//register

function signingButton() {
  let signemail = document.getElementById("signemail");
  // // signemail.onkeyup=function(){
  localStorage.setItem("signemail", signemail.value);
  // // }
  // // if(localStorage.length>0){
  // //     signemail.value=localStorage.getItem("signemail")}

  let signpassword = document.getElementById("signpassword");
  // //     signpassword.onkeyup=function(){
  localStorage.setItem("signpassword", signpassword.value);
  // //     }
  // //     if(localStorage.length>0){
  // //         signpassword.value=localStorage.getItem("signpassword")
  // //     }
}
function adminPage() {
  location.href = "http://127.0.0.1:5500/shop.html";
}
function navigPage() {
  if (localStorage.length < 0) {
    location.href = "http://127.0.0.1:5500/shop.html";
  }
  navigPage();
}
