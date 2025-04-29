import { useState } from "react";

const CounterApp = () => {
  // Destructure Arrays
  /* let arr1 = [1, () => {}];
  let [a, b] = arr1;
  console.log(arr1); //printing the values in the array */

  const [count, setCount] = useState(0);
  console.log(useState(0));

  function returnSample() {
    console.log(100);
    return 100;

  }

  function returnValue() {
    console.log(200);
  }

  /* passing a function in useState */
  const [sample, setSample] = useState(() => {
    return returnSample();
  }); // used for putting parameters
  console.log(sample);
  console.log(setSample);


  const [sample1, setSample1] = useState(returnValue);
  console.log(sample1);
  console.log(setSample1);



  function increment() {
    /*
    setCount(count + 1); // Increment the counter value by 1
    setCount(count + 1); // Each time the count value will set to 0 and then increment 
    */

    // Increment the counter value by 3
    setCount((prevState) => prevState + 1);
    setCount((prevState) => prevState + 1);
    setCount((prevState) => prevState + 1);
  }

  function decrement() {
    /*
    setCount(count - 1); // Decrement the counter value by 1
    if (count === 0) {
        setCount(count);
        
    }
    */
    // Decrement the counter value by 3
    setCount((prevState) => prevState - 1);
    setCount((prevState) => prevState - 1);
    setCount((prevState) => prevState - 1);
    if (count === 0) {
      setCount(count);
    }
  }
  return (
    <div>
      <h4>Counter Application - {count} to {sample}</h4>
      <button onClick={increment}>Increase</button>
      <button onClick={decrement}>Decrease</button>
    </div>
  );
};

export default CounterApp;
