const text = '{"name":"Lorem","country":"Dhaka"}';

console.log(text); //{"name":"Lorem","country":"Dhaka"}
console.log(typeof text); // string



 // JSON.Parse() -
const textOne = '{"name":"Lorem","country":"Dhaka"}';
const obj = JSON.parse(textOne);

console.log(obj); // { name: 'Lorem', country: 'Dhaka' }
console.log(typeof obj); // object