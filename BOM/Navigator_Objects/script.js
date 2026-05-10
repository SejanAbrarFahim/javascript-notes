// Navigator

// console.log(navigator.appName) Netscape
// console.log(navigator.appVersion) (Windows NT 10.0; Win64; x64)
// console.log(navigator.platform) Win32
// console.log(navigator.language) en-US
// console.log(navigator.userAgent) Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/147.0.0.0 Safari/537.36
// console.log(navigator.onLine) online = true ; offline = false

if(navigator.onLine){
    alert("you are online");
}

else{
    alert("You are offline")
}