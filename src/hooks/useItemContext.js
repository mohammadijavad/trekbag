import { useContext } from "react";
import { itemsContext } from "../context/items-context-provider";

export default function useItemContext() {
  const context = useContext(itemsContext);
  if (!context) {
    throw new Error(
      "did you import provider in your parent children component 🤔🤔",
    );
  }
  return context;
}
