import * as O from 'fp-ts/lib/Option'
import * as EQ from 'fp-ts/lib/Eq'
import { pipe } from 'fp-ts/lib/pipeable'

console.log(O.isSome(O.some(1))) //true

console.log(O.elem(EQ.eqNumber)(1, O.some(1))) //true
console.log(O.elem(EQ.eqNumber)(1, O.some(2))) //false

console.log(pipe(
  O.some(1),
  O.exists(x => x === 1))) //true 

console.log(pipe(
  1,
  O.fromPredicate(x => x === 1)
)) //some(1)