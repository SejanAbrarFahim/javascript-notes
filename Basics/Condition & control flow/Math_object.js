// Number to integer

 // Math.round(x) - Return x rounded to its nearest integer .
    let math = Math.round(4.4);
    console.log(math); // 4

    let math2 = Math.round(4.7);
    console.log(math2); // 5

    let Math3 = Math.round(4.5);
    console.log(Math3); // 5



  // Math.ceil(x) - Returns x rounded up to its nearest integer .
    let MathCeil = Math.ceil(3.2);
    console.log(MathCeil); // 4

    let mathCeil = Math.ceil(0.8);
    console.log(mathCeil); // 1



  // Math.floor(x) - Returns x rounded down to its nearest integer
     let mathFloor = Math.floor(5.6);
     console.log(mathFloor); //5

     let MathFloor = Math.floor(5.4);
     console.log(MathFloor); // 5



  // Math.trunc(x) - Returns the integer part of x (new in Ex6)
    let trunc = Math.trunc(1.9);
    console.log(trunc); // 1

    let Trunc = Math.trunc(-1.7);
    console.log(Trunc); // -1


  
  // Math.sign(x) - Returns if x is negative, null or positive (1 or 0 or -1)
    let sign = Math.sign(-4);
    console.log(sign); // -1
   
    let Sing = Math.sign(0);
    console.log(Sing);  // 0

    let number = Math.sign(2);
    console.log(number); //1


  //Math.pow(x,y) - Returns The valur of x to the power of y
     let Pow = Math.pow(5,2);
     console.log(Pow); //25
  

   
  // Math.sqrt(x) - Returns the square root of x
     let square = Math.sqrt(64);
     console.log(square); // 8
     
     let Square = Math.sqrt(55);
     console.log(Square); // 7.4262

   
     
  // Math.abs(x) - Returns the absolute (positiove) value of x
     let Absolute = Math.abs(-5.4);
     console.log(Absolute); //5.4



  // Math.min() , Math.max()  - Math.min() and Math.max() can be used to find the lowest or the highest value in a list of arguments

    let min = Math.min(1,2,3,4,5,6,7,8,9,-10);
    console.log(min); // -10

    let Max = Math.max(1,2,3,4,5,32,34,23,10);
    console.log(Max); // 35 

   
    
  // Math.random() - Returns a random Numberbetween 0 (inclusive) , and 1 (exclusive) .  

    let random = Math.random();
    console.log(random); // 0-1  (0.23479237478134, 0.347398273498347, 0.98348813748198347)

    
