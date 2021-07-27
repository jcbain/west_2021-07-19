// javascript is synchronous
// console.log(1)
// console.log(2)
// console.log(3)

console.log('this file starts here')

// blocking code
for(let i = 0; i < 10000; i++){
  const date = new Date();
  console.log(date)
}

console.log('I get run last')