 // Pass-by-value  - In javaScript, all function arguments are always passed by value. It means that javaScript copies the value of the variables into the function arguments.
   function square(x){
     x = x * x;
     return x;
   }

   let y = 10 ;
   let result = square(y);
   console.log(result); // 100
   console.log(y); // 10


   function lorem(i){
    i = i * i ;
    return i;
   }

   let j = 50 ;
   let Math = lorem(j);
   console.log(Math); //2500


  // pass-by-value of referance values
    let person = {
        name : "Firstname",
        age : 21 
    };

    function Increase(a){
        a.age = a.age + 1
    }

    Increase(person)

    console.log(person) // { name: 'Firstname', age: 22 }
    