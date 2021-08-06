# sum of numbers
numberList = [444, 333, 222, 111, -10]
sum = sum(numberList)
print(sum)

#largest number
maximumNum = max(numberList)
print(maximumNum)

#smallest number
minimumNum = min(numberList)
print(minimumNum)

#even numbers
for num in numberList:
    if num % 2 == 0:
        print(num)

#positive numbers
for posNum in numberList:
    if posNum > 0:
        print(posNum)

#positive numbers listed out
count = 1
for posNum in numberList:
    if posNum > 0:
        print("%d: %s" % (count, posNum))
        count += 1

#multiply a list by a factor
numberList2 = [12, 25, 67]
factor = 2
multipliedList = [element * factor for element in numberList2]
print(multipliedList)

#reverse a string
string = "I love coding!" [::-1]
print(string)