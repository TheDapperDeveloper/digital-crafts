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

// console.log(Anagram(string1, string2));
// console.log(Anagram(string3, string4));
// console.log(Anagram(string5, string6));

// write a function that capitalizes the first character of every word in a string

phrase1 = "randy doesnt like giving algos";
phrase2 = "arent you glad its friday";
phrase3 = "i wonder whats for lunch today";

function Capital(string) {
  const arr = string.split(" "); //split the string into an array of strings when a blank space is encountered
    for (var i=0; i < arr.length; i++) { //loop through each element of the array and capitalize the first letter.
        arr[i] = arr[i].charAt(0).toUpperCase() + arr[i].slice(1)  //slice slices a string from a specificed start position until the end
        console.log(arr[i])
    }
    const newString = arr.join(" ") //Join all the elements of the array back into a string 
                                //using a blankspace as a separator 
    console.log(newString)
                            }

Capital(phrase1);
Capital(phrase2);
Capital(phrase3);

//Write a function that finds the missing number in a given integer array

let arr1 = [1,2,3,4,5,6,7,8,10];

//expect result: 9
