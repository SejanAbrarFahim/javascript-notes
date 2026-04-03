let menu = document.querySelector("#menu");

let li = document.createElement("li");
li.textContent = "Home";
menu.replaceChild(li,menu.firstElementChild);

/*
Home
About Us
Content
Contact
*/