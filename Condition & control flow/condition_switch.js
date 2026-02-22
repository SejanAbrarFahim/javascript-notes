// JavaScript switch case
   /* the (switch) statement evaluates an expression, compares its results with case values, and executes the statement associated with the matching case value . */

   let day = 3;
   let dayName;

   switch (day) {
    case 1:
       console.log("saturday");
       break;
    case 2:
        console.log("sunday");
        break;
    case 3:
         console.log("Monday");
         break;
    case 4:
        console.log("tuesday");
        break;
    case 5:
        console.log("wednesday");
        break;
    case 6:
        console.log("thursday");
        break;
    case 7: 
        console.log("friday")
        break;
    
    default:
        dayName = "invalid day name"
   };
   
   console.log(dayName); // Monday
                         // undefined

   