// Array  iteration 
 /* Array forEach   
    Array map()
    Array flatMap()
    Array filter()
    Array reduce()
    Array reduceRight()
    Array every()
    Array some()
    Array from()
    Array keys()
    Array entries()
    Array with() */



 // Array forEach - The forEach() method calls a function for each element in an array. The forEach() method is not executed for empty elements.
   const Name = ["Harun" , "Tutul" ,"Rohim" , "korim"]
  
   Name.forEach(companyInfo)

   function companyInfo(value , index, itSelf){
        console.log(value + " " + index  )
   }
   /* Harun 0
      Tutul 1
      Rohim 2
      korim 3 */



 //.map() = accepts a callback and applies that function to each element of an array , then return a new array -
   const Number = [1 , 2 , 3 , 4 , 5];
   let number3 = Number.map(function(value){
      return  value * 3 ;
   });
   console.log(number3); // [ 3, 6, 9, 12, 15 ]
  

   const number1 = [1,2,3,4];
   const result = number1.map(function(num) {
     return num * 2 ;
   });
   console.log(result); // [ 2, 4, 6, 8 ]
   

    const number2 = [1,2,3,4];
   const result1 = number2.map(function(num1) {
     return num1 * 3 ;
   }); // [ 3, 6, 9, 12 ]

   console.log(result1)
     


 // FlatMap() - The flatMap() method maps all array elements and creates a new flat array. flatMap() creates a new array from calling a function for every array element. flatMap() does not execute the function for empty elements. flatMap() does not change the original array.
  const MyArr = [1,2,3,4,5,6];
  const newArr = MyArr.flatMap((x) => x * 2);
  console.log(newArr); // [ 2, 4, 6, 8, 10, 12 ]


  
  // .filter() - The filter() method creates a new array filled with elements that pass a test provided by a function. The filter() method does not execute the function for empty elements. The filter() method does not change the original array.

  let MyFilter = [1 , 2, 3 , 4 , 5 , 6 , 7 , 8 , 9 , 10];
  const Fresh = MyFilter.filter(filterFun)

  function filterFun(value){
      return value > 5
  }

  console.log(Fresh); // [ 6, 7, 8, 9, 10 ]



