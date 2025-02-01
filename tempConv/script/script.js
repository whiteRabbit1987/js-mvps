//Temperature Converter

const inputBox = document.getElementById('inputBox');
const toFaren = document.getElementById('toFaren');
const toCel = document.getElementById('toCel');
const converted = document.getElementById('converted');
let temp;

function convert(){
    if(toFaren.checked){
        temp = Number(inputBox.value);
        temp = temp * 9 / 5 + 32;
        converted.textContent = temp.toFixed(1) + 'F';
    }
    else if(toCel.checked){
        temp = Number(inputBox.value);
        temp = (temp - 32) * (5/9);
        converted.textContent = temp.toFixed(1) + 'C';
    }
    else {
        converted.textContent = "Select a temperature unit!"
    }
}
