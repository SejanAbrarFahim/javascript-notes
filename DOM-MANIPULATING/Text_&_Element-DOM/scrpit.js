let div = document.createElement("div");
div.id = "content";
div.className = "note";

let h1 = document.createElement("h1");
h1.textContent = "This is heading h1 tag coming from js DOM";
div.appendChild(h1); // This is heading h1 tag coming from js DOM

document.body.appendChild(div);
 
 

 const menu = document.querySelector("#menu"); // select
 let li = document.createElement("li"); // element create
 li.innerHTML = "About"; // added text
  menu.appendChild(li); // showing on menu / push the element to the menu

 li = document.createElement("li"); // create element
 li.textContent = "signup";// add text

 menu.appendChild(li);// push the element to the menu

 
 

