import Button from "./button";

export default function ButtonGroup(){
const secondaryButtons = [
    {
        text: "Mark all as complete",
        onClick: () => console.log('i am work'),
    },
    {
        text: "Mark all as incomplete",
        onClick: () => console.log('i am work'),
    },
    {
        text: "Reset to initial",
        onClick: () => console.log('i am work'),
    },
    {
        text: "Remove all items",
        onClick: () => console.log('i am work'),
    },
];
return (
    <section className="button-group">
        {secondaryButtons.map((button) => (
            <Button
                key={button.text + button.onClick.toString()}
                text={button.text}
                onClick={button.onClick}
                buttonType="secondary"
            />
        ))}
    </section>
)
}