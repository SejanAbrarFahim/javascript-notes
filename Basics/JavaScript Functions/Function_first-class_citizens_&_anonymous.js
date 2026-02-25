// JavaScript Functions are First-Class Citizens - 
  function get(a , b){
    return a + b ;
  }
  let sum =   get(20 , 30);

  console.log(sum) ; // 50
 


  function getOne(a , b){
    return a + b ;
  }
  let sumOne =   getOne ;

  console.log(sumOne(20 , 30)); // 50
  console.log(sumOne(104 , 120)); // 224


  
   // nested function 
     function One(a) {
       function Two(b) {
         function three(c){
            console.log( a + b + c);
         }
         three("founder ")
       }
       Two("co-founder ")
     }
     One("CEO ") // CEO co-founder founder


    // function as a parameter
     function add(a ,b){
      return a + b;
     }

     let total = add ;

     function math(a,b, sum){
        return sum(a,b) * 5;
     }

     let result = math(2,3, total);
     console.log(result); // 30





  // anonymous function
     (
      function(){
        console.log("anonymous function")
      }
     )() // anonymous function
  

     let y = function (a,b) {return a + b}        
     console.log(y(50,79)); // 129
     console.log(y(40,534)); // 574
