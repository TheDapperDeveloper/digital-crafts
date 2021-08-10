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

brande = User("brande", "gilbert")
brande.add_address("123 main street")
brande.add_address("593 piedmont street")
brande.add_address("934 peachtree street")
print(brande.address_list)