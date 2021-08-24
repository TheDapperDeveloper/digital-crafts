// document object, or just the document will be manipulated by js
// html #id div-just type name class- .classname

// Commands you can use on document
//getElementsByTagName('p')
//getElementsByClassName('link')
//getElementById('password')

//querySelector('#password') - gets one thing that matches search condition
//querySelectorAll('.link') - gets all things that matches search condition


// Examples

//document.getElementsByClassName('main-container') valid
//document.getElementsByTagName("div") valid
//document.querySelector("") - can select any element on page - can use id, classname, or tagname


// paper first method
//document. + one of built in functions:

const bucket = document.querySelector(".main-container");

//you choose what you want to write

const studentName = document.createElement("p")
// you write the words out
studentName.innerHTML = "Brande"
// append your thought onto the actual paper
bucket.append(studentName);