console.log("%cFunction","color:white;font-weight:bold;font-size:4rem;-webkit-text-stroke: 1px black")

function showString() : string {
    return 'hello';
}

// array
function showArrNumber() : number[] {
    return [1, 2, 3];
}
// number

function sum (x: number, y: number) : number {
    return x + y;
}

console.log(sum(111, 222));
console.log(showString());
console.log(showArrNumber());
