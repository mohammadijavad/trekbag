import AddItemForm from "./add-item-form";
import ButtonGroup from "./button-group";
import { useTreksStore } from "../store/trek-store";

export default function SideBar() {
  const { handleAddNewItem } = useTreksStore();
  return (
    <div className="sidebar">
      <AddItemForm onAddItem={handleAddNewItem} />
      <ButtonGroup />
    </div>
  );
}
