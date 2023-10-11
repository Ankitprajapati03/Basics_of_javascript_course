//Object oriented programming
// it is a mathodology to make a programms 
//fourr pillers are most important in oop
//1. abstraction 2. encapsulation 3. inheritance 4. pollymorphisim.



//prototypes in js
//it is a null or refrences of anothor object.

// let a={
//     name:"ankit",
//     language:"Java",
//     run:()=>{
//         alert("self runn")
//     }
// }
// console.log(a)
// let p={
//     run:()=>{
//         alert("run");
//     }
// }
// p.__proto__={
//     name:"jababab"
// }
// a.__proto__=p
// a.run()
// console.log(a.name)

// //classes and objects in js

// class RailwayForm{

//     constructor(name,trainno,add){
//         console.log("this is a constructor..."+name+" "+trainno)
//         this.name=name
//         this.trainno=trainno
//         this.add=add
//     }
//     submit(){
//         alert(this.name+" : this form is submitted for train number : "+this.trainno+this.add)

//     }
//     cancel(){
//         alert(this.name+" : this from is cancelled for train number : "+this.trainno)
//         this.trainno=0
//     }

   
// }
// let ankit=new RailwayForm("ankit",3000,"daurala");
// let amit=new RailwayForm("amit",888,"meerut");
// //ankit.fill("Ankit kumar",430)
// ankit.submit()
// //amit.fill("amit",3440)
// amit.cancel()


// //contractor in js
// // it is invoke whenever class object is insantiate


// //inheritence in js
// // class Animal{
// //     constructor(name,color){
// //         this.name=name
// //         this.color=color
// //     }
// //     run(){
// //         console.log(this.name + "is running : ")
// //     }
// //     sout(){
// //         console.log(this.name + "is shouting : ")
// //     }
// // }

// // class Monkey extends Animal{
// //     eatBanana(){
// //         console.log(this.name + "BANANA")
// //     }
// // }
// // let ani=new Animal("ankit","red")
// // let m=new Monkey("raju","blue")
// // ani.sout()
// // m.eatBanana()
// // m.sout()
// // m.run()
// // ani.eatBanana()//it is not work because super class is not used sub class methods.


// //method overriding in js
// class Employee
// {
//     constructor()
//     {
//         console.log("constructor is running......")
//     }
//     login()
//     {
//         console.log("Employee has logged in");

//     }
//     logout()
//     {
//         console.log(`Employee has logged out `);

//     }
//     requestLeaves(leaves)
//     {
//         console.log(`Employee has request ${leaves} leaves parant`)
//     }
// }

// class Programmer extends Employee{
//     constructor()
//     {
//         console.log(" programmer constructor is running......")
//     }
//     requestCoffee(x)
//     {
//         console.log(`Employee has requested ${x} coffee`);
//     }
//     requestLeaves(leaves)
//     {
//         super.requestLeaves(6)//run the parant method()
//         console.log(`Employee has requested ${leaves + 1} Leaves`)
//     }
// }
// let e=new Programmer()
// e.login()
// e.requestLeaves(3)
// let p=new Employee()
// p.requestCoffee(3) dose not execute 
// p.super.requestLeaves(90)

//overriding constructor in js
// whenever you do not make a constructor in sub class then js engen is created a construct in sub class constructor(.....arg/)
// {
//     super()
// }


//static methods in js
// if make static method then used only class name and static variable is occupy the memory for whole class onc times


// get set and instance of operators in js
// class Animal{
//     constructor(name)
//     {
//         this._name=name
//     }
//     fly()
//     {
//         console.log("this is fly")
//     }
//     get name(){
//         return this._name
//     }
//     set name(newName)
//     {
//         this._name=newName
//     }
// }
// let a=new Animal("ankit")
// a.fly();
// console.log(a.name)
// a.name="amit"
// console.log(a.name)
// console.log(a instanceof Animal)//it is check a is a object(instance) of animal class or not 
// let c=77;
// console.log(c instanceof Animal)


//chapter 11
// class Complex {
//     constructor(real,im)
//     {
//         this.real=real
//         this.im=im
//     }
//     add(num)
//     {
//         this.real=this.real+num.real
//         this.im=this.im+num.im
       
//     }

// }
// let a=new Complex(2,4)
// let b=new Complex(32,6)
// a.add(b)
// // console.log(a.add(b))
// console.log(`${a.real} + ${a.im}i`)

//Q2
// class Human{
//     constructor(name,food){
//         this.name=name
//         this.food=food
//     }
//     walk(){
//         console.log(this.name + "human is walking");
//     }
// }
// class Student extends Human{
// walk(){
//     super.walk()
//     console.log(this.name + "student is walking")
// }
// }

