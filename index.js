let hacker1 = "Esteban";
console.log(`The driver's name is ${hacker1}`)

let hacker2 = "Isabel";
console.log(`The navigator's name is ${hacker2}`)
// Iteration 2: Conditionals

let hacker1length = hacker1.length
let hacker2length = hacker2.length

let phrase = ``

if(hacker1length > hacker2length){
    phrase = `The driver has the longest name, it has ${hacker1.length} characters!.`
}
else if (hacker1length < hacker2length){
    phrase = `It seems that the navigator has the longest name, it has ${hacker1length} characters!.`
}
else {
    phrase = `Wow, you both have equally long names, ${hacker1length} characters!`
}

console.log(phrase)

const nameCapitalised = []
for (value of hacker1){
    nameCapitalised.push(value.toUpperCase)
}

// Iterarion  3 Loops

let hacker1UpperCase = hacker1.toUpperCase ()

let resReversed = ''
for (let i= hacker1UpperCase.length - 1; i >= 0;i--){
  let elem = hacker1UpperCase.charAt(i)
  resReversed += elem +" "}
console.log(resReversed)






let = `What?! You both have the same name?`

const names = [hacker1, hacker2].sort()
const hackerOneIndex = names.indexOf(hacker1)
const hackerTwoIndex = names.indexOf(hacker2)

if (hackerOneIndex > hackerTwoIndex)



let resReversed = ''
for (let i= hacker1.length - 1; i >= 0;i--)
  let elem = hacker1.charAt(i){
  resReversed += elem}
console.log(resReversed)