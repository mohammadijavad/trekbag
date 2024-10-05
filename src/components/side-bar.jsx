import AddItemForm from "./add-item-form";
import ButtonGroup from "./button-group";
import useItemContext from "../hooks/useItemContext";

export default function SideBar() {
  const { handleAddNewItem } = useItemContext();
  return (
    <div className="sidebar">
      <AddItemForm onAddItem={handleAddNewItem} />
      <ButtonGroup />
    </div>
  );
}
