// Javascript Map Method
  const fruits = new Map(
   [ 
    ["Apples", 500],
    ["Banana",300],
    ["Oranges",100]
   ]
  )

  let info = fruits.get("Apples");
  console.log("Today apples price in dhaka - " + info); // Today apples price in dhaka - 500