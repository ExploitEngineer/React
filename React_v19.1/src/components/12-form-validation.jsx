import { useState } from "react";

export function FormValidation() {
  const [email, setEmail] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!email.includes("@")) {
      setError("Invalid email address");
    } else {
      setError("");
      alert("Form submitted!");
    }
  };
  return (
    <form className="flex flex-col gap-2" onSubmit={handleSubmit}>
      <input
        type="email"
        className="text-white outline-none p-2 border border-blue-600 rounded-lg"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      {error && <p className="text-red-600">{error}</p>}
      <button
        type="submit"
        className="py-2 px-6 rounded-lg text-white font-bold bg-green-600"
      >
        Submit
      </button>
    </form>
  );
}
