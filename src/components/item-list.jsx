export default function ItemList({items}){
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