import { useRef } from "react";

export function UnControlledComponents() {
  const emailRef = useRef();

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Email:", emailRef.current.value);
  };

  return (
    <form className="flex flex-col gap-2" onSubmit={handleSubmit}>
      <label className="text-white font-bold text-lg">Email:</label>
      <input
        type="email"
        className="text-white p-2 rounded-lg outline-none border border-blue-600"
        ref={emailRef}
      />
      <button
        type="submit"
        className="py-2 px-6 rounded-lg text-white bg-blue-600"
      >
        Submit
      </button>
    </form>
  );
}
