import * as S from 'fp-ts/lib/Set'
import { eqNumber } from 'fp-ts/lib/Eq'
import { ordNumber } from 'fp-ts/lib/Ord'
import { pipe } from 'fp-ts/lib/pipeable'

const insert = S.insert(eqNumber)
const set = pipe(
  S.empty,
  insert(2),
  insert(1),
  insert(3),
  insert(1)
)

console.log(pipe(
  set,
  S.toArray(ordNumber)
)) // [1, 2, 3]

console.log(pipe(
  set,
  S.map(eqNumber)((x:number) => x * 2), // set[4, 2, 6]
  S.some(x => x < 2)
)) // false