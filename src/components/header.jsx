import Logo from "./logo";
import CountItem from "./count-item";
import { useTreksStore } from "../store/trek-store";

export default function Header() {
  const { items } = useTreksStore();
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
