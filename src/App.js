import BackgroundHeading from "./components/background-heading";
import Footer from "./components/footer";
import Header from "./components/header";
import SideBar from "./components/side-bar";
import ItemList from "./components/item-list";
import { useState } from "react";
import { initialItems } from "./lib/constants";

function App() {
  const [items, setItems] = useState(initialItems);

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

  return (
    <>
      <BackgroundHeading />
      <main>
        <Header />
        <ItemList
          items={items}
          handleDeleteItem={handleDeleteItem}
          handleToggleItem={handleToggleItem}
        />
        <SideBar
          handleAddNewItem={handleAddNewItem}
          handleRemoveAllItems={handleRemoveAllItems}
          handleResetToInitial={handleResetToInitial}
          handleMarkAllAsComplete={handleMarkAllAsComplete}
          handleMarkASIncomplete={handleMarkASIncomplete}
        />
      </main>
      <Footer />
      <div></div>
    </>
  );
}

export default App;
