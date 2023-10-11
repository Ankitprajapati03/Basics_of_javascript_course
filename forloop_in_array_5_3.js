let num=[2,3,4,2,55,22,33]
for(let i=0;i<num.length;i++)
console.log(num[i])

//for each loop

num.forEach((element)=>{
    console.log(element*element)
})


//array.from to make array of any type of string objects

let num1="ankit"
let a=Array.from(num1)//it is convert the string into array
console.log(num1,a)

//for of loop it is used in array and string 
for(let i of num)//it is display the elements if an array
console.log(i)

//for in loop
for(let i in num)//this loop is display the keys of Object and array and array keys is its position like 0,1,2,3,4,and so on.....
console.log(i)//it is print keys of array 


//if display the vlaues of array using for in loop then 
let ss=[3,4,5,6,88]
for(let i in ss){

console.log(i,ss[i])
}