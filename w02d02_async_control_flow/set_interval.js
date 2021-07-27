// set interval

let iterator = 0;

// create a handle
const resturnValue = setInterval(() => {
  iterator++
  console.log('hi there', iterator)
  if(iterator >= 10) {
    clearInterval(resturnValue)
  }
}, 250)

console.log('handle', resturnValue)
