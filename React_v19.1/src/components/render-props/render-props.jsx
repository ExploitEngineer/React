import { Counter } from "./counter";

export function RenderProps() {
  return (
    <div className="flex flex-col items-center">
      <Counter
        render={(count, increment) => (
          <div className="flex flex-col items-center">
            <p className="text-white font-medium">Count: {count}</p>
            <button
              className="py-2 px-6 rounded-lg bg-blue-600 cursor-pointer text-white font-bold"
              type="button"
              onClick={increment}
            >
              Increment
            </button>
          </div>
        )}
      />
    </div>
  );
}
