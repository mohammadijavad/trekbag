import BackgroundHeading from "./components/background-heading";
import Footer from "./components/footer";
import Header from "./components/header";
import SideBar from "./components/side-bar";
import ItemList from "./components/item-list";

function App() {
  return (
    <>
    <BackgroundHeading/>
      <main>
        <Header/>
        <ItemList/>
        <SideBar/>
      </main>
      <Footer/>
    </>
  );
}

export default App;
