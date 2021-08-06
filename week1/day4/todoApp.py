userAns = ""
toDoList =[]
while userAns != "q":
    print("Press 1 to add task")
    print("Press 2 to delete task")
    print("Press 3 to view all tasks")
    print("Press q to quit")

    userAns = input("\nWhat would you like to do? ")
    if userAns == "1":
        addTask = input("\nWhat is the task? ")
        addPriority = input("\nWhat is the priority, high, medium, or low? ")
        print(addTask + " - " + addPriority)
        toDoList.append(addTask + " - " + addPriority)
        print(toDoList)
        continue
    elif userAns == "2":
        count = 0
        for todo in toDoList:
            print("%d: %s" % (count,todo))
            count += 1
        delTask = input("Enter the number of the task you would like to delete.")
        del toDoList[int(delTask)]
        print(toDoList)
    elif userAns == "3":
       taskDict = {}
       taskDict = toDoList
       print(taskDict)
       count = 1
       for todo in toDoList:
           print("%d - %s" % (count, todo))
           count += 1
    elif userAns == "q":
        print("Thank you for using the To Do App. Have a productive day!")
        break
