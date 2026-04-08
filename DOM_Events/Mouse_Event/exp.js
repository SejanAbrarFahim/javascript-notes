const btn = document.querySelector("#btn");
const ChCl = document.querySelector("#changeColor");
const text = document.querySelector("#text");

btn.addEventListener("click",()=>{
    let body = document.querySelector("body");
    body.style.backgroundColor ="gray"
})

ChCl.addEventListener("click",()=>{
    let body = document.querySelector("body");
    body.style.backgroundColor = "white"
})

text.addEventListener("dblclick",()=>{
   text.style.color = "tomato"
})