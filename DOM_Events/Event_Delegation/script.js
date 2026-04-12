const menu = document.querySelector("#menu");

menu.addEventListener("click",(event)=>{
    let target = event.target;

    switch(target.id){
        case "home":
            console.log("You have clicked Home Button");
            break;
        case "about":
            console.log("You have click About Button");
            break;
        case "report":
            console.log("You have Clicked report button");
            break;

    }
})