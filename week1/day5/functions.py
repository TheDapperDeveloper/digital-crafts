#Functions
# print()
# input()
# int()
# str()
# del

#Parts of Function
# 1. Define function
# 2. name of the function
# 3. Parenthesis ()
# 4. Colon :
# 5. Return statement
# 6. Parameters are what you call ANYTHING that goes inside of the () 
#    When you define a function
# 7. Parameters can be named whatever you want, it is like you are defining a variable 
# for the function to use in it's function body.

#example
def addTwoNumbers():
    # check out my function body
    number1 = 20
    number2 = 30
    sum = number1 + number2
    return sum

# How do you call a function?
# Write the function name, then open and close ()

print(addTwoNumbers())

#Examples of 6 and 7

def addTwoNumbers(number1, number2): # number1 and number 2 are arguments
    return number1 + number2

print(addTwoNumbers(1,2)) # 1 and 2 are arguments

# arguments are what you call the values you put in a function (), when you invoke a function
