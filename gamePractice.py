class Characters:
    def __init__(self, name, health):
        self.name = name
        self.health = health
    def takeDamage(self, decreaseHealth):
        self.health -= decreaseHealth
    def checkHealth(self):
        print(self.health)

def viewMenu():
    print("\nPress 1 to fight")
    print("Press 2 to shoot gun")
    print("Press 3 to shoot arrow")
    print("Press 4 to run") 
    print("Press 5 to check health status")
    
character1 = Characters("Tara Loft", 50)
character2 = Characters("Wolf", 80)

userAns = ""

print("\nYour name is Tara Loft and you are trying to escape an island after a plane crash that you survived.")
print("You have access to a gun, bow and arrow, and advanced fighting skills.")
print("An angry wolf is blocking the entrance of a cave that contains food and water. Your mission is to access the cave to increase your health.")


startGame = True
while startGame:
    viewMenu()


    #print("\nPress 1 to fight")
    #print("Press 2 to shoot gun")
    #print("Press 3 to shoot arrow")
    #print("Press 4 to run") 
    #print("Press 5 to check health")

    userAns = input("\nWhat would you like to do? ")
    if userAns == "1":
        character1.takeDamage(30)
        print("Oh no! Tara's health decreased by 30.")
        if character1.health <= 0:
            print("Game Over.")
            startGame = False
        #userAns = input("What would you like to do next?")
    elif userAns == "2":
        character2.takeDamage(50)
        print("The wolf's health decreased by 50")
        if character2.health <= 0:
            print("Congratulations! You win!")
            startGame = False
        #userAns = input("What would you like to do next?")
    elif userAns == "3":
        character2.takeDamage(30)
        print("The wolf's health decreased by 30")
        if character2.health <= 0:
            print("Congratulations! You win!")
            startGame = False
        #userAns = input("What would you like to do next?")
    elif userAns == "4":
        character1.takeDamage(50)
        print("The wolf caught you and mauled you to death. Game Over.")
        if character1.health <= 0:
            print("Game Over.")
            startGame = False
    elif userAns == "5":
        print("Tara's health is " + str(character1.health))
        print("The wolf's health is " + str(character2.health))