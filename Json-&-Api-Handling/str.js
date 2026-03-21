 const userName = {
    userName: "person",
    phone: "01232321",
    country: "Bangladesh"
 }

 console.log(typeof userName); // object

 // stringify ()
  
 const str = JSON.stringify(userName);
 console.log(str); // {"userName":"person","phone":"01232321","country":"Bangladesh"}

 console.log(typeof str); // string

