//fixed length array where each item has its own defined type
type MyList = [boolean, string, number];

const myList: MyList = []; //can't initialize it empty as items are required

type MyListOptional = [boolean?, string?, number?];

const myListOptional: MyListOptional = []; //can initialize empty