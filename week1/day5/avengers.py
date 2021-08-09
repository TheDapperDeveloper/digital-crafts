### Exercise #1 - List Practice

ogAvengers = ["Captain America", "Thor", "Iron Man", "Black Widow", "Hulk"]

# Add the missing Avenger(s)

ogAvengers.append("Hawkeye")
print(ogAvengers)
# Delete Iron Man from the Avengers #RIPTony

del ogAvengers[2]
print(ogAvengers)
# Insert a new member of the Avengers (whoever you want -Bob Ross, yourself etc.-) between Captain America and Thor

ogAvengers.insert(1, "Black Panther")
print(ogAvengers)
### Exercise #2 - FizzBuzz Part 2

# In your terminal, print the range of numbers from 1 to 100
# For every number that is divisible by 3, you want to replace it with the word "Fizz"
# For every number that is divisible by 5, you want to replace it with the word "Buzz"
# For every number that is divisible by 3 and 5, you want to replace it with the word "FizzBuzz"
# Example: it'll read like "1 2 Fizz 4 Buzz Fizz 7 8 Fizz Buzz" and so on
# Use what has been covered plus some research (don't google FizzBuzz lol)

for number in range(1,101):
    if number % 3 == 0 and number % 5 == 0:
        print("Fizz Buzz\n")
    elif number % 3 == 0:
        print("Fizz\n")
    elif number % 5 == 0:
        print("Buzz\n")
    else:
        print(number)


### Exercise #3 - Moving Zeroes

#Given an array of numbers, write a function to move all zeroes to the end of it while maintaining the relative order of 
#the non-zero elements.

array1 = [0,1,0,3,12]
array2 = [1,7,0,0,8,0,10,12,0,4]

array1.append(array1.pop(array1.index(0)))
print(array1)


# Output:
# [1, 3, 12, 0, 0]
# [1, 7, 8, 10, 12, 4, 0, 0, 0, 0]