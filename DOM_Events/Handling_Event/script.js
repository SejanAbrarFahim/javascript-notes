// HTML event handler attributes
  /* Event handlers typically have names that begin with on, for example, the event handler for the click event is onclick. */



// DOM Level 0 event handlers
   /* Each element has event handler properties such as onclick. To assign an event handler, you set the property to a function as shown in the example: */
   const click = document.querySelector("#click");

   function clickMe(){
    alert("Please focus on the class");
   };



// DOM Level 2 event handlers
   /* DOM Level 2 Event Handlers provide two main methods for dealing with the registering/deregistering event listeners:

   1. addEventListener() – register an event handler.
   2. removeEventListener() – remove an event handler. */
   const Btn = document.querySelector("#btn");

   Btn.addEventListener("click", ()=>{
    alert("Hi Programmer")
   });
