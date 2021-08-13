class Characters:
    def __init__(self, name, health):
        self.name = name
        self.health = health
    def takeDamage(self, decreaseHealth):
        self.health -= decreaseHealth
    def checkHealth(self):
        print(self.health)
    def foodWater(self, increaseHealth):
        self.health += increaseHealth
    def medicine(self, increaseHealth):
        self.health += increaseHealth
    def magicPotion(self, increaseHealth):
        self.health += increaseHealth
    
class Wallet:
    def __init__(self, name, coins):
        self.name = name
        self.coins = coins
    def viewWallet(self):
        print("You have " + str(self.coins) + " coins available.")
    def purchaseItems(self, decreaseCoins):
        self.coins -= decreaseCoins

def viewMenu():
    print("\nPress 1 to fight")
    print("Press 2 to shoot gun")
    print("Press 3 to shoot arrow")
    print("Press 4 to run") 
    print("Press 5 to check health status")
    print("Press s to access the store")
    print("Press w to view available coins")
    
character1 = Characters("Tara Loft", 50)
character2 = Characters("Wolf", 80)
wallet = Wallet("Tara Loft", 60)

store =["Food and Water - 20 coins ", "Medicine - 40 coins", "Magic Potion - 50 coins"]

userAns = ""

print("\nYour name is Tara Loft and you are trying to escape an island after a plane crash that you survived.")
print("You have access to a gun, bow and arrow, and advanced fighting skills.")
print("An angry wolf is blocking the entrance of a cave that contains food and water. Your mission is to access the cave to increase your health.")
print("You also have 60 coins available to purchase items to increase your health.")


startGame = True
while startGame:
    viewMenu()

    userAns = input("\nWhat would you like to do?\n ")
    if userAns == "1":
        character1.takeDamage(30)
        print("Oh no! The wolf is too strong for Tara. Her health decreased by 30.")
        if character1.health <= 0:
            print("Game Over.")
            startGame = False
    elif userAns == "2":
        character2.takeDamage(50)
        print("Nice shot! The wolf's health decreased by 50")
        if character2.health <= 0:
            print("Congratulations! You win!")
            startGame = False
    elif userAns == "3":
        character2.takeDamage(30)
        print("Way to aim that arrow! The wolf's health decreased by 30")
        if character2.health <= 0:
            print("Congratulations! You win!")
            startGame = False
    elif userAns == "4":
        character1.takeDamage(50)
        print("The wolf caught you and mauled you to death. Game Over.")
        if character1.health <= 0:
            print("Game Over.")
            startGame = False
    elif userAns == "5":
        print("Tara's health is " + str(character1.health))
        print("The wolf's health is " + str(character2.health))
    elif userAns == "s":
        count = 1
        for item in store:
            print("%d: %s" % (count,item))
            count += 1
        userChoice = input("Which item would you like to buy? Please enter 1, 2, or 3.\n")
        if userChoice == "1":
            if wallet.coins < 20:
                print("You do not have enough coins available")
            if wallet.coins >= 20:
                character1.foodWater(20)
                wallet.purchaseItems(20)
                print("Tara's health is " + str(character1.health))
                print("You have " + str(wallet.coins) + " coins available.")
        if userChoice == "2":
            if wallet.coins < 40:
                print("You do not have enough coins available")
            if wallet.coins >= 40:
                character1.medicine(40)
                wallet.purchaseItems(40)
                print("Tara's health is " + str(character1.health))
                print("You have " + str(wallet.coins) + " coins available.")
        if userChoice == "3":
            if wallet.coins < 50:
                print("You do not have enough coins available")
            if wallet.coins >= 50:
                character1.magicPotion(50)
                wallet.purchaseItems(50)
                print("Tara's health is " + str(character1.health))
                print("You have " + str(wallet.coins) + " coins available.")
    elif userAns == "w":
        wallet.viewWallet()
    else:
        print("Please make a valid selection.")