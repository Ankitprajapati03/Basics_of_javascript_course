// function sum(a,b)
// {
//     return a+b;
//     console.log("DOne");
// }
// let a=10;
// let b=12;
// console.log("Sum of a and b is ",sum(a,b));


//arrow function

const sum =(x,y)=>{
    return x+y;
}
console.log(sum(1,2));

const hello = ()=>{
    console.log("hii dear");
    return "hiii";
}
let c=hello();
console.log(c);