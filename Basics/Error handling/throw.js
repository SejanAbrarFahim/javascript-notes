// Javascript throw statement
  // The throw statement allows you to throw an exception. Here's the syntax of the throw statement: 
  // throw experssion

  function Myfun() {
    let x = document.getElementById("demo").value;
    let message = document.getElementById("ptag");

    try{
        if(x.trim() == "") throw "Input filed is Empty";
        else if(x < 5) throw "Input is too low";
        else if(x > 10) throw "Input is too high";
        else{
            throw "Everything is okay";
        }
    }

    catch(err){
        message.innerHTML = err;
    }
  }


   // link with index.html