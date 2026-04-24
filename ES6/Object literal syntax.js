// Object literal syntax extensions in ES6
  // step 1
    function SayHI(userName,UserInfo){
        return {
            userName,
            UserInfo
        }
    }

    console.log(SayHI("lorem","Programmer")); // { userName: 'lorem', UserInfo: 'Programmer' }


  // step 2
    let Message = "Hi , programmer";
       userName = "lorem";

    const info = {
        Message,
        userName
    }

    console.log(info); // { Message: 'Hi , programmer', userName: 'lorem' }

   
  // step 3
     let name = "lorem"
     let Info = {
        [name] : "He is a Programmer"
      }

     console.log(Info); // { lorem: 'He is a Programmer' }
     console.log(name); // lorem
     console.log(Info["lorem"]); // He is a Programmer


  // step 4
     let server = {
        namer : "server One",
        restart(){
            console.log("This is concise Method, and it's working perfectly");
        }
     }

     console.log(server.restart()); // This is concise Method, and it's working perfectly



     let serverTwo = {
        namer : "server two",
        "restart"(){
            console.log("This is concise Method");
        }
     }


     console.log(serverTwo["restart"]()); // This is concise Method
