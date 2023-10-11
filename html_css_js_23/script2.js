
// setInterval(showTime,1000)
// function showTime(){
// let a=new Date();
// let h=a.getHours();
// let m=a.getMinutes();
// let s=a.getSeconds();
// let d=a.getDate();

// let currentTime=h+":"+m+":"+s+":"+"\n"+"Date"+" : "+d;
// document.getElementById("t").innerHTML=currentTime;
// }
// showTime();



// //syncronus programming is the execute one by one like prompt()
// //asyncronouse programming is the execution is after some time like setTimeout()
// //callbacks in js it is give whole control thats why its is conflict fo using
// function loadScript(src,calback){
//     let script=document.createElement("script");
//     script.src=src;
//     script.onload=function(){
//         console.log("Loaded with src"+src)
//         calback(src);//built in function
//     }
//     document.body.appendChild(script);
// }
// function hello(src){
//     alert("Hello"+src)
// }
// function goodmorning(){
//     alert("good  morning")
// }
// loadScript("https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/js/bootstrap.bundle.min.js",hello)


// //callbacks error etc
//pyramid of DOM AND callback hell aRE THE SAME these are the grow the code like nested and dificult  of readibility of program this problem is solved using promisis


//promises in js it is used to execute paralally 
//promise have two property state ->fullfill, value->56

// let promise=new Promise(function(resolve,reject){
//     alert("hello")
//    resolve(56)
// })
// console.log("hello")
// setTimeout(function(){
//     console.log("hello two in 2 second")
// },2000)
// console.log("my name is "+"hello three")
// console.log(promise)


//promise.then() and .catch()
// let p1= new Promise((resolve,reject)=>{
//     console.log("promise is pandding")
//     setTimeout(()=>{
//         console.log("I am a promise and ia am fullfill")
//         resolve(true)
//         // reject(new Error("i am an error"))// it is give error
//     }, 5000)
// })
// console.log(p1)


// let p2= new Promise((resolve,reject)=>{
//     console.log("promise is pandding")
//     setTimeout(()=>{
//         console.log("I am a promise and ia am rejected")
//         // resolve(true)
//         reject(new Error("i am an error"))// it is give error
//     }, 5000)
// })
// console.log(p1,p2)
//.then() and .catch() are method of promise that give the value or catch the error of the js program
// p1.then((value)=>{
//     console.log(value)
// })

// p2.catch((error)=>{
//     console.log("Some error occured in p2")
// })
// p2.then((value)=>{
//    console.log(value)
// },(error)=>{
//     console.log("error")
// })
// p1.then(alert("hello"))

//how to channing promises

// let p1= new Promise((resolve,reject)=>{

//     setTimeout(()=>{
//         console.log("Resolved after 2 second")
//          resolve(56)
//         //reject(new Error("i am an error"))// it is give error
//     }, 2000)
// })
// p1.then((value)=>{
//     console.log(value)
//     let p2=new Promise((resolve,reject)=>{
//         setTimeout(()=>{
//             resolve("Promise 2")
//         },2000)
     
//     })
//     return p2
   
// }).then((value)=>{
//     console.log("now we r pkka done")
//     return 2
// }).then((value)=>{
//     console.log("now we r still pkka done")
   
// })

// using promise i am run multiple srcipts and loaded multiple script 

//promise channing vs multiple handlers
// promise channing is exicuted ony by ony it means frist .then is display his result and after that next .the() display his result and so on

//multiple handlers are executed at the same time it means if you make multiple .then() then all are executed  at the same time 


//promise API
//it have 6 important methods 

//1.Promise.all([])
let p1=new Promise((resolve,reject)=>{
    setTimeout((value)=>{
        resolve("Value 1")
    },1000)
})
let p2=new Promise((resolve,reject)=>{
    setTimeout((value)=>{
        resolve("Value 1")
    },2000)
})
let p3=new Promise((resolve,reject)=>{
    setTimeout((value)=>{
        resolve("Value 1")
    },3000)
})
// let promise_all=Promise.all([p1,p2,p3])//if any one or more fall for execution then give error but if u want to run save promises then u uses promise.allSattled()
// promise_all.then((value)=>{
//     console.log(value)
// })

//let promise_all=Promise.allSettled([p1,p2,p3])//if any one or more fall for execution then give error but if u want to run save promises then u uses promise.allSattled() and it is given the state and value of  the promise

// //let promise_all=Promise.race([p1,p2,p3])//it is used to first resoled display firstly
// let promise_all=Promise.any([p1,p2,p3])//it is used to when actual resolve then display
// promise_all.then((value)=>{
//     console.log(value)
// })


//await/async it is used to await (rokna) the program execution of js


// async function ankit(){
//   let delhi=new Promise((resolve,reject)=>{
//     setTimeout(()=>{
//         resolve("23 deg")
//     },2000)
//   })

//   let meerut=new Promise((resolve,reject)=>{
//     setTimeout(()=>{
//         resolve("20 deg")
//     },5000)
//   })
// console.log("Please wait....")
// let d=await delhi//this is first fullfill
// console.log("fateched delhi :"+d)
// let m=await meerut//after that is fullfill
// console.log("fateched meerut :"+m)

// }
// let a=ankit()
// a.then((value)=>{
//     console.log(value)
// // })

// setTimeout(()=>{
//     console.log("Hacking Wife....")
// },1000)

// try{
//     console.log(rahul)
// }
// catch(error){
//     console.log(error)
// }
// setTimeout(()=>{
//     console.log("Hacking rahul fb id....")
   
// },2000)
// setTimeout(()=>{
//     console.log("Hacking ankit fb....")
// },3000)
// setTimeout(()=>{
//     console.log("Hacking amit kumar id....")
// },4000)
// setTimeout(()=>{
// //     console.log("Hacking Anju fb id......")
// // },5000)


// try{
//     let age=prompt("enter your age")
//     age=Number.parseInt(age);
//     if(age>150)
//     throw new ReferenceError("this age is not true ") 
// }
// catch(error){
//     console.log(error.name);
//     console.log(error.message);
//     console.log(error.stack);
// }
// console.log("script is running");

//finally block in js same as java finally for must be executed all statemnet of finnaly either error generated or not  if code is generated error either try bloc or catch alsways run finally block or clause definatly finally run if try catch handle the error
try{
    let a=0;
    console.log(program)//error in try block
    console.log("program ran successfully begain")
}catch(err){
    console.log("this is an error")
    console.log(p)//error in catch block 
}
// console.log("ankit")
finally{
    console.log("still runnning finaly")
}

