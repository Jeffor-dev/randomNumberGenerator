const minValue = document.getElementById("min");
const maxValue = document.getElementById("max");
const resul = document.getElementById("resul");

function generate() {
    let v1 = minValue.value
    let v2 = maxValue.value
    resul.value = randomNumber(v1,v2)
    
}

function randomNumber(min, max) { 
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
} 