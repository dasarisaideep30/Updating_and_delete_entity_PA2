import { useState, useEffect } from "react";
import Item from "./Item";

const API_URI = "https://example.com/api"; // Replace with actual API

const ItemList = () => {
    const [items, setItems] = useState([]);
    const [error, setError] = useState(null);

    // Fetch items on mount
    useEffect(() => {
        const fetchItems = async () => {
            try {
                const response = await fetch(`${API_URI}/items`);
                if (!response.ok) throw new Error("Failed to fetch items");

                const data = await response.json();
                setItems(data);
            } catch (err) {
                setError(err.message);
            }
        };

        fetchItems();
    }, []);

    // Delete function
    const handleDelete = async (id) => {
        try {
            const response = await fetch(`${API_URI}/items/${id}`, { method: "DELETE" });
            if (!response.ok) throw new Error("Failed to delete item");

            setItems(items.filter(item => item.id !== id));
        } catch (err) {
            setError(err.message);
        }
    };

    // Edit function (Can be expanded later)
    const handleEdit = (id) => {
        console.log(`Editing item with ID: ${id}`);
    };

    return (
        <div>
            <h2>Item List</h2>
            {error && <p style={{ color: "red" }}>{error}</p>}
            <ul>
                {items.map((item) => (
                    <Item key={item.id} item={item} onDelete={handleDelete} onEdit={handleEdit} />
                ))}
            </ul>
        </div>
    );
};

export default ItemList;
