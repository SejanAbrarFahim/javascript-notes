// JavaScript String Templates .
   /* 01. Template Strings use back-ticks (``) rather than the quotes ("") to define a string .
      02. Template Strings allow both single and double quotes inside a string .
      03. Template Strings allow multiline strings . */

  let text = `loerm `;
  console.log(text); // lorem

  let text1 = `Hello "programmer"`;
  console.log(text1); // Hello "programmer"

  let text2 = `Hello programmer 
  "what's up"`;
  console.log(text2); /* Hello programmer
                       "What's up" */

  let firstName = "lorem";
  let lastName = "epsom";
  console.log(`my name is ${firstName} ${lastName}`); // my name is lorem  epsom


  let sum = 20 ; 
  let sum1 = 30;
  console.log(`This is javascript expressions: ${sum + sum1}`); // This is javascript expressions: 50