//Array methods

let num=[1,2,3,4,55]
// let b=num.toString()//b is a string now
// console.log(b)
// console.log(typeof b)
let c=num.join(" and ")// it is join and of between of  whole array elemens 
console.log(c)
console.log(typeof c)
// let r=num.pop()//pop() is return pop element
// console.log(r,num)
let st=num.push(66)//push() is return length of array
console.log(num,st)
let r=num.shift()//it is used to remove first element of the arrays and change the orignal array 
console.log(r,num)

let r1=num.unshift(68)//it is used to add first element of the arrays and change the orignal array  and return the new array length
console.log(r1,num)