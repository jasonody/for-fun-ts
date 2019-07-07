function pow(x:number, y:number, notRequired?:string): number {
  return Math.pow(x, y);
}

pow(5, 10, 'not req');
pow(5, 10);
pow('a', 5); //nope

function noReturnValue(): void {
  //do something but return nothing
}