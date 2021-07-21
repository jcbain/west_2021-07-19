const creatures = ['bigfoot', 'el chupacabra', 'unicorn'];


// for(let i = 0; i < creatures.length; i++) {
//   console.log('the creature is', creatures[i])
// }

// for(const value of creatures) {
//   console.log('the creature is', value)
// }

// objects
const person = {
  firstName: 'James',
  lastName: 'Bobblehead',
  age: 77,
  isTall: false,
  '1': 1, 
  '2': 2
  // key: 'you probably didnt mean this'
};

for(const key in person){
  // console.log('key in person is:', key)
  console.log('key:', key, 'value', person[key])
  // console.log('key:', key, 'value', person.key)
}