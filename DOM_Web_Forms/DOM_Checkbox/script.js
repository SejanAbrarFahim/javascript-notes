const cb = document.querySelector("#accept");

//console.log(cb.checked); // true

cb.addEventListener("click",()=>{
    cb.checked = true
    if(cb.checked){
    alert("check mark successful")
} 
})

