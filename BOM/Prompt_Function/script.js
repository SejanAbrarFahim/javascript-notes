let ask = document.querySelector("#ask");
ask.addEventListener("click",()=>{
    let username = prompt("please enter your name");

    if(username !== null && username !== ""){
        alert("Hello " + username , + "How are you")
    }

    else{
        alert("No name entered")
    }
});


let Ask = document.querySelector("#AskMe")
Ask.addEventListener("click",()=>{
    let UserAge = prompt("Please enter your age ")

    if( UserAge !== null && UserAge !== ''){
            alert("your are able to enter our website");
    }

    else if(UserAge < 18){
        alert("Your age is to low ")
    }
    else{
        alert("you are not able to enter our website")
    }
})