// JavaScript For In
  /* The for...in loop iterates over the enumerable properties of an object.
  The for...in loop is primarily used for objects to access their property names (keys). */
   
  // for (key in object) {  // code block to be executed }
   const student = {
    name : "Rohim",
    age : 20,
    city : "Dhaka"
   };

   for (let key in student) {
    console.log(key);
    console.log(student[key]);
   } /* name
        Rohim
        age
        20
        city
        Dhaka */

 


    const Person = {
        name : "korim",
        age : 22,
        city : "Dhaka"
    }

    let storage = "";
    for(let prop in Person){
        storage += Person[prop] + "\n"
    };
    console.log(storage); /* korim
                             22
                             Dhaka */

    

    
    




