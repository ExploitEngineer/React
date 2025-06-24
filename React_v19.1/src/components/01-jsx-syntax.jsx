export function JsxSyntax() {
  const name = "Rafay";
  const greeting = (
    <h1 className="text-white font-bold text-xl">Hello, {name}</h1>
  );

  return <>{greeting}</>;
}
