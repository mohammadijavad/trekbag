import AddItemForm from "./add-item-form";
import ButtonGroup from "./button-group";

export default function SideBar({setItems}){
    return <div className='sidebar'>
        <AddItemForm  setItems={setItems}/>
        <ButtonGroup/>
    </div>
}