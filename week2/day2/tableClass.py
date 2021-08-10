class Table:
    def __init__ (self, numberOfSeats, shape, height):
        self.numberOfSeats = numberOfSeats
        self.shape = shape
        self.height = height
    def describeTable(self):
        print("This table seats " + self.numberOfSeats + " is " + self.shape + " and is " + self.height + " inches tall.")

table1 = Table("8", "round", "33")
table2 = Table("12", "rectangle", "35")

table1.describeTable()
table2.describeTable()


