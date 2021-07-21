// methods
// functions inside objects

// console.log('hello there')

// objects

const sayHello = function() {
  console.log('hi there!')
}

const person = {
  firstName: 'James',
  lastName: 'Bobblehead',
  age: 77,
  isTall: false,
  // sayHello,
  hello: sayHello,
  sayGoodbye: function() {
    console.log('byeeeeeee!')
  }
};

const anotherPerson = {
  firstName: 'Lisa',
  lastName: 'Bobblehead',
  age: 67,
  isTall: true,
  // sayHello,
  hello: sayHello,
};

// person.hello();
person.sayGoodbye();
anotherPerson.hello()