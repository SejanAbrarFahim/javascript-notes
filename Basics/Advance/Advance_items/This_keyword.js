// Javascript this keyword
   // In JavaScript, the this keyword refers to an object.
   /* 01. Alone, this refers to the global object.
      02. In a function, this refers to the global object.
      03. In a function, in strict mode, this is undefined.
      04. In an object method, this refers to the object.
      05. In an event, this refers to the element that received the event.
      06. In methods like call(), apply() and bind(), this can refer to any object. */
      "use strict"
      const person= {
        FirstName: "Eshan",
        LastName: "Ahad",
        fullName: function () {
            return this.FirstName +" " + this.LastName
        }
      }
      
      console.log(person.fullName()); // Eshan Ahad
      

      
      //global obj 
      console.log(this) // {}
      console.log(typeof this) // object

      function sayHi(){
        console.log(typeof this)
      }

      sayHi() // object   ["use strict" - undefined]