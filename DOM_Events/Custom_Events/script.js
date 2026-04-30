const mybtn = document.querySelector("#mybtn");

mybtn.addEventListener("click", ()=>{
    let event = new CustomEvent("Notify"); // cons

    document.dispatchEvent(event) // dispatch
});

document.addEventListener("Notify",()=>{
    alert("custom event fired") // use
})
