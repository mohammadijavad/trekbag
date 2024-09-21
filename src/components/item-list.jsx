export default function ItemList({
  items,
  handleDeleteItem,
  handleToggleItem,
}) {
  return (
    <div className="item-list">
      {items.map((item) => (
        <Item
          key={item.id}
          {...item}
          handleDeleteItem={handleDeleteItem}
          handleToggleItem={handleToggleItem}
        />
      ))}
    </div>
  );
}

function Item({
  id,
  packed = false,
  name = "",
  handleDeleteItem,
  handleToggleItem,
}) {
  return (
    <li className="item">
      <label>
        <input
          checked={packed}
          onChange={() => handleToggleItem(id)}
          type="checkbox"
        />{" "}
        {name}
      </label>

      <button onClick={() => handleDeleteItem(id)}>❌</button>
    </li>
  );
}
