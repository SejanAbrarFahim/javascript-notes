const ScreenINfo = document.querySelector("#ScreenInfo");

// console.log(window.screen.width)
// console.log(window.screen.width)
// console.log(window.screen.availHeight)
// console.log(window.screen.availWidth)


const screenWidth = window.screen.width;
const screenHeight = window.screen.height;
const screenAvailWidth = window.screen.availWidth;
const screenAvailHeight = window.screen.availHeight;


ScreenINfo.innerHTML = `
<string>Screen width: ${screenWidth} px</string> <br>
<string>Screen width: ${screenHeight} px</string> <br>
<string>Screen width: ${screenAvailWidth} px</string> <br>
<string>Screen width: ${screenAvailHeight} px</string> <br>
`