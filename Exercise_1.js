let ran=Math.floor(Math.random() * 101);
//console.log(ran)
let chanse=0;
let user=prompt("Enter a number");

function User(){
    user=prompt("Enter a number");  
}

if(user>ran){
alert("this number is greater then random number",User)
chanse++
//let user=prompt("Enter a number");
}
else if(user<ran){
alert("this number is greater then random number",User)

chanse++
 //user=prompt("Enter a number");
}
else if(user==ran){
console.log("this is the correct number : ",user);
chanse++

}
console.log("number of chances are",chanse)
console.log(user)


