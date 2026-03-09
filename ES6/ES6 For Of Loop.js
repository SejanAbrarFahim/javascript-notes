// JavaScript for of loop
 let score = [10,20,30];

 for(let store of score){
    console.log(store)
 }; /* 10
       20 
       30 */



 // object destructuring
    const ratings = [
        {user: "one",score:2},
        {user: "two",score:4},
        {user: "three",score:10},
    ];
    let sum = 0;
    for (const {score} of ratings){
        sum += score;
    }

    console.log(`total scores: ${sum}`); // total scores: 16




 // Iterating over strings
   let str = "Hi";
   for (let string of str){
    console.log(string);
   };  /*  H
           i */