import {useState} from "react";
import {initialItems} from "../lib/constants";

export default function ItemList(){
    const [items,setItems]=useState(initialItems)
    return <div className='item-list'>
        {items.map((item)=><Item key={item.id} {...item} />)}
    </div>
}


function Item({packed=false,name=''}){
    return (
        <li className="item">
            <label>
                <input
                    checked={packed}
                    type="checkbox"
                />{" "}
                {name}
            </label>

            <button >❌</button>
        </li>
    )
}