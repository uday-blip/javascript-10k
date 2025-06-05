//array methods in javascript
let arr=[1,2,3,4,5,6,7,8,9,10]
// console.log(arr.length)
// console.log(typeof(arr.toString().split(",").join("")))
// console.log(arr.at(3))
// console.log(arr.join("#"))
arr.pop()//deletes the last element of the array
console.log(arr)
arr.pop()
console.log(arr)
arr.push(11) //adds an element to the end of the array
console.log(arr)
arr.shift()//removes an element from the starting of the array
console.log(arr)
arr.unshift(-2,-1,"positive numbers begins here",0,1)//adds an element at the begining of the array and it can accept multiple parameters
console.log(arr)
//grade0-2 methods 
let fruits=["apple","grape","orange","jackfruit","kiwi"]
delete fruits[0]
console.log(fruits)
console.log(fruits.length)
//this is a typically a confusing array method in javascript , it deletes the element but doesn't change the lenght of the array , and deleted element will remain as empty
let vegetables=["tomato","potato","brinjal"]
console.log(fruits.concat(vegetables));
//concat is used to combine two arrays.
//flat :it is used to break the sublevels of the nested array and it only works when you asign it to a new variable 
let nested=[1,[2,["a",["ball",[56]]]]]
console.log(nested)
let flat_array=nested.flat(Infinity)
console.log(flat_array);
//splice
//it is used to perform three of the CRUD operations on the array with the help of start ,no: of elements has to be deleted and no: of elements have to be added 
let num=[123,3,45,45,65,98,89,76]
num.splice(1,0,124)
console.log(num);
num.splice(3,1)
console.log(num)
let squares=[1,4,9,16,25,36,36,64,81,100]
squares.splice(6,1,49)
console.log(squares)
let read_square=squares.splice(0,0)
console.log(read_square)
//it is unable to read the array    




