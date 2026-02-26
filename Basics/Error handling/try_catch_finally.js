// The try Statement
  // In JavaScript, the try statement is used to handle errors (also called exceptions) that may occur during code execution - without stopping the entire program.

 /* let result = add(10 , 20);
  console.log(result); // ReferenceError: add is not defined */

  console.log("Hello");
  
  try{
    console.log("hello world");
 }

 catch{
    let result = add(10 , 20);
  console.log(result); 
 }

 finally{
    console.log("please subscribe");
 } ; // Hello
    // hello world
    // please subscribe
    