export function ListsKeys() {
  {
    /* Rendering Lists in Jsx */
  }
  const fruits = ["Apple", "Banana", "Mango"];

  {
    /* Unique Keys */
  }
  const fruitsList = [
    { id: 1, name: "Apple" },
    { id: 2, name: "Banana" },
    { id: 3, name: "Mango" },
  ];

  {
    /* Map with jsx */
  }
  const users = ["Rafay", "Adeel", "Zara"];

  return (
    <div>
      <ul>
        {fruits.map((fruit) => (
          <li className="text-white font-medium">{fruit}</li>
        ))}
      </ul>

      <ul>
        {fruitsList.map((fruit) => {
          <li key={fruit.id} className="text-white font-medium">
            {fruit.name}
          </li>;
        })}
      </ul>

      <div>
        <h3 className="font-bold text-lime-600 text-xl">User List:</h3>
        <ul className="flex items-center gap-2">
          {users.map((user, idx) => {
            return (
              <li key={idx} className="text-white">
                {user}
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
}
