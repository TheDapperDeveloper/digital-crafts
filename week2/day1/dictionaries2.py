superhero = {
    "name": "Wonder Woman",
    "alias": "Diana Prince",
    "gear": [
        "Lasso of Truth",
        "Bracelets of Submission"
    ],
    "vehicle": {
        "title": "Invisible Jet",
        "speed": "2000 mph",
    }
}

#If superhero is not in a club (aka it does not exist), create club key then assign a value
#print(superhero.get("club"))

#Example 1

#if superhero.get("club") == None:
    #superhero["club"] = "Justice League" # to add a key and assign it a value

#print(superhero)

#Example 2

for key, value in superhero.items():
    #print(key, value)
    if value == "Science Club":
        value = "Justice League"
        #print(key, value)

#Example 3
if "hobbies" not in superhero:
    superhero["hobbies"] = "Saving the world"
#print(superhero)

wonderWoman = {
    "name": "Wonder Woman",
    "alias": "Diana Prince",
    "gear": [
        "Lasso of Truth",
        "Bracelets of Submission"
    ],
    "vehicle": {
        "title": "Invisible Jet",
        "speed": "2000 mph",
    }
}

# Example 5 Delete key and associated values

del wonderWoman["vehicle"]
print(wonderWoman)

del wonderWoman["vehicle"]["title"] 
wonderWoman["vehicle"]["title"] = "Motorcycle" #reassign

# We see how a dictionary is a more complex data type
# We see that we can access values inside of a dictionary if we refer to a key that is in the dictionary
# We see that dictionaries can contain many different data types. A dictionary vlues can be either a [], (), "", int, boolean, float, etc.
# We can access specific methods that are designed for dictionaries (.items)
# We can reassign or create keys inside of a dictionary by referring to the key such as 
# superhero["club"] and then we can assign it a value
# We can use the keyword del to delete a key or value from a dictionary

#JSON # type of data that you can access like a dictionary
