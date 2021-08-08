#Madlib
#Write a function that accepts two arguments: a name and a subject.

#The function should return a String with the name and subject interpolated in.

def favoriteMovie(name, movie):
    return "%s's favorite movie is %s." % (name, movie)
answer = favoriteMovie("Brande", "007")
print(answer)

def favoriteCandy(name, candy):
   return "%s's favorite candy is %s." % (name, candy)
result = favoriteCandy("Brande", "Peanut M&Ms")
print(result)

#The formula to convert a temperature from Celsius to Fahrenheit is:
#F = (C * 9/5) + 32
#Write a function that takes a temperature in Celsius, converts it Fahrenheit, and returns the value.

def fahrenheit(celsius):
    return (celsius * 9/5) + 32
print (fahrenheit(39))

# The formula to convert a temperature from Fahrenheit to Celsius is:
#C = (F - 32) * 5/9
# Write a function that takes a temperature in Fahrenheit, converts it to Celsius, and returns the value.

def celsius(fahrenheit):
   return (fahrenheit - 32) * 5/9
print(celsius(102.2))

#Write a function that accepts a number as an argument and returns a Boolean value. Return True if the number is even; return False if it is not even.

def isEven(num1):
    if num1 % 2 == 0:
        return "True"
    else:
        print("False")
#print(isEven(10))
#print(isEven(7)) 

#Write an is_odd function that uses your is_even function to determine if a number is odd. (That is, do not do the calculation - call a function that does the calculation.)
#Hint: You'll use the not keyword.

def isOdd(num1):
  return not isEven
print(isOdd(10))


# Write a function that accepts a List of numbers as an argument.
# Return a new List that includes the only the even numbers.

def onlyEven(*aList):
        return [isEven]
print(onlyEven(2, 4, 6, 8))

