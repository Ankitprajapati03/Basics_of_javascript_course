// console.log(document.body.firstChild)
// console.log(document.body.ChildNodes)
// let arr=Array.from(ducument.body.firstChild)
// console.log(arr)


//manupulaion of DOM using some methods
//dom collection can only be read not writes 
// console.log(document.body.firstChild)
// a=document.body.secondChild
// console.log(a.parantNode)
// console.log(a.parentNode) it is returns document or nodes  o parant of a
// console.log(a.parentElement)  it is returnd null

// console.log(document.bpdy.secondChild)

// const changebodyRed =()=>{
//     document.body.firstElementChild.style.background="red"
// }
// let b=document.body
// console.log("first child of b is : ",b.firstChild)//if i want to firstchild then it is return first statment like space (text) comment etc
// console.log("first child of b is : ",b.firstElementChild)//if you want to actual first child then use firsElementchild it reuturns only fist child tag
// let t=document.body.firstElementChild.firstElementChild
// console.log(t)
// console.log(t.rows)
// console.log(t.caption)

// console.log(t.tHead.firstElementChild)

//change the card title to red

// let ctitle=document.getElementsByClassName("card-title")[0] it is used to get elements by class name
// ctitle.style.color="red"

// let ctitle=document.getElementById("firstcartitle")//it uses the get the elements by id
// ctitle.style.color="red"

// let ctitles=document.querySelectorAll(".card-title")
// ctitles[0].style.color="red"
// ctitles[1].style.color="green"
// ctitles[2].style.color="yellow"
// console.log(ctitles)

// document.querySelector(".this").style.color="black"
// // document.querySelector(".this").style.background="red"

// console.log(id1)
// let id1=document.getElementById("id1")
// console.log(id1) 
// console.log(id1.matches(".class")) //match() is used to find true or false to check a perticular element is match in css or not
// console.log(id1.matches(".box")) 

document.getElementsByTagName("nav")[0].firstElementChild.style.color="red";
document.getElementsByTagName("nav")[0].firstElementChild.style.color="green";
document.getElementsByTagName("nav")[0].lastElementChild.style.color="green";

Array.from(document.getElementsByTagName("li")).forEach((element)=>{
    element.style.background="red"
})