interface ItemProps {
    text: string,
    handleClick: () => void,
};

export function Item ({ text, handleClick }: ItemProps) {

    return (
        <li>
            {text}
            <button onClick={handleClick}>
                Delete
            </button>
        </li>
    )
};