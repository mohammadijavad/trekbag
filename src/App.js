import BackgroundHeading from "./components/background-heading";
import Footer from "./components/footer";
import Header from "./components/header";
import SideBar from "./components/side-bar";
import ItemList from "./components/item-list";
import {useState} from "react";
import {initialItems} from "./lib/constants";

function App() {
  const [items,setItems]=useState(initialItems)

  function addNewItem(itemName){
    const newItem = {
      id: new Date().getTime(),
      name: itemName,
      packed: false
    }
    setItems([...items,newItem])
  }
  return (
    <>
    <BackgroundHeading/>
      <main>
        <Header/>
        <ItemList items={items}  />
        <SideBar addNewItem={addNewItem} />
      </main>
      <Footer/>
    </>
  );
}

export default App;
