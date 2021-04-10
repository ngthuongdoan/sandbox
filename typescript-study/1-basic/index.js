console.log("%cCác kiểu cơ bản", "color:white;font-weight:bold;font-size:4rem;-webkit-text-stroke: 1px black");
var a;
a = 1;
console.log(a);
// KDL string
var string1;
string1 = '1001';
// console.log(string1);
// KDL number
var number1 = 10;
console.log(number1);
// KDL mang
//KDL mang string
var arrString;
arrString = ['teo', 'ty', 'tun'];
console.log(arrString[0]);
// KDL mang number
var arrNumber;
arrNumber = [1, 2, 3];
//KDL boolean
var boolean1 = true;
console.log(boolean1);
// KDL enum
var Color;
(function (Color) {
    Color[Color["Red"] = 0] = "Red";
    Color[Color["Green"] = 1] = "Green";
    Color[Color["Blue"] = 2] = "Blue";
})(Color || (Color = {}));
var c = Color.Green;
// KDl tuple - kieu du lieu hon tap
var x;
x = ['ahihi', 10];
for (var i = 0; i < x.length; i++) {
    console.log(x[i]);
}
console.log(x[0]);
// KDL any
var xyz;
xyz = 'ahihi';
console.log(xyz);
