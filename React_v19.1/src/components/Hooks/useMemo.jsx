{
  /* 
NOTE: What is useMemo ?
useMemo is a built-in React hook that helps optimize performance by memoizing --- or remembering the result of a calculation. It only recalculates the value when its dependencies change.
*/
}

import { useState, useMemo } from "react";

export function UseMemo() {
  const [add, setAdd] = useState(0);

  const heavyCalculation = useMemo(() => {
    console.log("heavy call");
    let result = 0;
    for (let i = 0; i < 1000000; i++) {
      result += i;
    }
    return result;
  }, [add]);

  return (
    <div className="flex flex-col items-center gap-2">
      <p className="text-white font-medium">{heavyCalculation}</p>
      <button
        type="button"
        onClick={() => setAdd(add + 1)}
        className="py-2 px-6 rounded-lg cursor-pointer bg-blue-600 text-white font-medium"
      >
        Addition
      </button>
      <p className="text-white font-medium">{add}</p>
    </div>
  );
}
