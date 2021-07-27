
console.log('(1) before the set timeout')

const resturnValue = setTimeout(() => {
  console.log('(2) hello there')
}, 2000)

console.log('returnValue', resturnValue)

setTimeout(() => {
  console.log('(3) Am i second?')
})


console.log('(4) after the settimeout')

// for(let i = 0; i < 50000; i++){
//   const date = new Date();
//   console.log(date)
// }
