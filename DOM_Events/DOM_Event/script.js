/* There are two main event models:
    . Event Bubbling
    . Event capturing


  // Event bubbling
   In the event bubbling model, an event starts at the most specific element and then flows upward toward the least specific element (the document or even window).

    when you click the button, the click event occurs in the following order:
    1. button
    2. div with the id container
    3. body
    4. html
    5. Document

  // Event capturing
   In the event-capturing model, an event starts at the least specific element and flows downward toward the most specific element.

    When you click the button, the click event occurs in the following order:

    1. document
    2. html
    3. body
    4. div with the id container
    5. button


 */


const button = document.querySelector("#btn");
function handelClick(){
    alert("You Have click Me!");
};

button.addEventListener('click',handelClick)