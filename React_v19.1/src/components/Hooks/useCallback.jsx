{
  /* 
INFO: Why useCallback Matters:
In React, every time a component re-renders, all the functions inside it are recreated. Even if they look the same, they are new function objects in memory.
This causes issues when you pass those functions as props to child components - especially ones wrapped in React.memo.

FIX: The Real Problem:
    React compares props to decide whether to re-render a child component.
    And since functions are recreated each time, React thinks the function prop has changed.. even if the logic hasn't.
    Result? Unnecessary re-renders of your child components.
*/
}

import { useCallback, useState } from "react";
import { Child } from "./child";

export function UseCallback() {
  const [count, setCount] = useState(0);
  const [minus, setMinus] = useState(100);

  const handleClick = useCallback(() => {
    console.log("Button Clicked");
  }, [minus]);

  return (
    <div className="flex flex-col items-center gap-3">
      <button
        onClick={() => setCount(count + 1)}
        className="py-2 px-6 rounded-lg bg-blue-600 cursor-pointer text-white font-medium"
      >
        Increment
      </button>
      <p className="text-white font-medium">{count}</p>
      <button
        onClick={() => setMinus(minus - 1)}
        className="py-2 px-6 rounded-lg bg-red-600 cursor-pointer text-white font-medium"
      >
        Decrement
      </button>
      <p className="text-white font-medium">{minus}</p>
      <Child handleClick={handleClick} />
    </div>
  );
}
