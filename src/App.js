import BackgroundHeading from "./components/background-heading";
import Footer from "./components/footer";
import Header from "./components/header";
import SideBar from "./components/side-bar";
import ItemList from "./components/item-list";
import ItemsContextProvider from "./context/items-context-provider";

function App() {
  return (
    <>
      <BackgroundHeading />
      <main>
        <ItemsContextProvider>
          <Header />
          <ItemList />
          <SideBar />
        </ItemsContextProvider>
      </main>
      <Footer />
      <div></div>
    </>
  );
}

export default App;
