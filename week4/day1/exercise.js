//madlib

function madlib(firstName, subject) {
    return (`${firstName}\'s favorite subject in school is ${subject}`);
}
 console.log(madlib("Brande", "math"))

//tip calculator

function tipAmount (billAmount, service) {
    if (service === "good") {
        return(billAmount * (20/100));
    } else if (service === "fair") {
        return(billAmount * (15/100));
    } else if (service === "poor") {
        return(billAmount * 10/100);
    }
}

console.log(tipAmount(100, "good"))

//tip calculator 2

function totalAmount (billAmount, service) {
    if (service === "good") {
        return(billAmount * (20/100) + billAmount);
    } else if (service === "fair") {
        return(billAmount * (15/100) + billAmount);
    } else if (service === "poor") {
        return(billAmount * 10/100) + billAmount;
    }
}

console.log(totalAmount(100, "good"))

// Print Numbers

function printNumbers (start, end) {
    let x;
    for (x = start; x <= end; x++) {
        console.log(x)
    }
}

console.log(printNumbers (1,10))

function printNumbers2 (start,end) {
    let x = start
    while (x<=end) {
        console.log(x), x++}
}

printNumbers2(1,10)

