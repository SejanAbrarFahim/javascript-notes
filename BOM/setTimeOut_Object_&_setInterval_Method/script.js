// setTimeout()

function greeting(){
    alert("Hey , Welcome to our website")
}

setTimeout(greeting,2000)


// setInterval()

let counter = 0 ;
function counterUp(){
    counter ++ ;
    console.log(counter)
}

setInterval(counterUp, 2000)