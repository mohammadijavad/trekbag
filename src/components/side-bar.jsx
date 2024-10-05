import AddItemForm from "./add-item-form";
import ButtonGroup from "./button-group";
import { useContext } from "react";
import { itemsContext } from "../context/items-context-provider";

export default function SideBar() {
  const { handleAddNewItem } = useContext(itemsContext);
  return (
    <div className="sidebar">
      <AddItemForm onAddItem={handleAddNewItem} />
      <ButtonGroup />
    </div>
  );
}
