import { useEffect, useState } from "react";

export default function ItemsContextProvider() {
  const getItemsFromLocalStorage = JSON.parse(localStorage.getItem("items"));
  const [items, setItems] = useState(getItemsFromLocalStorage);

  function handleAddNewItem(itemName) {
    const newItem = {
      id: new Date().getTime(),
      name: itemName,
      packed: false,
    };
    setItems([...items, newItem]);
  }

  function handleDeleteItem(itemId) {
    const newItems = items.filter(({ id }) => id !== itemId);
    setItems(newItems);
  }

  function handleToggleItem(itemId) {
    const newItems = items.map((item) => {
      if (item.id === itemId) {
        return { ...item, packed: !item.packed };
      }
      return item;
    });
    setItems(newItems);
  }
  function handleRemoveAllItems() {
    setItems([]);
  }

  function handleResetToInitial() {
    setItems(initialItems);
  }

  function handleMarkAllAsComplete() {
    const itemsCompleted = items.map((item) => ({ ...item, packed: true }));
    setItems(itemsCompleted);
  }

  function handleMarkASIncomplete() {
    const itemsCompleted = items.map((item) => ({ ...item, packed: false }));
    setItems(itemsCompleted);
  }

  useEffect(() => {
    localStorage.setItem("items", JSON.stringify(items));
  }, [items]);
  return <div></div>;
}
