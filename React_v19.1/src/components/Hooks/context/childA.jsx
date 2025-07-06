import { ChildB } from "./childB";
import { useCounter } from "../customHooks";

export function ChildA() {
  const { count, handleIncrement, handleDecrement } = useCounter();

  return (
    <div className="flex flex-col items-center">
      <ChildB />

      <p className="text-white font-bold">{count}</p>
      <button
        onClick={handleIncrement}
        type="button"
        className="py-2 px-6 rounded-lg cursor-pointer text-white font-medium bg-blue-600"
      >
        Increment
      </button>
      <button
        onClick={handleDecrement}
        type="button"
        className="py-2 px-6 rounded-lg cursor-pointer text-white font-medium bg-red-600"
      >
        Decrementt
      </button>
    </div>
  );
}
