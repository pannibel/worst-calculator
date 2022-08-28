// SETTING UP

let firstnumber;
let secondnumber;
let operator;
let checked;
let rounding;
let result;
let resultText;

document.querySelector("#calculate").addEventListener("click", readNumbers);
document.querySelector("#calculate").addEventListener("click", opFunc);
document.querySelector("#calculate").addEventListener("click", opCalc);
document.querySelector("#doround").addEventListener("click", roundTo);

// READ A NUMBER FROM AN IMPUT FIELD

function readNumbers() {

    firstnumber = Number(document.querySelector("#firstnumber").value);
    console.log(firstnumber);

    secondnumber = Number(document.querySelector("#secondnumber").value);
    console.log(secondnumber);

}

// READ AN OPERATOR FROM DROP-DOWN

function opFunc() {

    operator = document.querySelector("#operator").value;
    console.log(operator);
}


// SELECTING DIFFERENT CALCULATIONS DEPENDING ON A VARIABLE (IF STATEMENTS)

function opCalc() {

    if (operator === "add") {
        result = firstnumber + secondnumber;
    };
    if (operator === "sub") {
        result = firstnumber - secondnumber;
    };
    if (operator === "mul") {
        result = firstnumber * secondnumber;
    };
    if (operator === "div") {
        result = firstnumber / secondnumber;
    };

    console.log(result)
}


// CHECKING IF A CHECKBOX IS SELECTED

function roundTo() {

    checked = document.querySelector("#doround").checked;
    console.log("rounding or no rounding");

    if (checked) {
        rounding = Number(document.querySelector("#decimals").value);
        writeResult();
        console.log("yes rounding");
        console.log(rounding);
    };
    if (!checked) {
        console.log("no rounding")
    };
}

// ROUNDING TO A NUMBER OF DECIMALS


// WRITING A RESULT INTO AN IMPUT FIELD

function writeResult() {

}


// APPENDING TO AN HTML LIST


// SCROLLING A LIST TO THE BOTTOM


// CLEARING A LIST