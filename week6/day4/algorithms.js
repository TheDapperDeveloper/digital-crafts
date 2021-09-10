// #1

// const str = "09/10/2021";

// function formatDate() {
//  const answer = new Date(str)
//  const year = answer.getFullYear();
//  const month = answer.getMonth() + 1;
//  const day = answer.getDate();
//  console.log(year.toString() + "0"+ month + day)
//  return year + month + day
// }

// formatDate()

//#2

const str1 = "kayak"
const str2 = "backendisawesome"
const str3 = "mom"


function checkString(){
    if (str1.slice(-1) === str1.charAt(0)) {
    console.log(true)
} else {
    console.log(false)
}
    if (str2.slice(-1) === str2.charAt(0)) {
    console.log(true)
} else {
    console.log(false)
}
    if (str3.slice(-1) === str3.charAt(0)) {
    console.log(true)
} else {
    console.log(false)
}
}
checkString()
