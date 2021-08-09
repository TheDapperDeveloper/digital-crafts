def welcomeMessage():

    welcome = """
    What would you like to do?
    press 1
    press 2
    press 3
    press q
    """
    return print(welcome)

#If you are writing the same code over and over again. Write a function

listOfRestaurants = ["Chipotle", "Moe's", "Taco Bell"]
# We access list contents via index

restaurant = {
    "name": "Chipotle",
    "address": "Peachtree Street",
    "phone": "404-665-0120"
}

print(restaurant["name"])
print(restaurant["address"])
print(restaurant["phone"])

# You access the values of a ditionary via a key

user = {
    "name": "Xavier",
    "height": "5-10",
}

user2 = {
    "name": "Brande",
    "height": "5-8"
}

print(user["name"])
print(user2["height"])
print(user.values()) #will print every value from the dictionary
print(user.get("name")) #method to use on dictionary and you're checking to see if key does/ does not exist it will return none by default
print(user.get("pet", "Not listed")) #Or will return whatever we add

brandesFavoriteCars = {
    "carList": ["Range Rover", "Maserati", "Lamborghini", "Bentley"],
    "brandesBankBalance": {
        "CurrentBalance": "$0",
        "DreamBalance": "80000000",
        "brandesEtfs" : {
            "VTI": "10000",
            "VOO": 12000
        }
    }
}

print(brandesFavoriteCars.get("carList")[2])
print(brandesFavoriteCars["carList"][0])
print(str(brandesFavoriteCars["brandesBankBalance"]["brandesEtfs"]["VOO"]))

#access something in dictionary = ["key"]

#Print every car in car list

for car in brandesFavoriteCars["carList"]:
    print(car)
#print(brandesFavoriteCars["carList"])