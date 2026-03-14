// Javascript Computed Property
 // ES6 allows you to use an expression in brackets []. it'll then use the result of the expression as the property name of an object .

  let PropName = 'c';

  const rank = {
    a:1,
    b:2,
    [PropName]:24,
  };
  console.log(rank.c); // 24


  let Info = "Name";

  const person = {
    [Info] : "lorem",
    age : 20 ,
    prof : "programmer",
  }

  console.log(person); // { Name: 'lorem', age: 20, prof: 'programmer' }