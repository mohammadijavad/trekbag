import Logo from "./logo";
import CountItem from "./count-item";
import {items} from "../stores/item-store"
export default function Header(){
    return <header>
        <Logo/>
        <CountItem totalItem={items.length}/>
    </header>
}