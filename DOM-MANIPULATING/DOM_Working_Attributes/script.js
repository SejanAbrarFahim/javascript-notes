// Attributes
  
  //getAttribute() - To get the value of an attribute on a specified element, you call the getAttribute() method .

  const data = document.querySelector("#js");
  let acc =  data.getAttribute("target")
  console.log(acc) // _blank


  // setAttribute() - To set the valueof an attribute on a specified element, you use the setAttribute() method.
  
  let set = data.setAttribute("class","JavaScript");
   //<button href="https://www.javascriptturorial.net" target="_blank" id="js" class="JavaScript">JavaScript Tutorial</button>

   data.setAttribute("disabled"," ");
    console.log(data);


  // removeAttribute() - The removeAttribute() method removes an attribute with a specified name from an element.