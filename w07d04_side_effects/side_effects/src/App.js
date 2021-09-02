import './App.css';
import { useEffect, useState } from 'react';

import Appointments from './components/Appointments';


function App() {
  // const [ counter, setCounter ] = useState(0);
  // const [ searchTerm, setSearchTerm ] = useState('');

  // useEffect(() => {
  //   setCounter((prev) => {
  //     return prev + 1
  //   })
  //   console.log("i ran")
  // },[])

  // useEffect(() => {
  //   document.title = `the current count is ${counter}`;
  //   console.log('the title has changed')
  // }, [counter])

  // useEffect(() => {
  //   const interval = setInterval(() => {
  //     console.log(`%cThe value of counter is ${counter} in the interval is`, 'color: Green')
  //   }, 3000)

  //   return () => {
  //     clearInterval(interval)
  //     console.log('%cclean up has happened', 'color: HotPink')
  //   }
  // }, [counter])

  // const handleClick = () => {
  //   setCounter(counter + 1)
  // }
 
  return (
    <div className="App">
      <h1>useEffect Stuff</h1>
      <Appointments />

      {/* <p>counter value is currently: {counter} </p>
      <button onClick={handleClick}>increment</button>
      <div>
        <p>Search term is: {searchTerm}</p>
        <input
          value={searchTerm}
          onChange={(event) => setSearchTerm(event.target.value)}
        />
      </div> */}
    </div>
  );
}




export default App;
