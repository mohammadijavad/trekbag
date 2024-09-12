import AddItemForm from "./add-item-form";
import ButtonGroup from "./button-group";

export default function SideBar(){
    return <div className='sidebar'>
        <AddItemForm/>
        <ButtonGroup/>
    </div>
}