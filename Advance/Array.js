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
     const userInfo = ["name", "pass" , "email"];
     console.log(userInfo.at(2)); // email 
     console.log(userInfo.at(0)); // name


  
 // The join() method alos joins all array elements into a string :
      const userId = ["name", "pass" , "email"];
      console.log(userId.join(" # "));



 // delete() method [warning! using delete() leaves undefined holes in the array] :
      const delInfo = ["name", "pass" , "email"];
       delete delInfo[1];
      console.log(delInfo); //[ 'name', <1 empty item>, 'email' ]



  // The concat() method creates a new array by merging (concatenating) existing array :
   const mainArray = [ 'name',  'email' ]; 
   const margingArray = ["pass"];
   const marge = mainArray.concat(margingArray);
   console.log(marge); // [ 'name', 'email', 'pass' ] 

   const margingArray2 = ["age"];
   const marge2 = marge.concat(margingArray2); // mainArray.concat(marginArray , marginArray2 ) ;
   console.log(marge2); 



  // The flat() method creates a new array with sub-array elements concatenated to a specifed depth .
   const item1 = [["text"] , ["card"] , ["topic"]];
   console.log(item1.flat()); // [ 'text', 'card', 'topic' ]

 

 // you can use splice() to remove elements without leaving "holes" in the array : 
   const items6 = ["lorem" , 12323, 1.673483 , "text" , true , false , null , 10];
   items6.splice(0,3);
   console.log(items6); //[ 'text', true, false, null , 10 ]
   console.log(items6)  //[ 'text', true, false, null , 10 ]


 // tospliced() method -
  /* The toSpliced() method adds and/or removes array elements. And the toSpliced() method returns a new array. toSpliced() method does not change the original array. toSpliced() method is the copying version of the splice() method */
   const items7 = ["lorem" , 12323, 1.673483 , "text" , true , false , null];
   const spliced = items7.toSpliced(0,5);
   console.log(spliced); //[ false, null ]
   console.log(items7); //["lorem" , 12323, 1.673483 , "text" , true , false , null];

