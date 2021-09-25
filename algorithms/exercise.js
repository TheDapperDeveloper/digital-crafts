//Fizz Buzz - good problem solver and fundamentals of js

//function that takes in number as parameter, log in console every number from 1 to num
// if number is divisible by 3 = fizz, divisibile by 5=buzz, 3 and 5 fizz buzz

function fizzBuzz(num) {
    for (let i=1; i<= num; i++) {
        if (i % 3 === 0 && i % 5 ===0) console.log('FizzBuzz')
        else if (i % 3 === 0) console.log('Fizz');
        else if (i % 5 === 0) console.log('Buzz');
        else console.log(i)
    }
}

fizzBuzz(30)