//delete is a operator
let num=[1,2,4,5,6]
delete num[0]//it is delete 0th element of the array but length of the array is same becuase delete operator is delete the value but position of save in an array and show (<1 empty item>)
console.log(num)
console.log(num.length)

//concat()
// let num1=[11,22,23,233]
// let num2=[44,55,66,77]
// let newarr=num1.concat(num2)
// console.log(newarr)//concat() is used to concatinate the multiple array in singal or new array 

// console.log(num1,num2)


// //multiple array concatination in new array
// let n1=[2,1,3,55,22,88,377,99,377,33,9893,333]
// let n2=[62,61,63,655,622,688,6377,699,377,33,9893,333]
// let n3=[687772,61,6777773,6888855,622,688,6377,699,377,33,9893,333]
// let n4=n1.concat(n2,n3)
// console.log(n4)


//sort()
let a1=[16,52,99,2,1,399]
a1.sort()//this method is sort the elements of an array into  alphabaticaly it means first alphabate is 1 then print firstly even it is 110000 or 12344 1 because it is treat the array as a string and this method is change the orignal array values
console.log(a1);

//if you want to sorting the array in assending then make a compare method just like 
let compare=(a,b)=>{
    return a -b//it is sort the array in assending order//decending order then return b -a
}
a1.sort(compare)
a1.reverse()//where it is sort the array in decending orders
console.log(a1)



//reverse()
let ars=[78,327,38,3]
ars.reverse()//it is used to reverse the array elements
console.log(ars)

//splice() it is used to add array elements in sany positions

let arra=[2,33,44,55,53,331]
let delvalues=arra.splice(2,4,3000,4000,400033,1000,877);//splice(what position,how many elementsare remove,add some new elements in an array) and it is change the original array
console.log(arra)
console.log(delvalues)//print delete elements of an array 


//slice() this method does not change orignal array

let sar=[4,54,5,6,666,555]
let s=sar.slice(3)//it is diplay 3 and 3 to last position elements  
let s1=sar.slice(3,5)//it is print 3 and 4 position  elements not 5 position
console.log(s1)
console.log(s)
console.log(sar)//display whole orignal array elements 