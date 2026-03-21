// Fetch
/*
let data = fetch("Hello.json");

data.then((resp) => {
    return resp.json()
}).then((read) => {
    console.log(read) // console.log(read[0].name)
})

*/

// async
  async function data() {
      const response = await fetch("./Hello.json");
      const names = await response.json();
      console.log(names)
  }
  
  data()