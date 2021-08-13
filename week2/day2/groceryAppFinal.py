#shoppingList = []


class Store:
    def __init__(self, name, address):
        self.name = name
        self.address = address
    def __repr__(self):
        return str(self.name) + " - " + str(self.address)

class Stuff:
    def __init__(self, name, price, quantity):
        self.name = name
        self.price = price
        self.quantity = quantity
    def __repr__(self):
        return str(self.name) + " -  $" + str(self.price) + " -  quantity: " + str(self.quantity)

shoppingList = []

userAns = ""
while userAns != "q":
    print(""" Welcome to the shopping list app.
    Press 1 to create a new shopping list.
    Press 2 to add to an existing shopping list.
    Press 3 to view all shopping lists.
    Press q to quit. """)
    userAns = input("\nWhat would you like to do? ")
    if userAns == "1":
        nameOfStore = input("\nWhat is the store name? ")
        locationOfStore = input("\nWhat is the address? ")
        storeInformation = Store(nameOfStore, locationOfStore)
        shoppingList.append(storeInformation)
        print(shoppingList)
    if userAns == "2":
        count = 1
        for store in shoppingList:
            print("%d: %s" % (count,store))
            count += 1
        whichStore = input("\nSelect the number of the store to add to. ")
        itemName = input("\nWhat is the item name? ")
        itemPrice = input("\nWhat is the item price? ")
        itemQuantity = input("\nHow many? ")
        itemDetails = Stuff(itemName, itemPrice, itemQuantity)
        shoppingList.append(str(itemDetails))
    if userAns == "3":
        count = 1
        for store in shoppingList:
            print("%d: %s" % (count,store))
            count += 1