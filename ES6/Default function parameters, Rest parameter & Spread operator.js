// Default  function Parameters
  function say(message = "hello programmer"){
    console.log(message)
  };

  say(); // hello programmer




// Rest parameter
 function number(a,b,c,d){
   console.log(a,b,c,d);
 };

 number(2,3,4,5,5); // 2 3 4 5


 function Rest(a,b,c,...argu){
  console.log(a,b,c,argu)
 }
  
Rest(1,23,342,2342,23423,2,3,4,4,); //1 23 342 [ 2342, 23423, 2, 3, 4, 4 ]



