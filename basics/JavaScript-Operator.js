"use strict"

// Operators are for Mathematical and Logical Computations

// Arithmetic operators
// Arithmetic operators perform arithmetic on numbers (literals or variables).



// Addition operator (+)
let sum = 10 + 20 ;
console.log(sum)


let price = 120 ,
    deliveryCharg = 10 ;

const totalPrice = price + deliveryCharg ;

console.log(totalPrice);

    //   The + can also be use to add  strings:
    let firstName = "hunter";
    let lastName = "max";
    let fullName = firstName + ' ' + lastName ;  //(+' ') space
    console.log(fullName);
   
    let x = "this is x later";
    x += " & the next later is y";
    console.log(x)
  
    // adding number and string
    let str = "this is hunter ";
    let num = 100 ;
    let sumS = str + num ;
    console.log( sumS);   // console.log(typeof sumS); = string


// Subtraction operator (-)
let sub = 50 - 40 ;
console.log(sub);


let product = 100 ;
let discoutPrice = 40 ;

     // console.log(product - discoutPrice); or
let total = product - discoutPrice ;

console.log("total product price: " + total);




// 	Multiplication operators (*)
 let mult = 5 * 10 ;
 console.log(mult);



//	Division operators (/)
let result = 50 / 2 ;
console.log(result);




// Modulus (Remainder) operators (%)