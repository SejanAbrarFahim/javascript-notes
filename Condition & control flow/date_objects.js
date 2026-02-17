// js Date object

 // Date objects are created with the new Date() constructor.

   let Mydate = new Date();
   console.log(Mydate); // 2026-02-17T16:11:15.203Z 



// Formating
   let A = new Date("2026-02-7");
   console.log(A); // 2026-02-11T00:00:00.000Z



 // Get Date method
    let myDate = new Date();
    console.log(myDate.getFullYear()); // 2026
    // or
    /* let currentDate = myDate.getFullYear()
       console.log(currnetDate); */

    console.log(myDate.getDate()); // 17 - date

    console.log(myDate.getHours()); // 22 - Hours

    console.log(myDate.getSeconds()); // 37 - seconds

    console.log(myDate.getMonth()) ; // 1 - month (Counting begins at 0)

    console.log(myDate.getDay()); // 2 - weekday (counting begins at 0)

    console.log(myDate.getMinutes()); // 37 - minutes 

    console.log(myDate.getMilliseconds()); // 157

    

  

// Set Date Methods
  // set Year
   let mySetDate = new Date();
    myDate.setFullYear(2022,17,2);
    console.log(mySetDate); // 2026-02-17T16:48:51.615Z


   // set Hours 
    let h = new Date();
    h.setHours(4,0,0,0,0);
    console.log(h); // 2026-02-16T22:00:00.000Z - UTC 

   // set Month
     let M = new Date();
     M.setMonth(9);
     console.log(M);  // 2026-10-17T16:53:09.497Z

    
   // set minutes 
     let Minutes = new Date();
     Minutes.setMinutes(50);
     console.log(Minutes); // 2026-02-17T16:50:52.079Z

   // set milliseconds 
     let milliseconds = new Date();
     milliseconds.setMilliseconds(508);
     console.log(milliseconds); // 2026-02-17T16:57:17.508Z

   // set seconds
      let seconds = new Date();
      seconds.setSeconds(57);
      console.log(seconds); // 2026-02-17T16:58:57.719Z

   
