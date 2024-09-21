export default function CountItem({ totalItem, totalPackedItems }) {
  return (
    <p>
      <b>{totalPackedItems}</b> / <b>{totalItem}</b> <span>items packed</span>
    </p>
  );
}
