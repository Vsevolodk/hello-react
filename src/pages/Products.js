// src/pages/Products.js

import React, { useEffect, useState } from "react";
import {
    Card,
    CardHeader,
    FlexBox,
    FlexBoxDirection,
    Title,
    Text,
    Grid,
    GridPosition,
    BusyIndicator
} from "@ui5/webcomponents-react";

export const Products = () => {
    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        fetch("https://fakestoreapi.com/products")
            .then((res) => res.json())
            .then((data) => {
                setProducts(data);
                setLoading(false);
            })
            .catch((err) => {
                console.error("Ошибка загрузки данных:", err);
                setLoading(false);
            });
    }, []);

    if (loading) {
        return (
            <FlexBox direction={FlexBoxDirection.Column} style={{ padding: "2rem", alignItems: "center" }}>
                <BusyIndicator active />
                <Text>Загрузка товаров...</Text>
            </FlexBox>
        );
    }

    return (
        <div style={{ padding: "2rem" }}>
            <Title level="H2">Каталог товаров</Title>

            <Grid defaultSpan="XL3 L4 M6 S12" position={GridPosition.Center} style={{ marginTop: "1rem" }}>
                {products.map((product) => (
                    <Card
                        key={product.id}
                        header={
                            <CardHeader
                                titleText={product.title}
                                subtitleText={`Цена: $${product.price}`}
                            />
                        }
                        style={{ height: "100%" }}
                    >
                        <FlexBox direction={FlexBoxDirection.Column} style={{ alignItems: "center", padding: "1rem" }}>
                            <img
                                src={product.image}
                                alt={product.title}
                                style={{ width: "100%", maxHeight: "200px", objectFit: "contain", marginBottom: "1rem" }}
                            />
                            <Text style={{ textAlign: "center" }}>{product.description}</Text>
                        </FlexBox>
                    </Card>
                ))}
            </Grid>
        </div>
    );
};