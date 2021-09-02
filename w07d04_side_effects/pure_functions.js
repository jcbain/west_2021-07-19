// what a pure function
// no side side-effects
// deterministic 
// always returns the same output given the same inputs

const addTwo = (num) => {
  const result = num + 2;
  return result;
}

// what is a side-effect 
// when a function reaches outside of itself and interacts 
// variables defined outside its scope
// not a pure function
const addThree = (num) => {
  const result = num + 3;
  console.log(result);
  return result;
}

const additionValue = 4;

const addFour = (num) => {
  const result = additionValue + num;
  return result;
} 

let someVal = 5;

const addSix = (num) => {
  const result = num + 6;
  someVal++;
  return result;
}

