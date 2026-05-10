// Thw window object is global

 /* The global object of Javascript in the web browser is the window object. it means that all variables and functions declared globally with the var keyword became the properties and methods of thw window object. */

 let windowBom =document.querySelector("#openNewWindow");

 // window.open()
/* windowBom.addEventListener("click",()=>{
  window.open("https://www.hablu-programmer.com/dashboard/my-courses","hablu programmer","self")
 })
*/

let mywindow;
 windowBom.addEventListener("click",()=>{
 mywindow = window.open("https://www.hablu-programmer.com/dashboard/my-courses","hablu programmer" ,"self")
 })

//  close window

let closeWindow = document.querySelector("#closeWindow");

closeWindow.addEventListener("click",()=>{
    mywindow.close()
})


// width / height
 /*let mywindow;
 windowBom.addEventListener("click",()=>{
 mywindow = window.open("https://www.hablu-programmer.com/dashboard/my-courses","hablu programmer" , "width=500 , height=300")
 }) */