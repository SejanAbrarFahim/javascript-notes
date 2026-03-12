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


 function Rest(a,b,c,...argo){
  console.log(a,b,c,argo)
 }
  
Rest(1,23,342,2342,23423,2,3,4,4,); //1 23 342 [ 2342, 23423, 2, 3, 4, 4 ]





// spread operator 
  /* 01. Constructing array literal -
         The spread operator allows you to insert another array into the initialized array when you construct an array using the literal form. 
     02. Concatenating array -
         Also, you can use the spread operator to concatenate two or more arrays.
     03. Copying an array.
         In addition, you can copy an array instance by using the spread operator.
  */

  // 01. Construct
     let valueOne = [1,2,3];
     let valueTwo = [...valueOne,6,7,8]; 
     console.log(valueTwo);  // [ 1, 2, 3, 6, 7, 8 ]

    
  // 02. Concatenating

     let teacher = ["teacher1","teacher2","teacher3"];
     let supportTeam =["support1","support2"]
     let programmer = [...teacher,...supportTeam];
     console.log(programmer); // [ 'teacher1', 'teacher2', 'teacher3', 'support1', 'support2' ]
     


  // copying
     let score = [80,90,100];
     let worldCup = [...score];
     console.log(worldCup);
    
     let country = ["Bangladesh","Japan","China"];
     let fabC = [...country];
     console.log(fabC);