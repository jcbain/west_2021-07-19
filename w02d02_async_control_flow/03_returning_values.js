// higher order function
// call setTimeout which will call a callback
const higherOrderFunction = (callback) => {
  const data = {
    userName: "Mulder"
  }

  console.log('(1) before the settimeout')
  setTimeout(() => {
    data.userName = "Scully"
    callback(data);
    // setTimeout(() => console.log(data), 600)
    // return data // no one here to listen
  }, 700)
  console.log('(2) after the settimeout')

  // setTimeout(() => console.log(data), 600) // we don't know how long the async func will take to resolve
}

// console.log('(3) before main function call')
higherOrderFunction((something) => console.log('my data', something))
// console.log('capturedValue', capturedValue)
// console.log('(5) after main function call')