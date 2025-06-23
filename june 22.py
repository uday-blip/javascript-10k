# to find whether the substring is a part of the string or not
word="cylechain"
part="chain"
found=False
for i in range(len(word)):
    for j in range(len(part)):
        if word[i]==part[j]:
            if part==word[i:i+len(part)]:
                found=True
                print(True)
    if found==True:
        break
if found==False:
    print("not found")
# finding the longest palindromic substring   
name="malayalamlanguage"
longest=""
for k in range(len(name)):
    temp=""
    for l in range(i,len(name)):
        temp+=name[j]
        if temp==temp[::-1] and len(longest)<len(temp):
            longest=temp
            if len(longest)>len(name[i::]):
                break
print(longest)
# to find whether the string is a palindrome or not
car="racecar"
rev=""
last=len(car)-1
for i in range(last,-1,-1):
    rev+=car[i]
if rev==car:
    print("palindrome")
else:
    print("not palindrome")
    
                