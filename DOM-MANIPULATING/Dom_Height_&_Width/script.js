// offsetWidth & offsetHeight
let box = document.querySelector(".box");

let width = box.offsetWidth ;
let height = box.offsetHeight;

console.log(width); // 140
console.log(height); // 120


// clientWidth & clientHeight
const Box = document.querySelector(".Box");
let Width = Box.offsetWidth;
console.log(Width); // 104

let WidthTwo = Box.clientWidth;
console.log(WidthTwo); // 100


// getComputedStyle
 let get = document.querySelector(".get");
 let style = getComputedStyle(get)

 console.log(style.marginLeft); // 30px