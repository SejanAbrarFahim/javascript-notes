// JavaScript Classes
  class person{
    constructor(name,prof,age,gender,homeTown){
        this.name = name;
        this.prof = prof;
        this.age = age;
        this.gender = gender;
        this.homeTown = homeTown;
    }
  }

  const storing = new person("lorem","programmer","20","male","tangail");
  const storingOne = new person("Loerm","Programmer","30","Male","Dhaka");
  console.log(storing);
  console.log(storingOne);
  /*
person {
  name: 'lorem',
  prof: 'programmer',
  age: '20',
  gender: 'male',
  homeTown: 'tangail'
}
person {
  name: 'Loerm',
  prof: 'Programmer',
  age: '30',
  gender: 'Male',
  homeTown: 'Dhaka'
}
  */