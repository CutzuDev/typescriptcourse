// BASIC TYPES
let age: number = 25;
let hobby: string = "Soccer";
let isAdult: boolean = true;

// ARRAYS

let fruits: string[] = ["Aple", "origni"];
let arrayL: any[] = ["212112", 312312312];

let array1: number[][] = [[6], [5], [4], [3], [2]];

// tuples

let employ: [number, string][] = [[1, "jack"]];
let employees: [number, string, boolean][] = [[2, "21312312", true]];

// custom types
type Car = {
  brand: string;
  year: number;
};

// interfaces

interface Car1 {
  brand: string;
  year: number;
}

let newCar: Car1 = {
  brand: "Lexus",
  year: 2021,
};

// unions

let x: string | number = "2121";
x = 21;

type occupation = "employed" | "student";

let jackOccupation: occupation = "student";

// type assertion

let y: any = "a";

y = <number>21;

y = <string>"21";

// Functions

function add(x: number, y: number): number {
  return x + y;
}

add(2, 2);

function sayHi(): void {
  console.log("boid");
}

// generics
function copyArr<T>(arr: T[]): T[] {
  return [...arr];
}

let numCopy = copyArr<number>([1, 2, 3]);
let strCopy = copyArr<string>(["1", "2", "3"]);

// enums

enum EyeColor {
  brown = "Common",
  blue = "Rare",
  green = "Mythical 💀",
}

interface Student {
  name: string;
  age?: number;
  eyeColor: EyeColor;
}

function displayStudent(student: Student): void {
  const info: string =
    student.name + "\n" + student.age + "\n" + student.eyeColor;
  document.body.innerText = info;
}

displayStudent({
  name: "Jack",
  age: 21,
  eyeColor: EyeColor.green,
});
