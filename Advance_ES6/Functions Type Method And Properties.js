// Function Type Method
   // what is this
     // In JavaScript the this keyword refers to an object.
     // The this keyword refers to different objects depending on how it is used.

 
  // Call() Method

  const person = {
    FullName: function(){
        return this.firstName + " " + this.lastName;
    }
  }

  const person1 = {
    firstName : "lorem",
    lastName : "Epsom",
  }

 const value = person.FullName.call(person1)
 console.log(value); // lorem Epsom
 


 // apply() Method

 const PersonOne = {
    FullName1: function(city,country){
        return this.firstName + " " + this.lastName + " " + city + " " + country;
    }
 }

 const personTwo = {
    firstName : "Loerm",
    lastName : "Dolor"
 }

 const Info = PersonOne.FullName1.apply(personTwo, ["dhaka","bangladesh"]);

 console.log(Info); // Loerm Dolor dhaka bangladesh


 // bind() Method
    const data = {
        firstName : "Hello",
        lastName : "world",
        display : function (){
            console.log(this.firstName + " " + this.lastName);
        }
    }
    let display = data.display.bind(data)
    setTimeout(display,3000); // Hello world