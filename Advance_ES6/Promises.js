// Java Script Promises
   let message = true;

   let myPromise = new Promise((resolve,reject)=>{
    if(message){
        resolve([
            {UserName: "sejan" , age:18 , prof:"programmer", country:"BD"},
            {UserName:"Abrar",age:18,prof:"programmer",country:"Bd"}
        ])
    }
    else{
        reject("You are not Bangladeshi, So get Out from here")
    }
   })

   myPromise.then((success)=>{
    console.log(success)
   })

   myPromise.catch((Error)=>{
    console.log(Error)
   })