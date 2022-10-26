//only affects sin/cos/tan
function radianToDegree(){

    var change = document.getElementById("btnRadDeg");
    if (change.value == "Rad")
    {
        change.value = "Deg";
        change.style.backgroundColor="#b0adad";
    }
    else {
        change.value = "Rad";
        change.style.backgroundColor="#d6d6d6";
    }
}

function factorial(){
    var inputNum = document.getElementById("display").value;
    let fac = 1;
    for (var i = 2; i <= inputNum; i++)
        fac = fac * i;
    document.getElementById("display").value = fac;
}

function set(operator) {
    document.getElementById("display").value += operator;
}

function percent(){
    var inputNum = document.getElementById("display").value;
    document.getElementById("display").value = inputNum / 100;
}

/*
//for clearing one input at a time
function ce() {
    var inputNum = document.getElementById("display").value;
    var length = inputNum.length - 1;
    console.log(length)
    var clearedInput = inputNum.substr(0, length);
    document.getElementById("display").value = clearedInput;
}
*/

//clear all
function ac() {
    document.getElementById("display").value = "";
}

function sine() {
    var inputNum = document.getElementById("display").value;
    //get button value: can either be Rad or Deg
    var radOrDeg = document.getElementById("btnRadDeg");
    if (radOrDeg.value == "Rad")
    {
        //using javascripts built in math.sin() func
        document.getElementById("display").value = eval(Math.sin(inputNum))
    }
    else {
        //using javascripts built in math.sin() func for degree converted value
        var pi = Math.PI;
        converted = inputNum * (pi/180);
        document.getElementById("display").value = eval(Math.sin(converted));
    }
}

function ln() {
    var inputNum = document.getElementById("display").value;
    document.getElementById("display").value = eval(Math.log(inputNum));
}

function cosine() {
    var inputNum = document.getElementById("display").value;
    //get button value: can either be Rad or Deg
    var radOrDeg = document.getElementById("btnRadDeg");
    if (radOrDeg.value == "Rad")
    {
        //using javascripts built in math.cos() func
        document.getElementById("display").value = eval(Math.cos(inputNum))
    }
    else {
        //using javascripts built in math.cos() func for degree converted value
        var pi = Math.PI;
        converted = inputNum * (pi/180);
        document.getElementById("display").value = eval(Math.cos(converted));
    }
}

function logBase10() {
    var inputNum = document.getElementById("display").value;
    document.getElementById("display").value = eval(Math.log10(inputNum));
}

function tangent() {
    var inputNum = document.getElementById("display").value;
    //get button value: can either be Rad or Deg
    var radOrDeg = document.getElementById("btnRadDeg");
    if (radOrDeg.value == "Rad")
    {
        //using javascripts built in math.tan() func
        document.getElementById("display").value = eval(Math.tan(inputNum))
    }
    else {
        //using javascripts built in math.tan() func for degree converted value
        var pi = Math.PI;
        converted = inputNum * (pi/180);
        document.getElementById("display").value = eval(Math.tan(converted));
    }
}

function sqrt() {
    var inputNum = document.getElementById("display").value;
    document.getElementById("display").value = eval(Math.sqrt(inputNum));
}

function exp() {
    var inputNum = document.getElementById("display").value;
    document.getElementById("display").value = inputNum;
}

//applies to those operations that need 2 inputs
function answer() {
    var inputNum = document.getElementById("display");
    //getting the input string
    var inputValue = inputNum.value;

    //case for x to the power of y
    //if it has a ^ anywhere in the string
    if (inputValue.indexOf('^') > -1) {
        //split the string into two parts with ^ being the separator
        var powParams = inputValue.split('^');
        console.log(powParams)
        //left side of the separator is the base
        num_base = powParams[0]
        //right side of the separator is the power
        power = powParams[1]
        //evaluate using javascripts pow func
        result = eval(Math.pow(num_base, power))
    }
    else if (inputValue.indexOf('E') > -1){
        //split the string into two parts with E being the separator
        var expoParams = inputValue.split('E')
        console.log(expoParams)
        //left side of the separator is the base
        num_base = expoParams[0]
        //right side of the separator is the power
        power = expoParams[1]
        //ie. 5E4 = 5x10^4
        result = eval(num_base*(Math.pow(10, power)))
    }
    else {
        //here is to evaluate +, -, /, *
        result = eval(inputValue);
    } 
    //return the result back into the calculator input bar
    document.getElementById("display").value = result;
}
