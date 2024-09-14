import Button from "./button";
import {useState} from "react";

export default function AddItemForm({addNewItem}) {
    const [inputValue,setValue]=useState('')
    const [error, setError] = useState('')
    const hasError=error&&!inputValue.trim()
    function handleSubmitForm(e) {
        e.preventDefault()
        console.log()
        if (!inputValue?.trim()) {
            setError('input is required')
            return
        }
        addNewItem(inputValue)
        setValue('')
    }

    return <form onSubmit={handleSubmitForm}>
        <h2>Add an item</h2>
        <input className={hasError?"input-error":""}
        autoFocus={true} onChange={(e)=>setValue(e.target.value)} value={inputValue} />
        <Button>Add to list</Button>
    </form>
}