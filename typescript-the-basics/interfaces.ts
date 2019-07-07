interface Person {
  first: string; //required
  last: string; //required
  [key: string]: any; //allow for non-required fields (such as "isTopDog")
}

const person1: Person = {
  first: 'James',
  last: 'Jimmy'
}

const person2: Person = {
  first: 'Jimmy',
  last: 'James',
  isTopDog: true
}