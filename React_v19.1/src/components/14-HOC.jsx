{
  /*
INFO: What is an HOC (Higher-Order Component) ?
A Higher-Order Component is a function that takes a component and returns a new component with added behavior.
*/
}

import { useState, useEffect } from "react";

const withLoader = (WrappedComponent) => {
  return (props) => {
    const [loading, setLoading] = useState(true);

    useEffect(() => {
      const timer = setTimeout(() => {
        setLoading(false);
      }, 3000);

      return () => clearTimeout(timer);
    }, []);

    return (
      <div>{loading ? <p>Loading...</p> : <WrappedComponent {...props} />}</div>
    );
  };
};

export default withLoader;
