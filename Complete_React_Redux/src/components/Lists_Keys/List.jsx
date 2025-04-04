export default function List({ items, Category }) {

    const itemList = items;
    const category = Category;

    // fruits.sort((a, b) => a.name.localeCompare(b.name)); // ALPHABETICAL
    // fruits.sort((a, b) => b.name.localeCompare(a.name)); // REVERSE ALPHABETICAL
    // fruits.sort((a, b) => a.calories - b.calories); // NUMERIC ORDER
    // fruits.sort((a, b) => b.calories.a.calories); // REVERSE NUMERIC ORDER

    const lowCalFruits = itemList.filter(item => item.calories < 100)

    const listItems = lowCalFruits.map((lowCalFruit) => <li key={lowCalFruit.id}>{lowCalFruit.name} : &nbsp; {lowCalFruit.calories}</li>)

    return (
        <>
            <h3>{category}</h3>
            <ul>{listItems}</ul>
        </>
    );
};
