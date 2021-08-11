shoppingList = []

class GroceryItems:
    def __init__ (self, title, price, quantity):
        self.title = title
        self.price = price
        self.quantity = quantity
        self.groceryList = []
    def thingsToBuy(self):
        print("Item: " + self.title + "Price:$ " + self.price + "Quantity: " + self.quantity)

       
def newItems():
    newList = input("\n What is the name and address of the store?")
    shoppingList.append(newList)
    print(shoppingList)
    
def addItems():
    count = 1
    for items in shoppingList:
        print("%d: %s" % (count,items))
        count +=1
    addList = input("\nWhich list would you like to add to?")
    shoppingList.append(addList)



userAns = ""
while userAns != "q":
    print(""" Welcome to the shopping list app.
    Press 1 to create a new shopping list.
    Press 2 to add to an existing shopping list.
    Press 3 to view all shopping lists.
    Press q to quit. """)
    userAns = input("\nWhat would you like to do? ")
    if userAns == "1":
        newItems()
    elif userAns == "2":
        addItems()
        food = input("Enter title ", "price ", "and quantity")
        food.thingsToBuy()



       

