import { useState } from "react";

export function UseStateForm() {
  const [form, setForm] = useState({
    username: "",
    password: "",
  });

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };
  return (
    <form className="flex flex-col gap-2">
      <input
        type="text"
        name="username"
        className="p-2 rounded-lg text-white outline-none border border-blue-600"
        value={form.username}
        onChange={handleChange}
      />
      <input
        type="password"
        name="password"
        className="p-2 rounded-lg text-white outline-none border border-amber-600"
        value={form.password}
        onChange={handleChange}
      />
      <p className="text-white font-medium text-lg">
        {form.username} / {form.password}
      </p>
    </form>
  );
}
