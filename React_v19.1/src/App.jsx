import { JsxSyntax } from "./components/01-jsx-syntax";
import { EmbeddingExpression } from "./components/02-embedding-expression";
import { FunctionalComponents } from "./components/03-functional-components";
import { ClassComponents } from "./components/04-class-components";
import { Props } from "./components/05-props";
import { UseStateHook } from "./components/Hooks/useState";

export default function App() {
  return (
    <div className="w-full min-h-screen bg-zinc-800 flex items-center justify-center flex-col">
      <JsxSyntax />
      <hr className="h-1 my-5 bg-red-800 w-96" />
      <EmbeddingExpression />
      <hr className="h-1 my-5 bg-red-800 w-96" />
      <FunctionalComponents />
      <hr className="h-1 my-5 bg-red-800 w-96" />
      <ClassComponents />
      <hr className="h-1 my-5 bg-red-800 w-96" />
      <Props name="rafay" />
      <hr className="h-1 my-5 bg-red-800 w-96" />
      <UseStateHook />
    </div>
  );
}
