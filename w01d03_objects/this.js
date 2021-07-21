// this
const sayHello = function() {
  console.log(`${this.firstName} says "hello"!`)
}
function sayName() {
  console.log('hello')
}
const person = {
  firstName: 'James',
  lastName: 'Bobblehead',
  age: 77,
  isTall: false,
  // sayHello,
  whatIsThis: function() {
    console.log(this);
  },
  sayHello: sayHello,
  sayGoodbye: function(){
    console.log(`Get out here, ${this.lastName}`)
  }
};



// const anotherPerson = {
//   firstName: 'Lisa',
//   sayHello: sayHello
// }

person.sayHello();

// anotherPerson.sayHello();
person.sayGoodbye();
