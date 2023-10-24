import { ItemId } from "../App";

interface ItemProps {
    id: ItemId,
    text: string,
    handleClick: () => void,
}

export function Item ({ id, text, handleClick }: ItemProps) {

    return (
        <li key={id}>
            {text}
            <button onClick={handleClick}>
                Delete
            </button>
        </li>
    )
}