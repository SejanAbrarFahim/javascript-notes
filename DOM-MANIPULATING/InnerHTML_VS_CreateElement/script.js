// CreateElement - more secure
const info = document.querySelector(".info")
let h1 = document.createElement("h1");
h1.textContent = "this is h1 tag coming from dom";
info.appendChild(h1); // this is h1 tag coming from dom

// innerHtml 
 const data = document.querySelector(".data");
 data.innerHTML = "<h1>This is h1 tag</h1>"; // This is h1 tag
 


