import BackgroundHeading from "./components/background-heading";
import Footer from "./components/footer";
import Header from "./components/header";
import SideBar from "./components/side-bar";
import ItemList from "./components/item-list";
import {useState} from "react";
import {initialItems} from "./lib/constants";

function App() {
  const [items,setItems]=useState(initialItems)

  return (
    <>
    <BackgroundHeading/>
      <main>
        <Header/>
        <ItemList items={items}  />
        <SideBar setItems={setItems} />
      </main>
      <Footer/>
    </>
  );
}

export default App;
