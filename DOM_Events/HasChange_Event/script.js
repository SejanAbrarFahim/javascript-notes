const UpdateContent = ()=> {
    const content = document.querySelector("#Content");
    const hash = window.location.hash.substring(1);

    switch(hash){
        case "Home" :
          content.innerHTML = "<h1>This is Home page</h1>";
          break;
        case "About":
          content.innerHTML = "<h2>This is About page</h2>";
          break;
        case "contact":
          content.innerHTML = "<h2>This is Content page</h2>";
    }

}

window.addEventListener("hashchange",UpdateContent)