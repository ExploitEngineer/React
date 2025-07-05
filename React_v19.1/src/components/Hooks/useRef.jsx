{
  /* 
NOTE: What is useRef Hook ?
useRef is a special hook that lets you store a value or get a reference to a DOM element, without causing the component to re-render.
Keep values even when the component updates without making it re-render.
Useful for interacting with DOM elements direclty.
Ideal for keeping track of values (like previous states, timers, etc.) that don't need to trigger re-renders.
*/
}

import { useRef, useState } from "react";

export function UseRef() {
  const currentRef = useRef(0);
  const inputRef = useRef();

  const [name, setName] = useState("rafay");

  const handleClick = () => {
    currentRef.current += 1;
    console.log(currentRef.current);
  };

  return (
    <div className="flex flex-col items-center gap-2">
      <p className="text-white font-medium">count: {currentRef.current}</p>
      <input
        className="outline-none border border-blue-600 rounded-lg focus:ring focus:border-none focus:ring-purple-600 text-white px-3 py-2"
        type="text"
        ref={inputRef}
        onChange={(e) => setName(e.target.value)}
        placeholder="Type something..."
        value={name}
      />
      <button
        type="button"
        onClick={() => {
          setName("");
          inputRef.current.focus();
        }}
        className="py-2 px-6 rounded-lg cursor-pointer bg-red-600 text-white font-semibold"
      >
        Reset
      </button>
      <button
        type="button"
        onClick={handleClick}
        className="py-2 px-6 rounded-lg cursor-pointer bg-orange-600 text-white font-semibold"
      >
        Click
      </button>
      <button
        type="button"
        onClick={() => {
          inputRef.current.style.color = "cyan";
        }}
        className="py-2 px-6 rounded-lg cursor-pointer bg-purple-600 text-white font-semibold"
      >
        Change Input
      </button>
    </div>
  );
}
