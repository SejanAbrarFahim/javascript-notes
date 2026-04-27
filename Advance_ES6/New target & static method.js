// Javascript new.target
    function person(name){
        if(!new.target){
            throw "Must use new operator with this person function";
        }
        this.name = name;
    }
    let MyPerson = new person("lorem")
    console.log(MyPerson); // person { name: 'lorem' }



// JavaScript static Method
   // You cannot call a static method on an object, only on an object class.

   class User {
   static createGuest() {
     return { name: "Guest", role: "guest" };
   }
 }

  const guest = User.createGuest();
  console.log(guest); // { name: 'Guest', role: 'guest' }