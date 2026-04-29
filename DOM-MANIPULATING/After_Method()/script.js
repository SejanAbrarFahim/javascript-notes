const info = document.querySelector("h1"); // select

const h2 = document.createElement("h2"); // created element
h2.textContent = "this is h2 tag used for after method"; // element value text added

info.after(h2); // this is tag used for after method

const data = document.querySelector("#Myp");
const h3 = document.createElement("h2");
h3.textContent = "Add new h2 content"
data.after(h3); // Add new h2 content

const div = document.querySelector("div"); 
const h4 = document.createElement("h3");
h4.textContent = "Add new h3 tag";
div.after(h4); // Add new h3 tag