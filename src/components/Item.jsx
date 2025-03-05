const Item = ({ item, onDelete, onEdit }) => {
    return (
        <li>
            {item.name}
            <button onClick={() => onEdit(item.id)}>Edit</button>
            <button onClick={() => onDelete(item.id)}>Delete</button>
        </li>
    );
};

export default Item;
