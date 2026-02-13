/* js Objects are variables that can store both values and functions.
  Values are stored as key:value pairs called properties.
  Functions are stored as key:function() pairs called methods. */

const car = {
   type : "fiat",
   model: "500",
   color: "white"
}

console.log(car);


const person = {
    firstName: "John",
    lastName: "leo",
    age: 50 ,
    eyeColor: "blue" 
};

console.log(person["firstName"]);



const cat = {
    name: "cat1",
    color: "black",
    weight: 3 
};

console.log(cat.color)



// Modifing the balue of property 
const man = {
    firstName:"name",
    lastName:"man",
    age:20,
};

man.lastName = "man1" ;
man.age = 22 ;

console.log(man)


// Adding a new property in object

const blackMan = {
   firstName: "black",
   lastName: "man" ,
   age: 45
};

blackMan.fColor = "red";
blackMan.fFood = "rice";
console.log(blackMan);



// Deleting property in object

const whiteMan ={
    firstName: "white",
    lastName: "man" ,
    age:45,
    fColor: "gray"
};

delete whiteMan.fColor

console.log(whiteMan);



// Checking if a property exist

const BadMan ={
    firstName: "white",
    lastName: "man" ,
    age:45,
    fColor: "red"
};

console.log("age" in BadMan);
console.log("fFood" in BadMan);



