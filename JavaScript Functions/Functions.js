 // JavaScript Functions
   // What are Functions? 
     /* 01. Functions are reusable code blocks designed for particular tasks .
        02. Functions are executed when they are called or invoked .
        03. Functions are fundamental in all programming languages . */

    
      function functionNames(a,b,c){
         console.log(a,b,c)          
      }

      functionNames( 5 ,  6, 5-7);
         // 5 6 -1
      



     // Returning a value
       function add(one , two){
          return one + two      
       }

       let fun = add("founder " ,"co-founder")
       console.log(fun); // founder co-founder




     // Function Hoisting
       // in javascript , you can use a function before declaring it.
        
       FunOne( "one " , "two");
       
       function FunOne(a , b){
        console.log(a,b);
       } // one  two
       
