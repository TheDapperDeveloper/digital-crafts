#toDoList = {}
#userAns = input("""
 #Press 1 to add task
 #Press 2 to delete task
 #Press 3 to view all tasks
 #Press q to quit
 # """)
#while userAns == "1, 2, 3, q":
 #   if userAns == "1":
  #      addTask = input("What task would you like to add?")
 #       addPriority = input("What is the priority, high, medium, low?")
  #      print(addTask, addPriority)
  #toDoItem = addTask + addPriority



userAns = ""
toDoList =[]
while userAns != "q":
    print("Press 1 to add task")
    print("Press 2 to delete task")
    print("Press 3 to view all tasks")
    print("Press q to quit")

    userAns = input("\nWhat would you like to do? ")
    if userAns == "1":
        addTask = input("\nWhat is the task ")
        addPriority = input("\nWhat is the priority, high, medium, or low? ")
        print(addTask + " - " + addPriority)
        toDoList.append(addTask)
        print(toDoList)
    elif userAns == "2":
        count = 0
        for toDo in toDoList:
            print("%d: %s" % (count, toDo))
        count += 2 #Show user all the tasks along with the index number of each task. User can then enter the index number of the task to delete the task.

        #see if github works
