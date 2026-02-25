//JavaScript Scope
  let say = "hi" // Global scpe

  function sayHi(){
    let sayhi = "message" ; // function Scope // block scope
  } 

  {
    let SayHello = "message sent"; // block scope
  }




  // global
  console.log(say); // hi


  
  // function / block
  console.log(sayhi) //ReferenceError: sayhi is not defined

 /* function sayHi(){
    let sayhi = "message" ; 
    console.log(sayhi)
  } 

  sayHi() // message  */