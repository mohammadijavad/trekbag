import Logo from "./logo";
import CountItem from "./count-item";
import useItemContext from "../hooks/useItemContext";
export default function Header() {
  const { items } = useItemContext();
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
