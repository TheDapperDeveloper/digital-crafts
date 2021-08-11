class GroceryStore:
    def __init__ (self, name, address):
        self.name = name
        self.address = address
       
def newStore():
    newList = input("\n What is the name and address of the store?")
    storeList.append(newList)
    print(storeList)
    
def addItems():
    count = 1
    for items in storeList:
        print("%d: %s" % (count,items))
        count += 1
    addList = input("\nWhich list would you like to add to?")
    storeList.append(addList)

def viewItems():
    count = 1
    for items in storeList:
        print ("%d: %s" % (count, items))
        count += 1
        
storeList = []    
userAns = ""
while userAns != "q":
    print(""" Welcome to the shopping list app.
    Press 1 to create a new shopping list.
    Press 2 to add to an existing shopping list.
    Press 3 to view all shopping lists.
    Press q to quit. """)
    userAns = input("\nWhat would you like to do? ")
    if userAns == "1":
        nameOfStore = input("what is the name of the store?")
        addressOfStore = input("what is the address?")
        store = GroceryStore(nameOfStore, addressOfStore)
        storeList.append(store)
        print(storeList)
    elif userAns == "2":
        addItems()
    elif userAns =="3":
        viewItems()
    elif userAns == "q":
        print("Thank you for using the Grocery App. Have a nice day!")




       

