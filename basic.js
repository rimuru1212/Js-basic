const num1Txt = document.getElementById("num1");
const num2Txt = document.getElementById("num2");
const resultTxt = document.getElementById("sum");

function GenerateFullname() {
    resultTxt.innerHTML = num1Txt.value + " " + num2Txt.value +" " + numn3Txt.value;
}

function clearEntries() {
    num1Txt.value = "";
    num2Txt.value = ""
    resultTxt.innerHTML = "";
}