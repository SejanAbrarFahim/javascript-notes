const password = document.querySelector("#password");

password.addEventListener("focus",(e)=>{
    e.target.style.backgroundColor = "gray"
});

const username = document.querySelector("#Username");

username.addEventListener("blur",(a)=>{
    a.target.style.backgroundColor = "gray"
})