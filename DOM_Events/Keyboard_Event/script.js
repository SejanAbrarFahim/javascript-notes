// Keyboard Event 
   /* 1. keydown
      2. keyup
      3.keypress
    */
 


/*const input = document.querySelector("#message");
const text = document.querySelector("#text");

input.addEventListener("keyup" ,(e)=>{
    text.innerHTML += e.key
}) */

const input = document.querySelector("#message");
const text = document.querySelector("#text");

input.addEventListener("keypress" ,(e)=>{
    text.innerHTML += e.key
})

/*const input = document.querySelector("#message");
const text = document.querySelector("#text");

input.addEventListener("keyup" ,(e)=>{
    text.innerHTML += e.key
}) */


