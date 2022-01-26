const str = "Beef Broth Bear Bacon";

function charCount(str) {
  let total = 0;
  for (i = 0; i < str.length; i++) {
    let char = str[i].toLowerCase();
    if (char === "b") {
      total += 1;
    }
  }
  return total;
}

console.log(charCount(str));

function letterCount(str) {
  let total = 0;
  for (let letter of str) {
    const newLetter = letter.toLowerCase();
    if (newLetter === "b") {
      total += 1;
    }
  }
  return total;
}

console.log(letterCount(str));
