import Button from "./button";
import { useContext, useState } from "react";
import { itemsContext } from "../context/items-context-provider";

export default function AddItemForm({ onAddItem }) {
  const [inputValue, setValue] = useState("");
  const [error, setError] = useState("");
  const hasError = error && !inputValue.trim();
  function handleSubmitForm(e) {
    e.preventDefault();
    console.log();
    if (!inputValue?.trim()) {
      setError("input is required");
      return;
    }
    onAddItem(inputValue);
    setValue("");
  }

  return (
    <form onSubmit={handleSubmitForm}>
      <h2>Add an item</h2>
      <input
        className={hasError ? "input-error" : ""}
        autoFocus={true}
        onChange={(e) => setValue(e.target.value)}
        value={inputValue}
      />
      <Button>Add to list</Button>
    </form>
  );
}
