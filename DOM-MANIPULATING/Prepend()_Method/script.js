// The prepend() method insert a set of node object or DOMString objects before the first child of a parent node:


const info = document.querySelector("#app");
 
let MyLanguage = ["Js","Ts","PhP"];


let nodes = MyLanguage.map((Para)=>{
   let li = document.createElement("li");
   li.textContent = Para;
   return li;
});

info.prepend(...nodes);


/*
Js
Ts
PhP

Current element
*/