// JavaScript switch case
   /* the (switch) statement evaluates an expression, compares its results with case values, and executes the statement associated with the matching case value . */

   let day = 3;
   let dayName;

   switch (day) {
    case 1:
       dayName = ("saturday");
       break;
    case 2:
        dayName = ("sunday");
        break;
    case 3:
         dayName = ("Monday");
         break;
    case 4:
        dayName = ("tuesday");
        break;
    case 5:
        dayName = ("wednesday");
        break;
    case 6:
        dayName = ("thursday");
        break;
    case 7: 
       dayName = ("friday")
        break;
    
    default:
        dayName = "invalid day name"
   };
   
   console.log(dayName); // Monday
                       

   