const clickMe = document.querySelector("#clickMe");
clickMe.addEventListener("mousedown",()=>{
    console.log("you have click the mouse down button");
}) // you have click the mouse down button


clickMe.addEventListener("mouseup",()=>{
    console.log("mouse button is released");
}) // mouse button is released

clickMe.addEventListener("click",()=>{
    console.log("mouse button is clicked");
}) // mouse button is clicked

clickMe.addEventListener("dblclick",()=>{
    console.log("mouse button is dblclick");
}) // mouse button is dblclick
