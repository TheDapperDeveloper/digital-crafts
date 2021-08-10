# Activity - User and Address

#Create a class called User which consists of (first_name, last_name) properties. Create a class name Address which consists of (street, city, state, zip_code) properties.
class User:
    def __init__ (self, first_name, last_name):
        self.first_name = first_name
        self.last_name = last_name
    def introduceSelf(self):
        print("My name is " + self.first_name + " " + self.last_name)

Brande = User("Brande", "Gilbert")            
Brande.introduceSelf() 

class Address():
    def __init__(self, street, city, state, zip_code):
        self.street = street
        self.city = city
        self.state = state 
        self.zip_code = zip_code
    def myAddress(self):
        print("My address is " + self.street + self.city + self.state + self.zip_code)

person1 = Address("100 lenox ave", "Dunwoody", "GA", "30401")
person1.myAddress()

#Create a relationship between User and Address in a way that a single user can have multiple addresses.

class User:
    def __init__ (self, first_name, last_name):
        self.first_name = first_name
        self.last_name = last_name
    def introduceSelf(self):
        print("My name is " + self.first_name + " " + self.last_name)

class Address(User):
    def __init__(self, first_name, last_name, street, city, state, zip_code):
        super().__init__(first_name, last_name)
        self.street = street
        self.city = city
        self.state = state 
        self.zip_code = zip_code
    def myAddress(self):
        print("My address is " + self.street + self.city + self.state + self.zip_code)

brande = Address("brande", "gilbert", "defoor lane", "atlanta", "ga", "30308")
brande = Address("brande", "gilbert", "123 main street", "sunnyvale", "ca", "90210")

brande.myAddress()

#Add a new method/function to User class called add_address(self, address) which would take an address as an argument and add it to a list/array of addresses.


class User:
    def __init__ (self, first_name, last_name):
        self.first_name = first_name
        self.last_name = last_name
        self.address_list = []
    def add_address(self,address): 
        self.address_list.append(address)   
    #def introduceSelf(self):
            #print("My name is " + self.first_name + " " + self.last_name)

brande = User("brande", "gilbert")
brande.add_address("123 main street")
print(brande.address_list)

#Add another method to the User class called display_addresses(self) which would display all the addresss of that user.
class User:
    def __init__ (self, first_name, last_name):
        self.first_name = first_name
        self.last_name = last_name
        self.address_list = []
    def add_address(self,address): 
        self.address_list.append(address)
    def display_addresses(self):
        print(self.address_list)

brande = User("brande", "gilbert")
brande.add_address("123 main street")
brande.add_address("302 reading lane")
print(brande.address_list)

# All together

class User:
    def __init__ (self, first_name, last_name):
        self.first_name = first_name
        self.last_name = last_name
        self.address_list = []
    def add_address(self,address): 
        self.address_list.append(address)
    def display_addresses(self):
        print(self.address_list)
    def introduceSelf(self):
        print("My name is " + self.first_name + " " + self.last_name)

class Address(User):
    def __init__(self, first_name, last_name, street, city, state, zip_code):
        super().__init__(first_name, last_name)
        self.street = street
        self.city = city
        self.state = state 
        self.zip_code = zip_code
    def myAddress(self):
        print("My address is " + self.street + self.city + self.state + self.zip_code)