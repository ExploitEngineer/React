import React from "react";

export function Counter({ render }) {
  const [count, setCount] = React.useState(0);

  return render(count, () => setCount(count + 1));
}
