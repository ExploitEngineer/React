{
  /* 
INFO: useContext Hook:
It's a react hook that let's you share data globally accross your component tree - without passing props manually at every level.

NOTE: You can have to remember three things to use the useContext hook.
// create, provider, useContext
*/
}

import { valueContext } from "./context";
import { ChildA } from "./childA";

export function Parent() {
  const name = "whoami";

  return (
    <div className="flex flex-col items-center">
      <h1 className="text-white font-medium">Parent</h1>
      <valueContext.Provider value={name}>
        <ChildA />
      </valueContext.Provider>
    </div>
  );
}
