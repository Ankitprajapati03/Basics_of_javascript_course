//Q1
let s="har\""
console.log(s.length);

//Q2
//.include() it is use to check for given word is lie or not in the sentece if lie then true else false

let sentece="this is a boy"
let word="is"
console.log(sentece.includes(word))//true
console.log(`this word ${word} ${sentece.includes(word)?'is':'is not'} in the sentence`)

//Q3
let str="ankit"
console.log(str.toUpperCase())

//Q4
let str2="please give Rs 1000"
let amount=Number.parseInt(str2.slice("please give Rs ".length))
console.log(amount)
console.log(typeof amount)

//Q5
let str3="ankit"
str3[3]="y";//this is not change the stringbecause string is immutable 
console.log(str3);

