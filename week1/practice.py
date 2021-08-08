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
result = fahrenheit(60)
print(result)





