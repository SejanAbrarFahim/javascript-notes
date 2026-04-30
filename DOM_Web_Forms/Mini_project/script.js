const Frame = document.querySelector("#framework");
const BtnAdd = document.querySelector("#btn");

const list = document.querySelector("#list");
const btnRemove = document.querySelector("#btnremove");


BtnAdd.addEventListener("click",(event)=>{
    event.preventDefault()

    if(Frame.value == ""){
        alert("input filed is empty");

        return;
       }

    const option  = new Option(Frame.value, Frame.value);
    
    list.add(option,undefined);

    
    Frame.value = "";
    
    
})

btnRemove.addEventListener("click",(e)=>{
    e.preventDefault();
   
     // save the selected option
    let selected =[];

    for (let i = 0 ; i <list.options.length; i++){
        selected[i] = list.options[i].selected;
    }

    let index = list.options.length;

    while (index--){
        if(selected[index]){
            list.remove(index)
        }
    }
})