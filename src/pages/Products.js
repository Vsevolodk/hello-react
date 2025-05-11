import React, { useEffect, useState } from 'react';

const Products = () => {
    const [items, setItems] = useState([]);

    useEffect(() => {
        fetch('https://fakestoreapi.com/products')
            .then(res => res.json())
            .then(setItems)
            .catch(console.error);
    }, []);

    return (
        <div>
            <h2>Products:</h2>
            {items.length === 0 ? (
                <p>Loading...</p>
            ) : (
                <ul>
                    {items.map(item => (
                        <li key={item.id}>
                            {item.title} — ${item.price}
                        </li>
                    ))}
                </ul>
            )}
        </div>
    );
};

export default Products;