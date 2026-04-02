// textContent
  // The textContent property sets or returns the text content of the specified node , and all its descendants.
     /* the textContent property returns:
        The text content of the element and all element and all descendence , with spacing and css hidden text, but without tag. */

// innerHtml
  // the innerHtml property sets or returns the HTML content (inner HTML) of an element.
   /* the innerHTML property returns:
      The text content of the element, including all spacing ang inner HTML tags. */

// innerText
  // the innerText property sets or returns the text content of an element.
    /* the innerText property returns:
      just the text content of the element anf all its children, without css hidden text spacing and tags, except <script> and <style> */

  

  const data = document.getElementById("myP");
  console.log(data.innerHTML);// This element has extra spacing and contains <span>a span element.</span>.

  console.log(data.innerText); // This element has extra spacing and contains a span element..

  console.log(data.textContent); //    This element has extra spacing and contains a span element..