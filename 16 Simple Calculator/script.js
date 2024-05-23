function add() {
    let input1 = parseInt(document.getElementById('input1').value)
    let input2 = parseInt(document.getElementById('input2').value)
    let output;
    output = input1 + input2;
    document.getElementById('output').innerHTML = output;
}

function sub() {
    let input1 = parseInt(document.getElementById('input1').value)
    let input2 = parseInt(document.getElementById('input2').value)
    let output;
    output = input1 - input2;
    document.getElementById('output').innerHTML = output;
}

function multi() {
    let input1 = parseInt(document.getElementById('input1').value)
    let input2 = parseInt(document.getElementById('input2').value)
    let output;
    output = input1 * input2;
    document.getElementById('output').innerHTML = output;
}

function divide() {
    let input1 = parseInt(document.getElementById('input1').value)
    let input2 = parseInt(document.getElementById('input2').value)
    let output;
    output = input1 / input2;
    document.getElementById('output').innerHTML = output;
}

function reset() {
    let input1 = parseInt((document.getElementById('input1').value) = '')
    let input2 = parseInt((document.getElementById('input2').value) = '')
    document.getElementById('output').innerHTML = 0;
}