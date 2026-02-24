// Recursion in JavaScript
  function Hello(number){
     if(number === 0) return;
     console.log(number)
     Hello(number - 1)
  }

  Hello(4); /* 4
               3
               2
               1 */