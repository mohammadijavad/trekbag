import Logo from "./logo";
import CountItem from "./count-item";
import { useContext } from "react";
import { itemsContext } from "../context/items-context-provider";
export default function Header() {
  const { items } = useContext(itemsContext);
  return (
    <header>
      <Logo />

      <CountItem
        totalItem={items.length}
        totalPackedItems={items.filter((item) => item.packed).length}
      />
    </header>
  );
}
