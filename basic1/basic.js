const num1Txt = document.getElementById("num1");
const num2Txt = document.getElementById("num2");
const resultTxt = document.getElementById("sum,dif");

let sum = 0;
let dif = 0;

function calculate() {
    if(!(num1Txt.value === "" || num2Txt.value === "")) {
        
        sum = parseInt(num1Txt.value) + parseInt(num2Txt.value);
        resultTxt.innerHTML = sum;
    }
    function calculate() {
        if(!(num1Txt.value === "" || num2Txt.value === "")) {
            
            dif = parseInt(num1Txt.value) - parseInt(num2Txt.value);
            resultTxt.innerHTML = dif;
        }
    }
}

function clearEntries() {
    num1Txt.value = "";
    num2Txt.value = ""
    resultTxt.innerHTML = "";
    sum = 0;
    dif = 0;
   
}
