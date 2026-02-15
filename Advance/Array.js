 // Array is a special variable , which can hold more than one value .

   const items = ["toy", "car" , "bike"];
   console.log(items);  //console.log(typeof items); - object


   const items1 = ["lorem" , 12323, 1.673483 , "text" , true , false , null];
   let items2 = items1[4] 
   console.log(items2); // true 
   // or
   console.log(items1[3]); // text

   const items3 = ["lorem" , 12323, 1.673483 , "text" , true , false , null] ;
   console.log(items3.length); // 7




  // To remove en element from the beginning of an array, you use the shift() method : 
   const items4 = ["lorem" , 12323, 1.673483 , "text" , true , false , null];
    items4.shift();
   console.log(items4);



 // To remove an element of the end of an array, you use the pop() mathod :
    const items5 = [111,222,333,444,555]
    items5.pop();
    console.log(items5);



 // To add an element to the beginning of an array , you use the unshift() method :
   const text = [1232,2323,34343,3423];
   text.unshift("text100");
   console.log(text);



 // To add an element to the end of an array , you use the push() method :
    const list = ["text1" , "text2" , "text3"];
    list.push("text4");
    console.log(list);




 // To find the index of an element, you use the indexof() method :
     const list1 = ["text1" , 473274 , "text3"];
     console.log(list1.indexOf(473274)); // 1



 // To check if a value is an array , you use Array.iArray() mathod :  [true/ fals]
     const list3 = ["text1" , 473274 , "text3"];
     console.log(Array.isArray(list3));  //true



  // The javacript method tostring() convert an array to a string of (comma separated) array valuse .
     const myInfo = ["fahimi" , 20 ,"017342374" , "tangail"];
     console.log(myInfo.toString())  // data type string 

    
 
 // The at() method returns an indexed element from an array. at() method returns the same as [].

 