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

// Print a square

function printSquare (num) {
    for (let x = 0; x <= num; x++) {
        console.log("---")
    } 
}
console.log(printSquare (5))

//Print a box

/*function printBox (width, height) {
   let x, y;
   for (x = 1; x <= width; x++) {
       for (y = 1; y <= height; y++) {
        if (x===1 || x===width || y===1 || y=== height) {
            console.log("-")
            console.log("\n")
        } else {
            console.log(" | ");
        } 
       }
    } 
} 
printBox(4,4) */

//Print a banner


//Leetspeak
//To convert text to its leetspeak version, make the following substitutions:

//A => 4 E => 3 G => 6 I => 1 O => 0 S => 5 T => 7

function leetspeak (string) {
    switch (string) {
        case 1:
            a = "4";
            break;
    }
}
console.log(leetspeak("apple"))

