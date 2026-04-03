// The insertAdjacentHTML() is a method of the Element interface so that you can invoke it from any element.

let app = document.querySelector("#app");

app.insertAdjacentHTML("beforebegin" , "<h1>Before ul list</h1>")
app.insertAdjacentHTML("afterbegin","<li>Home</li>")
app.insertAdjacentHTML("afterend","<h2>After ul list </h2>")
app.insertAdjacentHTML("beforeend","<li>Signup</li>")