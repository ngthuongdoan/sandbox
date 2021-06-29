/* Intersection Types - Gộp kiểu giống như interface */
// type Admin = {
//   name: string;
//   privileges: string[];
// };

// type Employee = {
//   name: string;
//   startDate: Date;
// };

// type ElevatedEmployee = Admin & Employee;
interface Admin {
  name: string;
  privileges: string[];
}

interface Employee {
  name: string;
  startDate: Date;
}

interface ElevatedEmployee extends Admin, Employee {}

const el: ElevatedEmployee = {
  name: 'Thuong',
  privileges: ['create-server'],
  startDate: new Date(),
};

console.log(el);
/*********************/
/** Type Guard */
type Combinable = string | number;
type Numeric = number | boolean;

type Universal = Combinable & Numeric;

// const add = (a: Combinable, b: Combinable) => {
//   if (typeof a === 'string' || typeof b === 'string') {
//     return a.toString() + b.toString();
//   }
//   return a + b;
// };

type UnknownEmployee = Employee | Admin;

const printEmployeeInformation = (emp: UnknownEmployee) => {
  console.log(emp.name);
};
/*********************/
/** Discriminated Type */
interface Bird {
  type: 'bird';
  flyingSpeed: number;
}

interface Horse {
  type: 'horse';
  runningSpeed: number;
}

type Animal = Bird | Horse;

const moveAnimal = (animal: Animal) => {
  let speed: number = 0;
  switch (animal.type) {
    case 'bird':
      speed = animal.flyingSpeed;
      break;
    case 'horse':
      speed = animal.runningSpeed;
      break;
    default:
      break;
  }
  console.log('Moving with speed: ' + speed);
};
/********************* */
/** Type Casting */
const paragraph = <HTMLParagraphElement>document.getElementById('message');
const paragraph2 = document.getElementById('message') as HTMLParagraphElement;
/*************** */
/** Index Type */
interface ErrorContainer {
  // Dynamic key: value
  [prop: string]: string;
}

const errorBag: ErrorContainer = {
  email: 'Not a valid email',
};

const errorBag2: ErrorContainer = {
  username: 'Not a valid name',
};
/************* */
/** Function Overload */
function add(a: number, b: number): number;
function add(a: string, b: string): string;
function add(a: Combinable, b: Combinable) {
  if (typeof a === 'string' || typeof b === 'string') {
    return a.toString() + b.toString();
  }
  return a + b;
}

const result = add('Ngoc', 'Thuong');
result.split('');
/******************** */
/** Optional chaining && Nullish Coalescing*/
const fetchedUser = {
  id: '1',
  job: {
    title: 'A',
    desciption: 'abc',
  },
};
console.log(fetchedUser?.job?.title);

const userInput = '';
// Fallback for null and undefined
const storedData = userInput ?? 'DEFAULT';
/******************** */
