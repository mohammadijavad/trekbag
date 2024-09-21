import EmptyView from "./empty-view";

export default function ItemList({
  items,
  handleDeleteItem,
  handleToggleItem,
}) {
  return (
    <ul className="item-list">
      {items.length === 0 ? <EmptyView /> : null}
      {items.length > 0 &&
        items.map((item) => (
          <Item
            key={item.id}
            {...item}
            handleDeleteItem={handleDeleteItem}
            handleToggleItem={handleToggleItem}
          />
        ))}
    </ul>
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
