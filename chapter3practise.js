//Q1
let marks={
    ankit:60,
    "amit kumar":40,
    lovish:90,
    monika:20

}
// for(let i=0;i<Object.keys(marks).length;i++)
// {
//     console.log("The marks of "+Object.keys(marks)[i]+"are"+marks[Object.keys(marks)[i]])
// }

//Q2 using for in loop

// for(let key in marks)
// {
// console.log("the marks of "+key+" are"+marks[key]);
// }

//Q3
// let cn=4
// let i
// while(i!=cn)
// {
//     console.log("TRy agian")
//     i=prompt("Enter a number");
    
// }
//console.log("you have entered a coorect number");



//Q4 arrow function

const mean =(a,b,c,d)=>{
return (a+b+c+d)/4
}
console.log(mean(4,5,6,7));