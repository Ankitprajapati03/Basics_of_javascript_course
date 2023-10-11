// //Q1
// const loadScript= async(src)=>{
// return new Promise((resolve,reject)=>{
//     let script =document.createElement("script")
//     script.src=src
//     script.onload=()=>{
//         resolve(src+"successe")
//     }
//     document.head.append(script)
// })

// }
// // const m2=async()=>{
// //     console.log(new Date().getSeconds())
// //     let a=await loadScript("https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/js/bootstrap.bundle.min.js")
// //     console.log(a)
// //     console.log(new Date().getSeconds())
// // }
// // m2()

// // //Q2
// // let p=()=>{
// //     return new Promise((resolve,reject)=>{
// //     setTimeout(()=>{
// //         reject(new Error("please thi is not accaptable"));
// //     },3000)
// // })
// // }
// // let a=async() => {
// //     try{
// //     let c=await p()
// //     console.log(c)
// // }
// // catch(err)
// // {
// //     console.log("this error handle")
// // }
// // }
// // a()


// //Q3
// let p1=async()=>{
//     return new Promise((resolve,reject)=>{
//         setTimeout(()=>{
//             resolve(30)
//         },1000)
//     })
// }
// let p2=async()=>{
//     return new Promise((resolve,reject)=>{
//         setTimeout(()=>{
//             resolve(31)
//         },2000)
//     })
// }
// let p3=async()=>{
//     return new Promise((resolve,reject)=>{
//         setTimeout(()=>{
//             resolve(32)
//         },3000)
//     })
// }
// let p4=async()=>{
//     return new Promise((resolve,reject)=>{
//         setTimeout(()=>{
//             resolve(33)
//         },4000)
//     })
// }

// const run=async()=>{
//     console.time("run");
    // let a1=await p1()//fetch the data all time of p1p2p3p4 
    // let a2=await p2()//fetch the data all time of p1p2p3p4
    // let a3=await p3()//fetch the data all time of p1p2p3p4
    // let a4=await p4()//fetch the data all time of p1p2p3p4
//    let a1= p1()//fetch the data same time of p1p2p3p4 
//     let a2= p2()//fetch the data same time of p1p2p3p4
//     let a3= p3()//fetch the data same time of p1p2p3p4
//     let a4= p4()//fetch the data same time of p1p2p3p4
// //     let a1a2a3a4=await Promise.all([a1,a2,a3,a4])//this method is display  value of a1 a2 a3 a4 with in larger time of among the p1 p2 p3 p4
// //     console.log(a1a2a3a4)
// //     console.log(a1,a2,a3,a4)
// //     console.timeEnd("run")
// // }
// // run()


//hackerman
//?????

//fectch API

// let p= fetch("https://goweather.herokuapp.com/weather/Ny")
// p.then((response)=>{
//     console.log(response.status)
// //     console.log(response.ok)
// //     return response.json()
// // }).then((value2)=>{
// //     console.log(value2)
// // })

// //post request in fetch api
// // fetch('https://jsonplaceholder.typicode.com/todos/1')
// //       .then(response => response.json())
// //       .then(json => console.log(json))

// //Cookies on website using js
// //store the data in browser using cookies
// // console.log(document.cookie)
// // document.cookie="name=ankit09"
// // console.log(document.cookie)
// // let key=prompt("enter your key")
// // let value=prompt("enter your value")
// // document.cookie=`${key}=${value}`
// // console.log(document.cookie)
// // //it is set browser

// //local storage in this storage value or key is save for either browser reset or u opne this site on other url anywhere. 
// let key =prompt("enter your key")
// let value =prompt("enter your value")
// localStorage.setItem(key,value)


// console.log(`The value at ${key} is ${localStorage.getItem(key)}`)
// if(key== "red" || key == "blue")
// localStorage.removeItem(key)
// else if(key == 0)
// localStorage.clear(key)


//session storage
// it exist only current tab or current time it means if u reset or open the new tab of this page then your session storage is lost 
let url="https://kontests.net/api/vl/all"
let response=fetch(url)
response.then((v)=>{
    return v.json()
}).then((v)=>{
    console.log(v)
    
})
cardContainer.innerHTML="allcards"









