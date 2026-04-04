// JavaScript Dom provide the insertBefore() method that allows you to insert a new node after an existing node as a child node.

const app = document.querySelector("#menu");

let li = document.createElement("li");
li.textContent = "Home";

app.insertBefore(li,app.firstElementChild);

// insertAfter

function insertAfter(newNode, existingNode) {
    existingNode.parentNode.insertBefore(newNode, existingNode.nextSibling);
}
let li2 = document.createElement("li");
li2.textContent = "Home";

insertAfter(li2, app.lastChild);

/*
Home
About
Content
Our product
Home
*/