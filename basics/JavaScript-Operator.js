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
    let firstName = "lorem";
    let lastName = "max";
    let fullName = firstName + ' ' + lastName ;  //(+' ') space
    console.log(fullName);
   
    let x = "this is x later";
    x += " & the next later is y";
    console.log(x)
  
    // adding number and string
    let str = "this is lorem ";
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
  let math = 10 % 3 ;
  console.log(math);



//  Assignment operators (= , += , -+ etc)
// Assignment operators assign values to JavaScript variables. 

let a = 5 ;
    a += 10;
console.log(a)



// Unary operators  
/* 01. (+x) unary plus - convert a value into a number .
   02. (-x) unary Minus - convert a value into a number and negate it .
   03. (++x) Increment Operator - Add one to the value .
   04. (--x) Decrement operator - Subtract one from the value .
   05. (x++) increment operator - Add one to the value .
   06. (x--) decrement operator - Subtract one of the value.*/

 //    (+x)
   let xo = "10" ;
   let yo = +xo;
   console.log(yo);   //typeof = number 

 // (-x)
  let xn = 10 ;
  let yn = -xn ;
  console.log(yn);

 //  (++x) or (x++)
   let age = 20 ;
       ++age ;
    console.log(age);

 // (--x) or (x--)
  let weight = 62 ;
     --weight; 
  console.log(weight);




// Comparison operators (true or fals)
 /* 01. < - less than .   
    02. > - greater than .
    03. <= - less than or equal to .
    04. >= - greater than or equal to .
    05. != - not equal to .
    o6. = - equal.
 */
  
 //   (<)
   let ao = 10 ;
   let bo = 20 ;
   console.log(ao < bo);

 //   (>)
   let aob = 5 ;
   let boa = 20 ;
   console.log(aob > boa);

 // (<=)
   let bob = 5 ;
   let dbob = 5;
   console.log(dbob <= bob);

 // (>=)
   let dBob = 5;
   let BoB = 4 ;
   console.log(dBob >= BoB);

 // (!=)
   let got = 7 ;
   let GoT = 10 ;
   console.log(got != GoT);
  
 // (==)  or  (===)- check data type
   let type = 5;
   let typeA = 5;
   console.log(type == typeA);



//   logical operator (true or fals)
 /* 01. (!) logical NOT .
    02. (||) logical OR .
    03. (&&) logical AND. */

 // (!)
    let eligible = false ;
    let noteligble = true ;
    console.log(!eligible);
    console.log(!noteligble);

 // (||)
   let Or = true ;
   let ort = false ;
   console.log(Or || orf); //true

   let orF = false ;
   let orf = false ;
   console.log(orF || orf); //false

 // (&&)  
    let typeAn = true ;
    let typeBl = true ;
    console.log( typeAn && typeBl);



// exponentialion operator (**) - power

  let rasult1 = 10 ;
  let result2 = 2 ;
  console.log(rasult1 ** result2); 

 