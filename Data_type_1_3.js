// 7 types data type in js
// premitive DT
// nnssbbu
// nul number symble string boolean bigint undfind


// non permitive DT is Object in js

let a=null;
let b=234;
let c=true;
let d=BigInt("445")+BigInt("5")
let e="ankit"
let f=Symbol("I am good")
let g=undefined//let g; is also undefined

console.log(a,b,c,d,e,g,f)
console.log(typeof d)

// non premitive DT Objects

const item={
    "ankit":true,
    "amit":false,
    "Udit":67,
    "Ayush":undefined
}
console.log(item["Udit"])