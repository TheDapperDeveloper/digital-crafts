class Car:
    def introduceSelf(self):
        print("I am a " + self.name)

car1 = Car()
car1.name = "Range Rover"
car1.color = "Black"
car1.miles = 10

car2 = Car()
car2.name = "Bentley Continental GT"
car2.color = "White"
car2.miles = 100

car1.introduceSelf()
car2.introduceSelf()

# Use constructor to deal with different attributes

class Car:
    def __init__(self, name, color, miles):
        self.name = name
        self.color = color
        self.miles = miles
    def introduceSelf(self):
        print("I am a " + self.name)

car1 = Car("Range Rover", "Black", 10)
car2 = Car("Bentley Continental GT", "White", 100)

car1.introduceSelf()
car2.introduceSelf()


       