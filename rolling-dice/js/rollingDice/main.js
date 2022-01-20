// Put your code here







for (let i = 0; i < 10; i++) 


{
let die0 = [{char: [""],
value: [0]}]

console.log(die0.char)
// let die0[0].value = getRandomInt(1,6)
const die1 = getRandomInt(1,6)
const die2 = getRandomInt(1,6)
let message  = `${die1} + ${die2} == ${die1.Value + die2.Value}`;

    console.log(`The number is ${dieLoop[i]}`);
  }


function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
}



