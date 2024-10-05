import Button from "./button";
import { useContext } from "react";
import { itemsContext } from "../context/items-context-provider";

export default function ButtonGroup() {
  const {
    handleMarkAllAsComplete,
    handleMarkASIncomplete,
    handleResetToInitial,
    handleRemoveAllItems,
  } = useContext(itemsContext);
  const secondaryButtons = [
    {
      text: "Mark all as complete",
      onClick: handleMarkAllAsComplete,
    },
    {
      text: "Mark all as incomplete",
      onClick: handleMarkASIncomplete,
    },
    {
      text: "Reset to initial",
      onClick: handleResetToInitial,
    },
    {
      text: "Remove all items",
      onClick: handleRemoveAllItems,
    },
  ];
  return (
    <section className="button-group">
      {secondaryButtons.map((button) => (
        <Button
          key={button.text + button.onClick.toString()}
          onClick={button.onClick}
          buttonType="secondary"
        >
          {button.text}
        </Button>
      ))}
    </section>
  );
}
