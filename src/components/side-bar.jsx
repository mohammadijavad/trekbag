import AddItemForm from "./add-item-form";
import ButtonGroup from "./button-group";

export default function SideBar({
  handleAddNewItem,
  handleRemoveAllItems,
  handleResetToInitial,
  handleMarkAllAsComplete,
  handleMarkASIncomplete,
}) {
  return (
    <div className="sidebar">
      <AddItemForm onAddItem={handleAddNewItem} />
      <ButtonGroup
        handleRemoveAllItems={handleRemoveAllItems}
        handleResetToInitial={handleResetToInitial}
        handleMarkAllAsComplete={handleMarkAllAsComplete}
        handleMarkASIncomplete={handleMarkASIncomplete}
      />
    </div>
  );
}
