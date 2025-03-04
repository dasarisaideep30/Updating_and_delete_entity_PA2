import Item from "./Item";

const ItemList = ({ items }) => {
    // your code here
    return (
        <>
            {items.map((item) => (
                <Item key={item.id} item={item} />
            ))}
        </>
    );
};

export default ItemList;
