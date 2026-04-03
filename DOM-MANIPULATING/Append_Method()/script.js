// Use the parentNode.append() method to append a set of node objects or DOMString object after the last child node of the parentNode.

const data = document.querySelector("#app");

let child = ["HTML", "CSS","javaScript","python","C#"];

let nodes = child.map((ProLang)=>{
    let li = document.createElement("li");
    li.textContent = ProLang;
    return li
})

data.append(...nodes);

/*
Language name
HTML
CSS
javaScript
python
C#
*/