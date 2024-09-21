import Logo from "./logo";
import CountItem from "./count-item";
export default function Header({ totalItems, totalPackedItems }) {
  return (
    <header>
      <Logo />
      {totalItems > 0 && (
        <CountItem totalItem={totalItems} totalPackedItems={totalPackedItems} />
      )}
    </header>
  );
}
