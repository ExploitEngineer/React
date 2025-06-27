import { useState } from "react";

export function UseStateHook() {
  const [count, setCount] = useState(0);
  const [state, setState] = useState({ count: 0, clicks: 0 });
  const [items, setItems] = useState([]);
  const [allValues, setAllValues] = useState({
    firstname: "Abdul",
    lastname: "Rafay",
  });

  const handleClick = () => {
    setAllValues({ ...allValues, firstname: "Muhammad" });
  };

  const [task, setTask] = useState(["Learn React", "Build Project"]);

  const handleTask = () => {
    setTask([...task, "practice react"]);
  };

  {
    /* Lazy Initialization */
  }

  function expensive() {
    console.log("expensive");
    return 10;
  }
  const [number, setNumber] = useState(() => expensive());

  return (
    <div className="flex flex-col items-center justify-center gap-3">
      <h1 className="text-white font-bold text-xl">
        Button clicked - {count} times
      </h1>

      {/* Direct Update in useState */}
      <button
        className="bg-lime-500 text-black font-medium rounded-lg cursor-pointer py-2 px-8"
        onClick={() => setCount(count + 1)}
      >
        Direct Click
      </button>

      {/* Functional Update in useState */}
      <button
        className="bg-amber-500 text-black font-medium rounded-lg cursor-pointer py-2 px-8"
        onClick={() => {
          setCount((prevCount) => prevCount + 1);
          setCount((prevCount) => prevCount + 1);
        }}
      >
        Functional Click
      </button>

      {/* Object with useState */}
      <h1 className="text-white font-bold text-xl">
        Button clicked - {state.count} times
      </h1>
      <h1 className="text-white font-bold text-xl">Clicks - {state.clicks}</h1>
      <button
        className="bg-amber-500 text-black font-medium rounded-lg cursor-pointer py-2 px-8"
        onClick={() =>
          setState({
            ...state,
            count: state.count + 1,
            clicks: state.clicks + 2,
          })
        }
      >
        Click
      </button>

      {/* Arrays with useState */}
      <div className="text-white font-medium">{items}</div>
      <button
        className="bg-yellow-300 text-black font-medium rounded-lg cursor-pointer py-2 px-8"
        onClick={() => {
          setItems([...items, `${items.length + 1}`]);
        }}
      >
        Add Items
      </button>

      {/* Advanced useState with Objects */}
      <div className="flex flex-col gap-2">
        <h1 className="text-white font-medium">
          My firstname is {allValues.firstname} and lastname is{" "}
          {allValues.lastname}
        </h1>
        <button
          className="bg-orange-500 text-black font-medium rounded-lg cursor-pointer py-2 px-8"
          onClick={handleClick}
        >
          Update Name
        </button>
      </div>

      {/* Advanced useState with Arrays */}
      <div className="flex flex-col items-center">
        {task.map((item) => {
          return <li className="text-white font-medium">{item}</li>;
        })}
        <button
          onClick={handleTask}
          className="bg-green-500 text-white font-medium mt-3 rounded-lg cursor-pointer py-2 px-8"
        >
          Add task
        </button>
      </div>

      {/* Lazy Initialization Concept */}
      <div className="flex flex-col items-center">
        <h1 className="text-white font-medium">{number}</h1>
        <button
          className="bg-purple-600 text-white font-medium mt-3 rounded-lg cursor-pointer py-2 px-8"
          onClick={() => setNumber(number + 1)}
        >
          Increment Number
        </button>
      </div>
    </div>
  );
}
