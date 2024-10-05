import EmptyView from "./empty-view";
import { useMemo, useState } from "react";
import Select from "react-select";
import useItemContext from "../hooks/useItemContext";

const sortingOptions = [
  {
    label: "Sort by default",
    value: "default",
  },
  {
    label: "Sort by packed",
    value: "packed",
  },
  {
    label: "Sort by unpacked",
    value: "unpacked",
  },
];
export default function ItemList() {
  const { items, handleDeleteItem, handleToggleItem } = useItemContext();
  const [sortBy, setSortBy] = useState("default");

  const sortedItems = useMemo(
    () =>
      [...items].sort((a, b) => {
        if (sortBy === "packed") {
          return b.packed - a.packed;
        }

        if (sortBy === "unpacked") {
          return a.packed - b.packed;
        }
      }),
    [items, sortBy],
  );

  return (
    <ul className="item-list">
      {items.length === 0 ? <EmptyView /> : null}
      {items.length > 0 ? (
        <div className="sorting">
          <Select
            defaultValue={sortingOptions[0].value}
            onChange={(option) => setSortBy(option.value)}
            options={sortingOptions}
          />
        </div>
      ) : null}
      {sortedItems.length > 0 &&
        sortedItems.map((item) => (
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
