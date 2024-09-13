import Button from "./button";
import {useState} from "react";

export default function AddItemForm({setItems}) {
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
        const newItem = {
            id: new Date().getTime(),
            name: inputValue,
            packed: false
        }
        setItems((prev)=>[...prev,newItem])
        setValue('')
    }

    return <form onSubmit={handleSubmitForm}>
        <h2>Add an item</h2>
        <input className={hasError?"input-error":""}
        autoFocus={true} onChange={(e)=>setValue(e.target.value)} value={inputValue} />
        <Button>Add to list</Button>
    </form>
}