// Universal Selector - "*" 

const query = document.querySelector("*");
console.log(query); // html

const queryAll = document.querySelectorAll("*")
console.log(queryAll); // NodeList(10)



// ElementName 

 const Query = document.querySelector("h1");
 console.log(Query) // <h1>Lorem, ipsum dolor.</h1>

 const QueryAll = document.querySelectorAll('h1');
 console.log(QueryAll); // NodeList(2)


 // Classname or id

 const QueryClass = document.querySelector(".H");
 console.log(QueryClass); // h1.H

 const queryid = document.querySelectorAll("#div");
 console.log(queryid); // NodeList[div#div]
