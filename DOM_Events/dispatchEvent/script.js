const Mybutton = document.querySelector("#myButton")

Mybutton.addEventListener("click",()=>{
    alert("button was clicked")
})

const event = new Event("click");

Mybutton.dispatchEvent(event)