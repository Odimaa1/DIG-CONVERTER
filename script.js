const yard = document.getElementById('yard');
const mile = document.getElementById('mile');
const foot = document.getElementById('foot');
const centimetre = document.getElementById('centimetre');
const instructions = document.getElementById('instructions');
const form = document.getElementById('form');
const number = document.getElementById('number').value;
const convert = document.getElementById('convert');
const output = document.getElementById('output');

let convertType;

yard.addEventListener('click', function(){
    convertType = "yard";
    instructions.innerHTML = 'Type in a number of yards';
})
mile.addEventListener('click', function(){
    convertType = "mile";
    instructions.innerHTML = 'Type in a number of miles';
})
foot.onclick = function() {
    convertType = "foot";
    instructions.innerHTML = 'Type in a number of feets';
}
centimetre.onclick = function() {
    convertType = "centimetre";
    instructions.innerHTML = 'Type in a number of centimetres';
}

// FORM SUBMIT
form.onsubmit = function(event){
    event.preventDefault();

    const number = document.getElementById('number').value
    if (number) {
        if (convertType == "yard") {
            var result = (number * 0.000568182);
            output.innerHTML = `${number} yards = ${result} miles`;
        } else if (convertType == "mile") {
            var result = (number * 1760);
            output.innerHTML = `${number} miles = ${result} yard`;
        }
        else if (convertType == "foot") {
            var result = (number * 30.48);
            output.innerHTML = `${number} feet = ${result} centimetres`;
        }
        else if (convertType == 'centimetre') {
            let result = (number * 0.0328084).toFixed(2);
            output.innerHTML = `${number} centimetres = ${result} feet`;
        }
    } else {
        output.innerHTML = 'Please enter a value!'
    }
}
