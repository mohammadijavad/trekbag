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

  function handleDeleteItem(id) {}
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
        <ItemList items={items} />
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
