import React from "react";

export const Child = React.memo(function ({ handleClick }) {
  console.log("Child Re-rendered");

  return (
    <div>
      <button
        onClick={handleClick}
        className="py-2 px-6 rounded-lg cursor-pointer bg-blue-600 text-white font-medium"
      >
        Click me
      </button>
    </div>
  );
});
