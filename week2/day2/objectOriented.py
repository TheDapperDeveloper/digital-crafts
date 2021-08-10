# Intro to classes

# Class: a blueprint from which you can make objects: 
# can include variables/attributes and functions/methods

#List ["can", 123, {}]
# Dictionary {"key", "value"}
# Tuple (12341234, 4564564)

# You define a class with teh keyword "class", followed by the name of the 
# class

# Constructor – function that allows you to create an object from a class
# blueprint for class

# use dot notation to print specific attributes from Object
class Sneakers:
    def __init__(self):
        self.name = "AJ1"
        self.color = "university gold"
        self.size = 8.5
    def changeShoeSize(self, changeShoeSize): #Functions inside of classes = methods. Write function to change an attribute
        self.size = changeShoeSize

Brande = Sneakers()
print(Brande.name)
Brande.changeShoeSize(7)
print(Brande.size)



class Shoes:
    def __init__(self, name, color, size):
        self.name = name
        self.color = color
        self.size = size
    def shoeCollection(self):
        print("I have " + self.name + " size " + self.size + " in " + self.color)
    

shoe1 = Shoes("AJ1", "white", str(8.5))
shoe2 = Shoes("AJ1", "university gold", str(8.5))
shoe3 = Shoes("Air max 90", "syracuse", str(7))

shoe1.shoeCollection()
shoe2.shoeCollection()
shoe3.shoeCollection()

#Inheritance
# In order to inherit the init functin of the parent class, we use super(). Whatever we want to inherit, .__init__()

class DressShoes(Shoes):
    def __init__(self, name, color, size, brand, type):
        super().__init__(name, color, size)
        self.brand = brand
        self.type = type
    def newShoeCollection(self):
        print("I also own " + self.type)

brande = DressShoes("Cole Haan", "gray", "9.5", "Cole Haan", "Oxfords")
brande.newShoeCollection()







