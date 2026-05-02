const message = document.querySelector("#Message");
const result = document.querySelector("#result")

/* 
message.addEventListener("input",()=>{
    result.innerHTML = message.value ;
})*/
// or

message.addEventListener("change", ()=>{
    result.innerHTML = message.value;
})