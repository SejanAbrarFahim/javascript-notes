// Javascript class super
  // super()
  
  class car{
     constructor(Brand){
      this.Brand = Brand;
     }
     parent(){
      return "My car brand name is " + this.Brand
     }
  }

  class Model extends car{
    constructor(Brand,Model){
      super(Brand);
      this.Model = Model;
    }
    show(){
      return this.parent() + " And model is " + this.Model;
    }
  }

  let myCar = new Model("Toyta","GT86");
  console.log(myCar); // Model { Brand: 'Toyta', Model: 'GT86' }

  console.log(myCar.show()); // My car brand name is Toyta And model isGT86

  console.log(myCar.parent()); // My car brand name is Toyta