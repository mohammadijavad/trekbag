import AddItemForm from "./add-item-form";
import ButtonGroup from "./button-group";

export default function SideBar({handleAddNewItem}){
    return <div className='sidebar'>
        <AddItemForm  onAddItem={handleAddNewItem}/>
        <ButtonGroup/>
    </div>
}