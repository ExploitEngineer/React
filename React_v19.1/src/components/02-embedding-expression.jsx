export function EmbeddingExpression() {
  const name = "rafay";
  const age = 21;

  return (
    <div className="text-white font-bold text-xl text-center">
      <h1>Hello, {name}!</h1>
      <p>You are {age} years old.</p>
      <p>Next year, you'll be {age + 1}.</p>
    </div>
  );
}
