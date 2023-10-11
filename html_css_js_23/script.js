// alert("This page is devloped ankit")

//25 video
// console.log("helo")
// let a=3;
// let b=4
// console.log(a+b)
// console.log(console)
// console.log("this is log")
// console.info("this is info shaw a i buuton")
// console.assert(9>3)
// console.error("this is error")
// console.warn("this is warning")
// tab={ankit:24,Amit:34}
// console.table(tab)
// console.time("this is time")
// //this is used to knowing time for ending this statement
// console.timeEnd("this is time")


//it is used to  display mini  window invock
// alert("hello your script works")


//prompt is used to get the input a perticular variable
// let a=prompt("enter a here","345")// it syntax is used to display default value in prompt box but it can be change
// a=Number.parseInt(a)
// // document.write(a)//it is used to display text in browser
// alert("you enterd a of type   "  +(typeof a))
// let write=confirm("Do you want to write it to the page")
// if(write)
// document.write(a)
// else
// document.write("please allow the write in the page")

// //alert confirm prompt methods are bloked the main exicution of js like frist is dislay alert after that show other statements etc 

// console.log(window)

//window is global object

//DOM it is a document object model it means your whole html page makes js object and called DOM

// console.log(document)

// document.body.style.background="yellow";


//BOM  Browser object model it is used to additioal features like alert confirm prompt etc.. it is used to go the others pages 




//chapter 6 practice
//Q1
// let age=prompt("Enter your age")
// age=Number.parseInt(age);

// const canDrive =(age)=>{
//     return age>=18?true:false;
// }

// if(canDrive(age)){
//     alert("yes you can drive")
// }
// else
// {
//     alert("you can not drive")
// }

//Q2
// let runAgain=true;
// const canDrive =(age)=>{
//     return age>=18?true:false;
// }
// while(runAgain){

//     let age=prompt("Enter your age")
//     age=Number.parseInt(age);
// if(canDrive(age)){
//     alert("yes you can drive")
// }
// else
// {
//     alert("you can not drive")
// }
// runAgain=confirm("do you want to  play  again")

// // }


// //Q3 if age isnegative the display error

// let runAgain=true;
// const canDrive =(age)=>{
//     return age>=18?true:false;
// }
// while(runAgain){

//     let age=prompt("Enter your age")
//     age=Number.parseInt(age);
//     if(age<0)
//     {
//         console.error("please enter a valid age")
//         break;
//     }
// if(canDrive(age)){
//     alert("yes you can drive")
// }
// else
// {
//     alert("you can not drive")
// }
// runAgain=confirm("do you want to  play  again")

// }

//q4 it went to another page 
// let num=prompt("enter a number")
// num=Number.parseInt(num);
// if(num>4)
// {
//     location.href="https://google.com"
// }


//Q5 change colors of page

// let color=prompt("Enter the page background color");
// document.body.style.background=color


//Exercise 2 this is play properly
let obj=["snake","water","gun"]
let u_win=0;
let c_win=0;
let r=0;
// let ran=obj[Math.floor(Math.random()*obj.length)];
// let user=prompt("Choose Sanke or Water or Gun")
while(r<=3){
    let ran=obj[Math.floor(Math.random()*obj.length)];
let user=prompt("Choose Sanke or Water or Gun")

if(user=="snake")
{
    if(ran=="gun")
    {
        alert("snake is killed");
        c_win++;
    }
    else if(ran=="water")
    {
        alert("snake drink the water");
        u_win++;
    }
    
}
else if(user=="water")
{
    if(ran=="snake")
    {
        alert("snake drinks water")
        r_win++;
    }
    else if(ran=="gun")
    {
        alert("gun is drawn into water")
        u_win++;
    }
    r++;
}
else if(user=="gun")
{
    if(ran=="water")
    {
        alert("gun draws into water")
        c_win++
    }
    else if(ran=="snake")
    {
        alert("killed snake")
        u_win++;
    }
    r++;
}
}
if(u_win>c_win)
{
    alert("congratulation! you are the winner"+"user gain points : "+u_win);
}else if(u_win<c_win)
{
    alert("Computer is winner"+"computer points are : "+c_win);
}
else
{
    alert("drow the match");
}