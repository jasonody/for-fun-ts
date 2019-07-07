type Style = string;

let font: Style = 'some font';

//Union Type (don't all have to be the same type)
type UnionStyle = 'bold' | 'italic' | 22;

let unionFont: UnionStyle = 'bold';
let anotherUnionFont: UnionStyle = 22;
