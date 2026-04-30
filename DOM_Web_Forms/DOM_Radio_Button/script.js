const btn = document.querySelector("#btn"); // button selected

const radioButton = document.querySelectorAll("input[type='radio']"); // input filed

const output = document.querySelector("#output")

btn.addEventListener("click",()=>{
    let selectedLanguage;

    for(const radioBtn of radioButton){
        if(radioBtn.checked){
            selectedLanguage = radioBtn.value;
            break;
        }
    }

    output.textContent = selectedLanguage ;
});

