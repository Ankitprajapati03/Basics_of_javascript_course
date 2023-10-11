//Q1
// let arr=[1,2,3,4,5,6,76,83]
// // let a=prompt("Enter a number")//this method is run only browsers
// // a=Number.parseInt(a)

// let a=21
// arr.push(a)
// console.log(arr)


//Q2
// let arr=[1,2,3,4,5,3,33]
// let a;
// do{
//     a=prompt("enter a number");
//     a=Number.parseInt(a)
//     arr.push(a)
    
// }while(a!=0);
// console.log(arr)

//Q3 print the number who divisible 10 in an array
// let arr=[12,44,1,2,3,6,77,20,50,60]
// let re=arr.filter((x)=>{
//     return x%10==0
// })
// console.log(re)

//Q4 

// let arr=[12,44,1,2,3,6,77,20,50,60]
// let re=arr.map((x)=>{
//     return x*x
// })
// console.log(re)

//Q5 multiple  of array number using reduce method

let arr=[1,2,3,4,5,6,7]
let r=arr.reduce((x1,x2)=>{
    return x1*x2
})
console.log(r)