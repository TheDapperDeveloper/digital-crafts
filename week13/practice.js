// Find the missing number in a given integer array of 1 to 10?

// const arr = [1, 2, 3, 4, 5, 6, 8, 9, 10, 11, 12];
// // Find number 3

// function missingNumber(num) {
//   //find the sum of 1 - 10
//   let sumTen = (num * (num + 1)) / 2;
//   // find the sum of the array
//   let total = 0;
//   let result = 0;
//   for (let i = 0; i < arr.length; i++) {
//     total += arr[i];
//     result = sumTen - total;
//   }
//   console.log(result);
//   //   return result;
//   //subtract sum of array from sum of 1-10

//   // return 3
// }

// missingNumber(12);

// Find the duplicate number in array

// const arr2 = [1, 2, 2, 3, 4, 5];

// return 2

function dupNum(arr) {
  //do something
  //create object for key value pairs
  let pairs = {};
  //loop over array
  for (let num of arr) {
    if (pairs[num] > 0) {
      pairs[num]++;
    } else {
      pairs[num] = 1;
    }
  }
  return pairs;
  // if number is not in object add to object and assign a value
  // if number is in object add to object and add to value
  // // if value = 2, return that key
  // return result (2)
}
console.log(dupNum([1, 2, 2, 3, 3, 4, 5]));

// Find how many times a letter appears in a sentence

function charCount(str) {
  let total = 0;
  for (i = 0; i < str.length; i++) {
    let char = str[i].toLowerCase();
    if (char === "a") {
      total += 1;
    }
  }
  return total;
}

console.log(charCount("AAAAaaaa"));

// function squareNum(num) {
//   let result = num ** 2;
//   return result;
// }

//the digit in each position is equal to the number of times that digit appears in the number.

// console.log(squareNum(25));

// function self(N) {
//   if (N[0] == 2) {
//     return 1;
//   } else {
//     return 0;
//   }
// }

// console.log(self(13));

function jumbled(string) {
  let letters = {};
  const numbers = [
    "zero",
    "one",
    "two",
    "three",
    "four",
    "five",
    "six",
    "seven",
    "eight",
    "nine",
  ];
  for (let char of string) {
    if (letters[char] > 0) {
      letters[char]++;
    } else {
      letters[char] = 1;
    }
  }
  return letters;
}
console.log(jumbled("reuonnoinfe"));
