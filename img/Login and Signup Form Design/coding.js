const loginText = document.querySelector(".title-text .login");
const loginForm = document.querySelector("form.login");
const loginBtn = document.querySelector("label.login");
const signupBtn = document.querySelector("label.signup");
const signupLink = document.querySelector("form .signup-link a");
signupBtn.onclick = (()=>{
  loginForm.style.marginLeft = "-50%";
  loginText.style.marginLeft = "-50%";
});
loginBtn.onclick = (()=>{
  loginForm.style.marginLeft = "0%";
  loginText.style.marginLeft = "0%";
});
signupLink.onclick = (()=>{
  signupBtn.click();
  return false;
});
///////////////////////////////////////////////

//login
let email=document.getElementById("email")
email.onkeyup=function(){
    localStorage.setItem("email",email.value)
}
if(localStorage.length>0){
    email.value=localStorage.getItem("email")}
    if(email.value=="admin@yahoo.com"){
        alert("Welcome Admin You Can sell products!!")
        location.href="http://127.0.0.1:5500/1.html"
    }else{
        email.value=localStorage.getItem("email")
    }
        
    let password=document.getElementById("password")
    password.onkeyup=function(){
        localStorage.setItem("pas",password.value)
    }
    if(localStorage.length>0){
        password.value=localStorage.getItem("password")}
 
        // let loginbut=document.getElementById("loginbut")
        // loginbut.onclick=function(){
        //     location.href="http://127.0.0.1:5500/1.html"
        // }
       function logginButton(){
            location.href="http://127.0.0.1:5500/1.html"
       }

///////////////
//register
let signemail=document.getElementById("signemail")
signemail.onkeyup=function(){
    localStorage.setItem("signE-mail",signemail.value)
}
if(localStorage.length>0){
    signemail.value=localStorage.getItem("signemail")}
 
    let signpassword=document.getElementById("signpassword")
    signpassword.onkeyup=function(){
        localStorage.setItem("signpassword",signpassword.value)
    }
    if(localStorage.length>0){
        signpassword.value=localStorage.getItem("signpassword")}

        let confirmedpass=document.getElementById("confirmedpass")
        confirmedpass.onkeyup=function(){
        localStorage.setItem("confirmedpass",confirmedpass.value)
    }
    if(signpassword.value==confirmedpass.value){
        console.log("matched");
    }
    if(localStorage.length>0){
        confirmedpass.value=localStorage.getItem("confirmedpass")}

        function signingButton(){
            location.href="http://127.0.0.1:5500/2.html"
        }
 