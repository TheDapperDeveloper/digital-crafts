// Anagrams are words or phrases that contain the same number of characters. Create a function that checks a set of two strings, and
// returns 'true' if they are anagrams and returns 'false' if they are not.

//Within the function, we compare both words to see if they contain the same characters used the same number of times. To avoid errors, we sanitize the string thus getting rid of unwanted characters and spaces since these are not letters of the alphabet.

//We also convert all characters to a common letter case before carrying out any comparisons to avoid errors due to varying capitalization. Checking that both words are of the same length is also very important as this is a primary factor for a valid comparison.

string1 = "A gentleman";
string2 = "Elegant man";
//expected result: true

string3 = "Clint Eastwood";
string4 = "Old West action";
//expected result: true

string5 = "idontlikealgos";
string6 = "algoverybad";
//expected result: false

function Anagram(string1, string2) {
  const compare = function (str) {
    return str
      .toLowerCase() // convert string to lowercase
      .replace(/[^a-z\d]/g, "") // replace every non alphabetical character with empty string
      .split("") //split string into array of characters
      .sort() //sort in alphabetical order
      .join(""); //join alphabetically ordered array of letters back together to form a string
  };
  return compare(string1) == compare(string2);
}

console.log(Anagram(string1, string2))
console.log(Anagram(string3, string4))
console.log(Anagram(string5, string6))
