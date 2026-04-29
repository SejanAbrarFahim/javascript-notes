let controler = document.querySelector("#controler");

controler.addEventListener("click",(e)=>{
    const scrollExp = document.querySelector("#ScrollExample");
    let event = e.target;
    switch(event.id){
        case "btnLeft":
            scrollExp.scrollLeft += 20;
            break;
        case "btnTop":
            scrollExp.scrollTop +=20 ;
            break;
    }
})