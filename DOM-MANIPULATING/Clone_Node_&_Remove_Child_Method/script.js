// Node clone

const menu = document.querySelector("#menu");

let CloneMenu = menu.cloneNode(true);
CloneMenu.id = "small-menu";

document.body.appendChild(CloneMenu);


// remove child

let data = document.querySelector("#small-menu");
data.removeChild(data.firstElementChild);

/*
Home
About
Content
Our product
About
Content
Our product*/