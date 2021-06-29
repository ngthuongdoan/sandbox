function Logger(logString: string) {
  return function (constructor: Function) {
    console.log(logString);
    console.log(constructor);
  };
}

function WithTemplate(_: string, hookId: string) {
  return function (constructor: any) {
    const hookElement = <HTMLDivElement>document.getElementById(hookId);
    const p: Person = new constructor();

    if (hookElement) {
      hookElement.innerHTML = p.name;
    }
  };
}

@Logger('LOGGING - PERSON')
@WithTemplate('<h1>My decorator is running</h1>', 'app')
class Person {
  name = 'Max';

  constructor() {
    console.log('Creating object....');
  }
}

const p = new Person();

console.log(p);
