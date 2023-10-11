// map reduce filter are used to time saving
let arr=[23,44,56]
let a=arr.map((value,index,array)=>{
    console.log(value,index,array)
    return value + index//it is add index number in s array element
})//it is used to make a new array
console.log(a)


//filter() it is used to return filter value in new array  it means filter() is not change orignal array

let a2=[3,4,5,6,7]
let a3=a2.filter((value)=>{
    return value>5
})
console.log(a3)
console.log(a2)

//reduce()
//it is use to reduce the values of array
// in reduce() h1=1,h2=2 and add both value and result add with 3 and so on 
let arr1=[1,2,3,4,5,2,1]
let arr2=arr1.reduce((h1,h2)=>{
    return h1+h2
})
console.log(arr2)


// methods in js are used  as a variables 
let n1=[1,2,3,4]
const add=(h1,h2)=>{
    return h1+h2
}
let ne=n1.reduce(add)
console.log(ne)