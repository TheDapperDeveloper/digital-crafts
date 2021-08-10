userAns = ""
shoppingList =[]

print("Press 1 to create a Shopping List")
print("Press 2 to add to an Existing Shopping List")
print("Press D to view all Shopping Lists")
print("Press q to quit")
        
userAns = input("\nWhat would you like to do? ")
if userAns == "1":
        addList = input("\nWhat is the name of the store? ")
        addAddress = input("\nWhat is the address? ")
        print(addList + " - " + addAddress)
        shoppingList.append(addList + " - " + addAddress)
        listDict = {}
        listDict = shoppingList
        print(shoppingList)
elif userAns == "2":
        addToExisting = input #How do I call addItems function below?

class GroceryItems:
    def __init__ (self, title, price, quantity):
        self.title = title
        self.price = price
        self.quantity = quantity
        self.groceryList = []
    def addItems (self, title):
        self.groceryList.append(title)
    def displayLists(self):
        print(self.groceryList)

