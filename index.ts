import { User } from './user';
import { ListCounter } from './counter';

const referenceList: User[] = [
  new User({id: 1, name: "mike", email: "sample1@example.com", age: 20}),
  new User({id: 3, name: "nancy", email: "sample3@example.com", age: 21}),
  new User({id: 2, name: "mike", email: "sample2@example.com", age: 20}), 
];

const primitiveList = [1, 4, 3, 5, 4];

const referenceCounter = new ListCounter(referenceList);
const primitiveCounter = new ListCounter(primitiveList);

// console.log("reference: ", referenceCounter.sort("id"));
// console.log("premitive: ", primitiveCounter.sort());

console.log("referenceCounter: ", referenceCounter.aggregate("name"));
console.log("primitiveCounter: ", primitiveCounter.aggregate());

console.log("most premitive: ", referenceCounter.mostCommon("name"));
console.log("primitive premitive: ", primitiveCounter.mostCommon());