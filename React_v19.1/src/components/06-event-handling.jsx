import { useState } from "react";

export function EventHandling() {
  const handleClick = () => {
    alert("Hey i am clicked");
  };

  const handleMouseOver = () => {
    prompt("Enter your age");
  };

  const [value, setValue] = useState("Rafay");

  const handleChange = (e) => {
    setValue(e.target.value);
  };

  const [form, setForm] = useState({ email: "", phone: "" });

  const handleFormChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const [counter, setCounter] = useState(0);

  function incrementCounter(step) {
    setCounter((prev) => prev + step);
  }

  return (
    <div className="space-y-5 flex flex-col items-center">
      {/* On Click Event */}
      <div>
        <button
          className="text-white cursor-pointer font-medium px-8 py-2 bg-slate-600 rounded-lg"
          onClick={handleClick}
        >
          Click me
        </button>
      </div>

      {/* On mouseover Event */}
      <div
        onMouseOver={handleMouseOver}
        className="w-[150px] h-[150px] bg-red-600 rounded-lg cursor-pointer text-white font-medium flex items-center justify-center"
      >
        I am a red div.
      </div>

      {/* onChange Event */}
      <div>
        <input
          className="text-white rounded-lg border border-blue-600 outline-none py-2 px-4"
          type="text"
          value={value}
          onChange={handleChange}
        />
      </div>

      <div className="flex flex-col gap-2">
        <input
          className="text-white rounded-lg border border-blue-600 outline-none py-2 px-4"
          type="text"
          name="email"
          placeholder="email"
          value={form.name}
          onChange={handleFormChange}
        />
        <input
          className="text-white rounded-lg border border-blue-600 outline-none py-2 px-4"
          type="text"
          name="phone"
          placeholder="phone"
          value={form.phone}
          onChange={handleFormChange}
        />
      </div>

      {/* Passing Parameters to Handlers */}
      <div className="text-white font-medium flex flex-col items-center text-center">
        <p className="text-xl font-bold mb-2">{counter}</p>
        <div className="flex flex-col items-center gap-2">
          <button
            onClick={() => incrementCounter(1)}
            className="py-2 px-8 bg-blue-600 rounded-lg cursor-pointer text-white font-medium"
          >
            Increment Counter By 1
          </button>
          <button
            onClick={() => incrementCounter(2)}
            className="py-2 px-8 bg-blue-600 rounded-lg cursor-pointer text-white font-medium"
          >
            Increment Counter By 2
          </button>
        </div>
      </div>
    </div>
  );
}
