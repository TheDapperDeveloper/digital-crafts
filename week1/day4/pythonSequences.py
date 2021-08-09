#sequence - a data type that can store multiple, individual values
"""
    Strings
    ------
    Lists
        mutable - modifiable
    Tuples
        immutable - represents something that is fixed
    Ranges
        lists of numeric values
"""
#list
#a list literal is one or more values or variables separated by commas, enclosed in square brackets
todoList = ["learn Python", "study", "go to the post office", "become engineer", "run business", "build wealth", "trust God"]
#           0, 1, 2
#           -1, -2, -3
#print(todoList[2]) #Use brackets to call the correct item from the list

#index - position in line, seat number - numeric and start at 0 (zero-based)

#kidsAges = [2, 4, 6, 8]
#myVariables = [variable1, variable2, variable3]

#Use try/except Index Error from referencing index that falls outside the range of a sequence
#try:
#    print(todoList[5])
#except IndexError:
#  print("That item doesn't exist")

#Slicing - Call out specific indexes
#print(todoList[1:3])
#todoList[startHereAndIncludeThisValue:endHereDontIncludeValue]

#len() to find the number of indexes in list
#print(len(todoList))

#While Loop
#While this statement is true, do this. It does not stop. When not true anymore, the while loop is finished
# 3 parts: initial state, condition, code block that moves us closer to the end condition

#index = 0 #initial state
#while index < len(todoList): #condition
   # todo = todoList[index]
    #print("You need to do this:", todo)
    #index += 1 #code block

#For Loop - shorter cleaner way to write while loop - You don't have to worry about infinite loops

#for item in todoList: (for single item in list of items)
  #  print(item)
   
#Modify Lists
# Replace item in a list
# todoList[1] = "sleep"
# print(todoList)

#Add to list append adds element to list (end of list)
#todoList.append("have fun")
#print(todoList)

#Add to specific location in list
#todoList.insert(2, "work out")
#print(todoList)

#Extend concatenates the first list with another list
#todoList.extend("have fun")

#Remove item from list
#del todoList[2]
#print(todoList)

#while True means loop forever