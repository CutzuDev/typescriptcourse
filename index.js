"use strict";
// BASIC TYPES
let age = 25;
let hobby = "Soccer";
let isAdult = true;
// ARRAYS
let fruits = ["Aple", "origni"];
let arrayL = ["212112", 312312312];
let array1 = [[6], [5], [4], [3], [2]];
// tuples
let employ = [[1, "jack"]];
let employees = [[2, "21312312", true]];
let newCar = {
    brand: "Lexus",
    year: 2021,
};
// unions
let x = "2121";
x = 21;
let jackOccupation = "student";
// type assertion
let y = "a";
y = 21;
y = "21";
// Functions
function add(x, y) {
    return x + y;
}
add(2, 2);
function sayHi() {
    console.log("boid");
}
// generics
function copyArr(arr) {
    return [...arr];
}
let numCopy = copyArr([1, 2, 3]);
let strCopy = copyArr(["1", "2", "3"]);
// enums
var EyeColor;
(function (EyeColor) {
    EyeColor["brown"] = "Common";
    EyeColor["blue"] = "Rare";
    EyeColor["green"] = "Mythical \uD83D\uDC80";
})(EyeColor || (EyeColor = {}));
function displayStudent(student) {
    const info = student.name + "\n" + student.age + "\n" + student.eyeColor;
    document.body.innerText = info;
}
displayStudent({
    name: "Jack",
    age: 21,
    eyeColor: EyeColor.green,
});
