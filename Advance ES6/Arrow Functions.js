// JavaScript Arrow function
 
   let arrowFun = (a,b) => a + b;
   console.log(arrowFun(50,60)); // 110


   let Arrow = (b,c) => {
    return c- b;
   }

   console.log(Arrow(40,10)); // -20 


//    Function properties
   /* Each function has two important properties: length and prototype .
     # The length property determined the number of named arguments specified in the function declaration .
     # The prototype property references the actual function object. */
 

    
      function add (x,y){
        return x + y ;
      }

      console.log(add.length);  // 2

      let ArrowF = (x,y,z,a,b) =>{
          return x+y+z+a+b;
      }

      console.log(ArrowF.length); // 5
      console.log(ArrowF.prototype); // object{}

       
      

