export function ConditionalRendering() {
  {
    /* If/Else in Jsx */
  }
  function Greeting() {
    let message;
    if (isLoggedIn) {
      message = <h1>Welcome back!</h1>;
    } else {
      <h1>Please sign in.</h1>;
    }

    return <div>{message}</div>;
  }

  return (
    <div>
      <Greeting />

      {/* Ternary Operators in JSX */}
      {true ? <h1>Welcome back!</h1> : <h1>Please sign in.</h1>}

      {/* Logical && in JSX */}
      {true && (
        <div className="alert">
          <p>🔔You have unread messages!</p>
          <button type="button">View</button>
        </div>
      )}
    </div>
  );
}
