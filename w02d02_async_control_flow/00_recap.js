// callbacks recap

// myForEach is an HOF (higher order function)
const myForEach = (arr, callback) => {
  // loop through our array
  // call our callback on each element in the array
  for(const ind in arr) {
    const elem = arr[ind];
    // pass elem and ind to my callback
    callback(elem, ind)
  }
}

const chickens = ['pollo', 'chicken', 'poulet'];

myForEach(chickens, (elem, i) => console.log(elem, i))
// myForEach([1, 2, 3], (elem) => console.log(elem + 2))

const printElement = (elem, i) => {
  console.log(elem, i)
}

myForEach(chickens, printElement)
chickens.forEach((elem, ind) => console.log(elem, ind))
