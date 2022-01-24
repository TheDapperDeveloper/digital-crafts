// Find the missing number in a given integer array of 1 to 10?

const arr = [1, 2, 3, 4, 5, 6, 8, 9, 10, 11, 12];
// Find number 3

function missingNumber(num) {
  //find the sum of 1 - 10
  let sumTen = (num * (num + 1)) / 2;
  // find the sum of the array
  let total = 0;
  let result = 0;
  for (let i = 0; i < arr.length; i++) {
    total += arr[i];
    result = sumTen - total;
  }
  console.log(result);
  //   return result;
  //subtract sum of array from sum of 1-10

  // return 3
}

missingNumber(12);
