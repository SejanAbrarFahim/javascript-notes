// JavaScript String Methods -

 // JavaScript String charAt()
   // The charAt() method returns the character at a specified index (position) in a string:
   let text = "junior programmers";
   console.log(text.charAt(3)); // i

   let group = "science";
   console.log(group.charAt(0)); // s

 

 // JavaScript String concat()
   // concat() joins two or more strings:  
   let text1 = "hello" ;
   let text2 = "programmers" ;
   let text3 = "what's up" ;
   console.log(text1.concat(" " , text2 )); // hello programmers
   console.log(text1.concat(" " , text2 , " " , text3)); // hello programmers what's up



 // JavaScript String indexOf() 
   /* 01. The indexOf() method returns the position of the first occurrence of a value in a string.
      02. The indexOf() method returns -1 if the value is not found.
      03.   The indexOf() method is case sensitive. */

    let type1 = "Hello world, welcome to the universe";
    console.log(type1.indexOf("welcome")); // 13

    let type2 = "Hello world, welcome to the universe";
    console.log(type2.indexOf("world")); // 6



 // JavaScript String Length 
   // The length property returns the length of a string:
    
   let type3 = "Hello world" ;
   console.log(type3.length) ; // 11


 
 // JavaScript String repeat() 
   /* 01. The repeat() method returns a string with a number of copies of a string.
      02. The repeat() method returns a new string.
      03. The repeat() method does not change the original string. */

     let repeat1 = "Please subscribe " ;
     console.log(repeat1.repeat(2)); // Please subscribe Please subscrib


 
 // JavaScript String replace()
   /* 01. The replace() method searches a string for a value or a regular expression.
      02. The replace() method returns a new string with the value(s) replaced.
      03. The replace() method does not change the original string. */

    let replace1 = "Hello bro" ;
    console.log(replace1.replace("bro", "world")); // Hello Wrold



 // JavaScript String toLowerCase() 

   let text5 = "Hello world" ;
   console.log(text5.toLowerCase());



 // JavaScript String toUpperCase()

   let text4 = "hello world" ;
   console.log(text4.toUpperCase());
   