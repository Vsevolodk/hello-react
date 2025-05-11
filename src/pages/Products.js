import React, { useEffect, useState } from 'react';
import {
    Card,
    CardHeader,
    Text,
    FlexBox,
    FlexBoxDirection,
    Title
} from '@ui5/webcomponents-react';

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
            <Title level="H3">Products</Title>
            <FlexBox wrap style={{ gap: '1rem' }}>
                {items.map(item => (
                    <Card key={item.id} style={{ width: '250px' }}>
                        <CardHeader
                            titleText={item.title}
                            subtitleText={`$${item.price}`}
                        />
                        <img src={item.image} alt={item.title} style={{ height: 150, objectFit: 'contain', margin: '1rem auto' }} />
                        <div style={{ padding: '0 1rem 1rem' }}>
                            <Text>{item.description.slice(0, 100)}...</Text>
                        </div>
                    </Card>
                ))}
            </FlexBox>
        </div>
    );
};

export default Products;