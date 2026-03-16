// Javascript get Method
  const fruits = new Map(
   [ 
    ["Apples", 500],
    ["Banana",300],
    ["Oranges",100]
   ]
  )

  let info = fruits.get("Apples");
  console.log("Today Apple's  price in dhaka - " + info + " tk"); // Today apples price in dhaka - 500
  


// Set Method
   const TeamInfo = new Map();
   TeamInfo.set("CEO","Sejan");
   TeamInfo.set("TeamLeader","Sejan");
   TeamInfo.set("TeamMembers",8);
   
   console.log(TeamInfo); /* Map(3) {
                            'CEO' => 'Sejan',
                            'TeamLeader' => 'Sejan',
                            'TeamMembers' => 8
                            } */

    console.log(TeamInfo.get("TeamMembers")); // 8

    

// Map.size Method 
    console.log(TeamInfo.size); // 3