import { JsxSyntax } from "./components/01-jsx-syntax";
import { EmbeddingExpression } from "./components/02-embedding-expression";
import { FunctionalComponents } from "./components/03-functional-components";
import { ClassComponents } from "./components/04-class-components";
import { Props } from "./components/05-props";
import { UseStateHook } from "./components/Hooks/useState";
import { EventHandling } from "./components/06-event-handling";
import { ConditionalRendering } from "./components/07-conditional-rendering";
import { ListsKeys } from "./components/08-lists-&-keys";
import { ControlledComponent } from "./components/09-controlled-components";
import { UnControlledComponents } from "./components/10-uncontrolled-components";

export default function App() {
  return (
    <div className="w-full min-h-screen bg-zinc-800 flex items-center justify-center flex-col py-10">
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
      <hr className="h-1 my-5 bg-red-800 w-96" />
      <EventHandling />
      <hr className="h-1 my-5 bg-red-800 w-96" />
      <ConditionalRendering />
      <hr className="h-1 my-5 bg-red-800 w-96" />
      <ListsKeys />
      <hr className="h-1 my-5 bg-red-800 w-96" />
      <ControlledComponent />
      <hr className="h-1 my-5 bg-red-800 w-96" />
      <UnControlledComponents />
    </div>
  );
}
