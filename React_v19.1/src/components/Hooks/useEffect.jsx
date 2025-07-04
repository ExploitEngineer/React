import { useState, useEffect } from "react";

export function UseEffect() {
  const [count, setCount] = useState(0);
  const [number, setNumber] = useState(10);
  const [data, setData] = useState();

  useEffect(() => {
    console.log("learning useEffect");
  }, [number]);

  useEffect(() => {
    const interval = setInterval(() => {
      setCount((prev) => prev + 1);
    }, 1000);

    return () => {
      clearInterval(interval);
    };
  }, []);

  async function getData(url) {
    try {
      const res = await fetch(url);

      if (!res.ok) {
        throw new Error("Response error:", res.statusText);
      }

      const apiData = await res.json();
      setData(apiData);
    } catch (err) {
      console.error(err);
    }
  }

  useEffect(() => {
    getData("https://jsonplaceholder.typicode.com/posts");
  }, []);

  return (
    <div className="flex flex-col items-center gap-2">
      <h3 className="text-white font-bold">{count}</h3>
      <h3 className="text-white font-bold">{number}</h3>
      <h3 className="text-white font-bold">Timer: {count}</h3>
      <button
        className="font-bold py-2 px-6 rounded-lg cursor-pointer text-white bg-blue-600"
        type="button"
        onClick={() => setCount(count + 1)}
      >
        Increment
      </button>
      <button
        className="font-bold py-2 px-6 rounded-lg cursor-pointer text-white bg-red-600"
        type="button"
        onClick={() => setNumber(number - 1)}
      >
        Decrement
      </button>

      <div className="flex flex-col items-center gap-2">
        <p className="text-white font-medium">
          {data ? data[0].title : "No data yet..."}
        </p>
      </div>
    </div>
  );
}
