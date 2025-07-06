{
  /* 
INFO: What are custom hooks ?
A custom hook is just a normal javascript function that starts with the word use, and uses React Hooks inside it like useState, useEffect, etc.
*/
}

import { useState } from "react";

export function useCounter() {
  const [count, setCount] = useState(0);

  const handleIncrement = () => {
    setCount(count + 1);
  };

  const handleDecrement = () => {
    setCount(count - 1);
  };

  return { count, handleIncrement, handleDecrement };
}