// let a=new Student("ankit","Bhindi")
// a.walk()
// console.log( a instanceof Student)
// console.log( a instanceof Human)

// submit.addEventListener("click", (e)=>{
//     e.preventDefault()
//     let titlec=title.value
//     let descc=desc.value
//     localStorage.setItem("todo",JSON.stringify([titlec,descc]))
//     console.log(e)
//     todo.innerHTML=`<h1>${titlec}</h1>
//     <p>${descc}</p>`
//     title.value=``
//     desc.value=``
// })

// deletep.addEventListener("click", (e)=>{
   
//     e.preventDefault()//it is used to page is not reset whenever you want to delete the todolist
//     localStorage.removeItem("todo")
//     console.log(e)
//     todo.innerHTML=``
// })


//IIFE immedaitly invoke function expression
//()

// let a= ()=>{
//     return new Promise((resolve,reject)=>{
//         setTimeout(()=>{
//             resolve(440)
//         },2000)
//     })
// }

// (async ()=>{
//     let b= await a()
//     console.log(b)
//     let c= await a()
//     console.log(c)
//     let d= await a()
//     console.log(d)
//     let e= await a()
//     console.log(e)
//     let y= await a()
//     console.log(y)
// })()//this is IIFE function


//distructuring and spreade operator
// let arr=[2,3,4,6,7,9,99]
// let [a,b,c, ...rest]=arr;//distructuring 
// // console.log(a,b,c,rest)//rest is type of array and hold the multiple value of arr 

// //spread syntax it is used to convert array into object 
// let arr1=[2,3,4]//this is array
// let obj={...arr1}//this is convert array into object
// console.log(obj)// display object of an array 
// function sum(v1,v2,v3){
//     return v1+v2+v3
// }
// console.log(sum(...arr1))

// let obj2={
//     name:"ankit",
//     company:"ABC",
//     add:"xyz"
// }
// console.log({...obj2,name: "anuj",company:"private"})//change  value 

// // scope local global

// {
//     let a=10;
//     //let a=18//it does not reused
   
// }
// console.log(a)//error because let have bloke scope 

// var b=2;//var scope is global
// var b=5;//var is reused 

// function and block scope are also local scope



//Hosting in js 
// in js declaration is relise all declaration are define at the top my be


// console.log(a)
// //console.log(b)//it is an error because in js let is not define the variable before the initialization
// greet()
// function greet(){
//     console.log("good morning")
// }
// var a;// only for var declaration hosted to the top but initialization is not to the top
// js is host the all vairaible or methods are at the top of the programe
//let b=88;//it is used to top of program or after this display the b 


//function and class expression is not host in js 
// greet4()
// let af= function greet4(){
// console.log("it does not host ")
// }


// closure in js (important) it is a function have lacsical environment
// it is a combination of function and returnthe refrence of the variable  



//Arrow function
// if u pass the more then one argument in arrow function then take a () medatry

// // const x={
// //     name:"ankit",
// //     Department:"MCA",
// //     add:"daurala",
// //     show:()=>{
// //         console.log(this)//is arrow function in the function then this is window object
// //         console.log(`the name is ${this.name} `)
      
// //     },
// //     see:function(){
// //         console.log(`Dpartemn is ${this.Department}`)//this is normal keyword in normal function 
// //     }
// // }
// // x.show()
// // x.see()


// //chapter 12
// //Q1
// // IIFE
// const a=async(text)=>{
//     return new Promise((resolve,reject)=>{
//         setTimeout(()=>{
//             resolve(text)
//         },2000)
//     })
// }
// (
//     async()=>{
//        let text= await a("hello")
//        console.log(text)
//          text=await a("hello55")
//         console.log(text)
//     }
// )()//iife method 


// //Q2
// function sum(a1,b,c){
// return a1+b+c
// }
// let x=[1,2,3]
// console.log(sum(...x))


//Exercise 7
// class Password{
//     constructor(){
//         console.log("welcome to Password Generator")
//         this.pass=""
//     }
//     getneratePassword(len){
//         let char="abcdefghijklmnopqrstuvwxyz"
//         let num="1234567890"
//         let sym="@!#$%^&*()"
//         if(len<3)
//         {
//             console.log("your passwoed should be atleast 3 Characters long")
//         }
//         else {
//             let i=0;
//             while(i<len){
//                 this.pass += char[Math.floor(Math.random()*char.length)]
//                 this.pass += num[Math.floor(Math.random()*num.length)]
//                 this.pass += sym[Math.floor(Math.random()*sym.length)]
//                 i+=3;

//             }
//             this.pass=this.pass.substr(0,len)
//             return this.pass
//         }
//     }
// }
// let p=new Password()
// console.log(p.getneratePassword(7))

//how to work js in server
