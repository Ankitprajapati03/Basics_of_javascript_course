// let arr=[ "टीचर- इतने दिन कहां थे, स्कूल क्यों नहीं आए", "लू- बर्ड फ्लू हो गया था मैम", "चर- पर ये तो पक्षियों को होता है इंसानों को नहीं", "लू- इंसान समझा ही कहां आपने...रोज तो मुर्गा बना देती हो", "indi Jokes of the day funny jokes", "जेदार जोक्स - फोटो : iStoc", "ता- तुम खाली पेट होने पर कितने केले खा सकते हो?", "ता  मैं 6 केले खा सकता हूँ", "ता ने हँसते हुए जवाब दिया- गलत जवाब दोस्त", "हला केला खा लेने के बाद तुम्हारा पेट खाली कहां रहेगा !"]

// let ran=arr[Math.floor(Math.random()*arr.length)];
// document.write(ran)



// //console.log and console.dir()
// let x=document.getElementsByTagName('span')[0]
// console.log(x)
// let y=document.getElementsByTagName('span')[0]
// console.dir(y)


//innerHTML

//this is used to display inner html containt and change also
// first.innerHTML//hii i am span
// first.innerHTML="Hii i am change html"//this is change


//outerhtml
//in this html display outer and inner html and if you want update in html then also canbe done
// first.outerHTML//<span><b>hii</b>hyy i am span</span>
// first.outer="this is outer html"

// // document.write(first.outerHTML)

//it is used for display or show only text of any site
//  console.log(document.body.textContent)

//this is display attribute of this id 

// let first=document.getElementById("first")
// let a=first.getAttribute("class")
// console.log(a)

// console.log(first.hasAttribute("class"))//true because clsass attribute of first
// console.log(first.hasAttribute("style"))///false because style attribute is not present in first 


// //set method

// // first.setAttribute("hidden","true")

// // first.setAttribute("class","true ankit")

// //remove the attributes 
// first.removeAttribute("class")

//this is used to insert html into the page
// let a=document.getElementsByTagName('div')[0]

// // a.innerHTML=a.innerHTML + '<h1>hello world!</h1>';


// let div=document.createElement('div');
// div.innerHTML='<h1>Hello sir</h1>'
// a.append(div)//this is same of innerhtml
// a.prepend(div)//this is display inner container but between

// a.replaceWith(div)//it is replace with div
// first.insertAdjacentHTML('beforebegan','<div class="text">beforebegan</div>');
//  first.insertAdjacentHTML('beforeend','<div class="test">beforeend</div>');
//  first.insertAdjacentHTML('Afterbegain','<div class="test">Afterbegain</div>');
//  first.insertAdjacentHTML('Afterrend','<div class="test">Afterrend</div>');

//classlist and classname


// first.className="text-black red"
// first.classList.remove("red")
// // first.classList.add("red")
// first.classList.toggle("red")//toggle() is used to remove or add any of style logic etc like ! it means if text is red then it remove if text not red then red in other words ture is false and false is true using toggle()


//setInterval and setTimeOut
// alert("hello")

// //it is used to after  some freqtion of second  display the inside the function statment
// let a=setTimeout(function(){
//     alert("i am inside of set timeout")
// },2000)
// let b=prompt("enter yes if you want to time")
// if("n"==b)
// clearTimeout(a)//cleard the given time
// console.log(a)

// const sum=(a,b)=>{
//     console.log("yes i am running"+(a+b))
//      a+b;
// }
// setTimeout(sum, 1000,1,2)


//settimeinterval is used to evry second you want to display agian and again
// setInterval(function(){
//     alert("setinterval")
// }, 3000)

//browser events in js
//mouse event key events etc...

// let a=document.getElementsByClassName("container")[0]
// a.onclick=()=>{
//     let b=document.getElementsByClassName("conatiner")[0]
//     b.innerHTML="hello world"

// }


//addeventListener and remove eventlistener

// let x=function(e){
    
//     alert("hello world1")

// }

// let y=function(e){
//     alert("hello world2")

// }
// btn.addEventListener('click',x)
// btn.addEventListener('click',y)


// let a=prompt("what is your favorite number");
// if(a=="2")
// {
//     btn.removeEventListener('click',x)//it is remove the event x
// }
   

//event object


// document.getElementById("google").addEventListener('click',function(){
   
//     window.location="https://google.com";
//     // window.focus();
// })
// const fetchContant=async (url) => {
//     con = await fetch(url);
//     let a=await con.json()
//     return a;
// }
// setInterval( async function(){
//     let url="https://jsonplaceholder.typicode.com/todos/1"
//     console.log(await fetchContant(url))
// }, 3000)



// it is genrated bulb effactor
// setInterval(async function(){
//     document.querySelector("#bulb").classList.toggle("bulb")
// },100)

setInterval(showTime,1000)
function showTime(){
let a=new Date()
let h=a.getHours()
let m=a.getMinutes()
let s=a.getSeconds()
let d=a.getDate()

let currentTime=h+':'+m+':'+s+':'+d;
document.getElementById("in").innerHTML=currentTime;
}
showTime();

