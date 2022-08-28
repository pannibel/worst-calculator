// SETTING UP
let firstnumber;
let secondnumber;
let operator;
let checked;
let rounding;
let result;
let ul;
let li;

document.querySelector("#calculate").addEventListener("click", readNumbers);
document.querySelector("#calculate").addEventListener("click", opFunc);
document.querySelector("#calculate").addEventListener("click", opCalc);
document.querySelector("#clear").addEventListener("click", clearResults);

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

    console.log(result);

    roundOrNot();
    writeResult();
}

// CHECKING IF A CHECKBOX IS SELECTED
function roundOrNot() {

    checked = document.querySelector("#doround").checked;
    console.log("rounding or no rounding");

    if (checked) {
        rounding = Number(document.querySelector("#decimals").value);
        console.log("yes rounding");
        doRound();
        }
    if (!checked) {
        console.log("no rounding");
}}

// ROUNDING TO A NUMBER OF DECIMALS
function doRound() {
    console.log("round to", rounding);
    if (rounding === 0) {
        result = result.toFixed();
        result = Number(result);
        console.log("rounded result is:", typeof result, result)
    };
    if (rounding === 1) {
        let converted1 = result.toFixed(1);
        result = Number(converted1);
        console.log("rounded result is:", typeof result, result)
    };
    if (rounding === 2) {
        let converted2 = result.toFixed(2);
        result = Number(converted2);
        console.log("rounded result is:", typeof result, result)
    };
    if (rounding === 3) {
        let converted3 = result.toFixed(3);
        result = Number(converted3);
        console.log("rounded result is:", typeof result, result)
    };
    if (rounding === 4) {
        let converted4 = result.toFixed(1);
        result = Number(converted4);
        console.log("rounded result is:", typeof result, result)
    };
    if (rounding === 5) {
        let converted5 = result.toFixed(5);
        result = Number(converted5);
        console.log("rounded result is:", typeof result, result)
    };
    if (rounding === 6) {
        let converted6 = result.toFixed(6);
        result = Number(converted6);
        console.log("rounded result is:", typeof result, result)
    };
    if (rounding === 7) {
        let converted7 = result.toFixed(7);
        result = Number(converted7);
        console.log("rounded result is:", typeof result, result)
    };
    if (rounding === 8) {
        let converted8 = result.toFixed(8);
        result = Number(converted8);
        console.log("rounded result is:", typeof result, result)
    };
}

// WRITING A RESULT INTO AN IMPUT FIELD AND APPENDING TO AN HTML LIST
function writeResult() {
    document.querySelector("#firstnumber").value = result;

    ul = document.getElementById("results");
    li = document.createElement("li");
    li.appendChild(document.createTextNode(result));
    ul.appendChild(li);

    listScroll();
}

// SCROLLING A LIST TO THE BOTTOM
function listScroll() {
    document.querySelector("#results").scrollTo(0, 100000000);
}

// CLEARING A LIST
function clearResults() {
    firstnumber = "";
    secondnumber = "";
    operator = "";
    checked = "";
    rounding = "";
    result = "";

    document.querySelector("#firstnumber").value = "";
    document.querySelector("#secondnumber").value = "";
    document.querySelectorAll("li").forEach((el) => el.textContent = "0");
}