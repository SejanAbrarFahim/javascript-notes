// JavaScript variables are containers for data.

// Older JavaScript
var x;
x = 6;
console.log(x) ;

// Modern JavaScript

/* Variables defined with const cannot be Redeclared ,
  Variables defined with const cannot be Reassigned ,
  Variables defined with const have Block Scope .
*/ 

const z = 7 ;
console.log(z);

 {
    const Number = 1234 ;
    console.log(Number)
 }


/* Variables declared with let have Block Scope ,
  Variables declared with let must be Declared before use ,
  Variables declared with let cannot be Redeclared in the same scope .
*/

let y = 7;
console.log(y);

{
    let Text = "hello world";
    console.log(Text)
}