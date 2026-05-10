//  confirm() method

let deleteMe = document.querySelector("#deleteMe");
deleteMe.addEventListener("click",()=>{
    userConfirmation = confirm("Are you sure you want to delete the File ?");

    if(userConfirmation){
        alert("Item delete")
    }
    else{
        alert("Item not delete")
    }
})
