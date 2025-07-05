import { useContext } from "react";
import { valueContext } from "./context";

export function ChildC() {
  const name = useContext(valueContext);
  console.log(name);
  return (
    <div className="flex flex-col items-center">
      <h1 className="text-white font-medium">Child C:</h1>
      <p className="text-white font-medium">My name is {name}</p>
    </div>
  );
}
