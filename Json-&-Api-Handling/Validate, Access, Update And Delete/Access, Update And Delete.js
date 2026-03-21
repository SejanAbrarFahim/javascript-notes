// Access

const data = require("./Data.json");
console.log(data);
/*

{
  Userinfo: [
    { userName: 'Sejan', UserName: 'sejan', Gender: 'Male' },
    { address: 'Dhaka,Bangladesh', city: 'Bangladesh' },
    { company: 'Next Level dev' }
  ],
  ComapnyInfo: { name: 'hp', YearlyRevenue: '500k' }
}
*/


console.log(data.Userinfo);
/*
[
  { userName: 'Sejan', UserName: 'sejan', Gender: 'Male' },
  { address: 'Dhaka,Bangladesh', city: 'Bangladesh' },
  { company: 'Next Level dev' }
]
*/
 

 console.log(data.Userinfo[1]); // { address: 'Dhaka,Bangladesh', city: 'Bangladesh' }

 console.log(data.Userinfo[1].city); //Bangladesh




// value update
 
  const update = data.ComapnyInfo.name = "Hello programmer";
  console.log(update); // Hello programmer
  
  const FullUpdate = data.ComapnyInfo = [1,2,3,4];
  console.log(FullUpdate);// [ 1, 2, 3, 4 ]



// delete data
 delete data.Userinfo

 console.log(data); // { ComapnyInfo: [ 1, 2, 3, 4 ] }
