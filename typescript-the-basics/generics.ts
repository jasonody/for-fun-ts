class Observable<T> {
  constructor(public value: T) {}
}

let x: Observable<number>; //explicit
let y: Observable<Person>;
const z = new Observable(23); //implicit

function genericFunction<T>(arg: T): T {
  return arg;
}

const val1 = genericFunction<string>('my string'); //explicit
const val2 = genericFunction('my string'); //implicit