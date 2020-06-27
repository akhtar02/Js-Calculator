function getNumber(num){
    console.log(num)
var result = document.getElementById("result")
result.value += num;
}
function clearResult(){
var result = document.getElementById("result")
result.value = ""
}

function getResult(){
var result = document.getElementById("result")
result.value = eval(result.value)
}

function getSqrt(){
    var result = document.getElementById("result")
    result.value = Math.sqrt(result.value)
}

function getPow(){
    var result = document.getElementById("result")
    result.value = eval(result.value * result.value)
}

function getPi(){
    var result = document.getElementById("result")
    result.value = result.value * Math.PI
}

function backspace(){
    var result = document.getElementById("result")
    result.value = result.value.substring(0 , result.value.length -1)
}