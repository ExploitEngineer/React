export function ConditionalRendering() {
  {
    /* If/Else in Jsx */
  }
  function Greeting() {
    let message;
    const isLoggedIn = true;
    if (isLoggedIn) {
      message = <h1 className="text-white font-bold text-xl">Welcome back!</h1>;
    } else {
      <h1>Please sign in.</h1>;
    }

    return <div>{message}</div>;
  }

  return (
    <div>
      <Greeting />

      {/* Ternary Operators in JSX */}
      {false ? (
        <h1>Welcome back!</h1>
      ) : (
        <h1 className="text-red-600 font-bold">Please sign in.</h1>
      )}

      {/* Logical && in JSX */}
      {true && (
        <div className="alert">
          <p className="text-white font-medium">🔔You have unread messages!</p>
          <button
            type="button"
            className="px-8 py-1 rounded-lg bg-amber-400 font-bold"
          >
            View
          </button>
        </div>
      )}
    </div>
  );
}
