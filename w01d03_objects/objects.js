// objects
const person = {
  firstName: 'James',
  lastName: 'Bobblehead',
  age: 77,
  isTall: false,
  '1': 1
};

// console.log("person['firstName']", person['firstName']);
// console.log("person.lastName", person.lastName);

// const key = 'age';
// console.log("person[key]", person[key]);
// console.log("persone['age']", person['age'])

// console.log('person.key', person.key)
// console['log']('hello')
// console[log]('hello')

const creature = 'bigfoot';
// creature = 'el chupa'
const newCreature = "james"
const printDifferentCreature = function(someCreature) {
  
  someCreature = 'el chupacabra'
  // creature = animal;
  console.log(`creature is ${someCreature}`)
}

var someCreature = 'bigfoot';

printDifferentCreature('unicorn')


let creature2 = 'james'
creature2 = 'hooplah'

// console.log(creature2)

console.log('creature prior to function call', newCreature)
printDifferentCreature(newCreature)
console.log('creature after function call', newCreature);

const bigfoot = {name: 'harry'}

const printAnotherCreature = function(obj) {
  obj.name = 'lisa';
  console.log(`hi my name is ${obj.name}`)
  
}

// console.log('bigfoot object prior to function call', bigfoot)
// printAnotherCreature(bigfoot)
// console.log('bigfoot object after to function call', bigfoot)

