// IIFE - immediately invoked function expression
  (function(a,b){
    return console.log(a + b)
  }) (20,30); // 50


 let sum = ((a,b,c) => {
     return console.log(a * b * c)
  })(10 , 20 , 3) ; // 600




// Call Back function
   function Displayer(UserData){
    console.log(UserData)
   }

   function UserData(firstName,lastName,prof,age){
    firstName;
    lastName;
    prof;
    age;

    let info = firstName +" " + lastName + ", " + prof + " " + age;
    return info
   }

   let MyInfo = UserData("lorem","Epson","programmer","20");
   
   Displayer(MyInfo); // lorem Epson, programmer 20