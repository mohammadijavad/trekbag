import AddItemForm from "./add-item-form";
import ButtonGroup from "./button-group";

export default function SideBar({addNewItem}){
    return <div className='sidebar'>
        <AddItemForm  addNewItem={addNewItem}/>
        <ButtonGroup/>
    </div>
}