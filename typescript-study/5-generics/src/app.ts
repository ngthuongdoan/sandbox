// const names: Array<string> = ['Ngoc', 'Thuong'];

// const response: Promise<string> = new Promise((resolve) => {
//   setTimeout(() => {
//     resolve('This is done!');
//   }, 3000);
// });

// response.then((data) => {
//   data.split('');
// });

// function merge<T, U>(objA: T, objB: U) {
//   return Object.assign(objA, objB);
// }

// const mergedObj = merge({ name: 'Thuong' }, { age: 22 });

// function merge<T extends object, U extends object>(objA: T, objB: U) {
//   return Object.assign(objA, objB);
// }

// const mergedObj = merge({ name: 'Thuong' }, 30);

// interface Lengthy {
//   length: number;
// }

// function countAndDescribe<T extends Lengthy>(element: T): [T, string] {
//   let descripton = 'Got no value';
//   if (element.length === 1) {
//     descripton = 'Got 1 element';
//   } else if (element.length > 1) {
//     descripton = 'Got ' + element.length + ' element';
//   }
//   return [element, descripton];
// }

// console.log(countAndDescribe('Hi'));

// class DataStorage<T extends number | string | boolean> {
//   private data: Array<T> = [];

//   addItem(item: T) {
//     this.data.push(item);
//   }

//   removeItem(item: T) {
//     if (this.data.indexOf(item) === -1) return;
//     this.data.splice(this.data.indexOf(item), 1);
//   }
//   getItem(): Array<T> {
//     return [...this.data];
//   }
// }

// const textStorage = new DataStorage<string>();
// const numberStorage = new DataStorage<number>();
// textStorage.addItem('Thuong')
// console.log(textStorage);

interface CourseGoal {
  title: string;
  description: string;
  completeUnit: Date;
}

function createCourseGoal(
  title: string,
  description: string,
  completeUnit: Date
): CourseGoal {
  // Partial makes wrapped type properties to optional
  let result: Partial<CourseGoal> = {};
  result.title = title;
  result.description = description;
  result.completeUnit = completeUnit;

  return <CourseGoal>result;
}

const names: Readonly<string[]> = ['Thuong', 'Thi'];
// names.push('Bap'); //error
console.log(names);
