print("\nYou are trying to escape an island after a plane crash that you survived.")
print("You have access to a gun, bow and arrow, and advanced fighting skills.")
print("An angry wolf is blocking the entrance of a cave that contains food and water.")

class Characters:
    def __init__(self, name, health):
        self.name = name
        self.health = health
    def takeDamage(self, decreaseHealth):
        self.health -= decreaseHealth

character1 = Characters("Tara Loft", 50)
character2 = Characters("Wolf", 80)

userAns = ""
playerOptions = []
print("Press 1 to fight")
print("Press 2 to shoot gun")
print("Press 3 to shoot arrow")
print("Press 4 to run") 
print("Press 5 to check health")
print("Press 6 to check Wolf's health")


#while userAns != "5" or "6":
  #  print("Press 1 to fight")
  #  print("Press 2 to shoot gun")
  #  print("Press 3 to shoot arrow")
   # print("Press 4 to run") 
   # print("Press 5 to check health")
   # print("Press 6 to check Wolf's health")

userAns = input("\nWhat would you like to do? ")
    if userAns == "1":
        character1.takeDamage(30)
        print("Oh no! Health is down to 20.")
        input("What would you like to do next?")
    elif userAns == "2":
        character2.takeDamage(50)
        print("The wolf's health decreased to 30")
        input("What would you like to do next?")

        

    #while True:
       # character1.takeDamage(1)
      #  if character1.health != 0:
       #     print("Keep fighting")
      #  else:
        #    print("Character dead. You lost.")
        #    break