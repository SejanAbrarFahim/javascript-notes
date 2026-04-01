// Getter

const person = {
    firstName : "lorem",
    age : 24,
    prof : "programmer",
    get pro(){
        return this.prof;
    }
}

console.log(person.prof); // programmer

console.log(person.pro); // programmer


// setter
   const user = {
    userName : "lorem programmer",
    prof : "Programmer",
    Business: "EdTech Business",
    set newSet(newBusiness){
        this.Business =  newBusiness
    }
   }

    user.newSet = "UI/Ux designer";

    console.log(user)
   
/*
 {
  userName: 'lorem programmer',
  prof: 'Programmer',
  Business: 'UI/Ux designer',
  newSet: [Setter]
}
  */