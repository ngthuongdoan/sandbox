console.log("%cCác kiểu cơ bản","color:white;font-weight:bold;font-size:4rem;-webkit-text-stroke: 1px black")
let a: number;
a = 1;
console.log(a);
// KDL string
let string1 : string;
string1 = '1001';

// console.log(string1);

// KDL number

let number1 : number = 10;
console.log(number1);

// KDL mang
//KDL mang string

let arrString : string[];

arrString = ['teo', 'ty', 'tun'];

console.log(arrString[0]);

// KDL mang number

let arrNumber : number[];

arrNumber = [1, 2, 3];

//KDL boolean

let boolean1 : boolean = true;
console.log(boolean1);

// KDL enum

enum Color {Red, Green, Blue}
let c: Color = Color.Green;

// KDl tuple - kieu du lieu hon tap

let x: [string, number];

x = ['ahihi', 10];
for (let i = 0; i < x.length; i++) {
    console.log(x[i]);
}
console.log(x[0]);

// KDL any

let xyz : any;
xyz = 'ahihi';
console.log(xyz);
