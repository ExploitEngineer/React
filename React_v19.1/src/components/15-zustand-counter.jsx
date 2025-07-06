import { useCounterStore } from "./zustand/store/counter-store";

export function ZustandCounter() {
  const count = useCounterStore((state) => state.count);
  const increment = useCounterStore((state) => state.increase);

  return (
    <div className="flex items-center flex-col">
      <p className="text-white font-bold">{count}</p>
      <button
        type="button"
        onClick={increment}
        className="py-2 px-6 bg-blue-600 text-white font-medium rounded-lg cursor-pointer"
      >
        Increment
      </button>
    </div>
  );
}
