// JavaScript Destructuring

// The destructuring assignment syntax can unpack objects into variables:
 
// object Destructuring
   const Person = {
    FirstName : "Lorem",
    LastName : "Epsom",
    age : 35
   }

   let {FirstName , LastName} = Person; // Destructuring

   console.log(FirstName); // Lorem
   console.log(LastName); // Epsom

 

   const PersonOne = {
    FirstName : "Lorem",
    LastName : "Epsom",
    age : 35
   }

   let {firstName , lastName , prof ="Programmer"} = PersonOne;
   console.log(prof); // Programmer




 // string Destructuring
   let str = "Welcome To the programming world";
   let [a,b,c,d,e,f] = str;
   console.log(a); // W 
   console.log(c); // l



 // Array destructuring 
   let fruits = ["Apples", "Banana" , "Mango"];
   let[fruits1, fruits2 , fruits3] = fruits;
   console.log(fruits1); // Apples
   console.log(fruits3); // Mango