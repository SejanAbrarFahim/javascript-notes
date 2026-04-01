// Javascript Class expressions
 // A class expression doesn't require an identifier after the class keyword. You can use a class expression in a variable declaration and pass it into a function as an argument.


 let person = class {
    constructor(name, email, pass){
        this.name = name;
        this.email = email;
        this.pass = pass;
    }
 }

 let about = new person("lorem","lorem23@gmail.com","019323213");
 console.log(about); // person { name: 'lorem', email: 'lorem23@gmail.com', pass: '019323213' }


 // First-Class citizen
   function factory(Aclass){
    return new Aclass()
   }

   let greeting = factory(class{
    sayHi(){
        console.log("Hello programmer");
    }
   });

   greeting.sayHi(); // Hello programmer