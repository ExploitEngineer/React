{
  /* 
INFO: What is useReducer Hook ?
useReducer is a React hook that helps you manage and update state in a more organized way - especially when your state is a bit complicated.

NOTE: What do we use useReducer ?
1. The state is complex (like an object or array)
2. You need to perform different actions (like add, update, delete)
3. Or when state changes depend on the previous state.

NOTE: Syntax:
const [state, dispatch] = useReducer(reducer, initialState);

1. State
The current value of your data.
For example, if you're making  a counter, state could be { count: 0 }
You use this to display things in your UI, like
<h2>Count: {state.count}</h2>

2. dispatch
This is a function
You call it when you want to change the state.
Instead of changing state directly (like in useState), you send a message, like:
dispatch({type: "increment"})
Think of dispatch like sending a command to a robot to do something.

What is an Action ?
An action is just a javascript object that tells the reducer what happened or what we want to do.
It usually looks like this:
{type: "increment"}
You can also pass extra data:
{type: "addTodo", payload: "Learn useReducer"}

3. reducer (function)
This is where you write the logic for what should happen when different actions are sent.
It looks at:
The current state
The action you sent
Then it returns the new state.

4. InitialState
Initialvalue that you will provide
*/
}

import { useReducer } from "react";

export function UseReducer() {
  const initialState = {
    count: 0,
  };

  const reducerFn = (state, action) => {
    switch (action.type) {
      case "increment":
        return { count: state.count + 1 };
      case "derement":
        return { count: state.count - 1 };
      case "reset":
        return { count: 0 };
      default:
        return state;
    }
  };

  const [state, dispatch] = useReducer(reducerFn, initialState);

  return (
    <div className="flex flex-col items-center gap-3">
      <p className="text-white font-bold">{state.count}</p>
      <button
        onClick={() => dispatch({ type: "increment" })}
        type="button"
        className="py-2 px-6 bg-blue-500 rounded-lg cursor-pointer text-white font-medium"
      >
        Increment
      </button>
      <button
        onClick={() => dispatch({ type: "derement" })}
        type="button"
        className="py-2 px-6 bg-orange-500 rounded-lg cursor-pointer text-white font-medium"
      >
        Derement
      </button>
      <button
        onClick={() => dispatch({ type: "reset" })}
        type="button"
        className="py-2 px-6 bg-red-500 rounded-lg cursor-pointer text-white font-medium"
      >
        Reset
      </button>
    </div>
  );
}
