let img = document.querySelector("#img");
img.addEventListener("load",()=> {
    alert("image is Loaded");
})

img.src = "https://picsum.photos/200/200";