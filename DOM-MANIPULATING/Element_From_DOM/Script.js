// To Create a new div and set its attributes

 let div = document.createElement("div");
 div.innerHTML = "<h1>hello programmer</h1>"
 // console.log(div); // hello programmer (browser - inspect - consol)

document.body.appendChild(div) // hello programmer


 // Adding an id to the div
 let Div = document.createElement("div");
 Div.id = "const";
 Div.className ="note"
 Div.innerHTML = "<a href=''>click Me</a>";
 document.body.appendChild(Div); //click Me



// to create a new text node and add it to the div
let DiV = document.createElement("div")
 const text = document.createTextNode("This text coming from js DOM")
 DiV.appendChild(text);
 document.body.appendChild(DiV) // <div>This text coming from js DOM</div>