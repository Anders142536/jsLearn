'use strict'

let start = new Date();
for(let i = 0; i < 100000; i++)
    console.log("counting to infinity: " + i)

console.log("it took " + calcTimeDifferenceFrom(start) + "ms!")
console.log("now without printing...");

start = new Date();
for(let i = 0; i < 100000; i++) { let a = i }

console.log("it took " + calcTimeDifferenceFrom(start) + "ms!")

function calcTimeDifferenceFrom(start) {
    let end = new Date();

    return end.valueOf() - start.valueOf();
}