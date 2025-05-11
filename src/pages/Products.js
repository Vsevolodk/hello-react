import React, { useEffect, useState } from 'react';
import {
    Grid,
    Card,
    CardMedia,
    CardContent,
    Typography,
    CircularProgress,
    Container
} from '@mui/material';

const Products = () => {
    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        fetch('https://fakestoreapi.com/products')
            .then((res) => res.json())
            .then((data) => {
                setProducts(data);
                setLoading(false);
            })
            .catch((err) => {
                console.error('Error loading products:', err);
                setLoading(false);
            });
    }, []);

    if (loading) {
        return (
            <Container sx={{ textAlign: 'center', mt: 10 }}>
                <CircularProgress />
                <Typography variant="h6" mt={2}>Загрузка товаров...</Typography>
            </Container>
        );
    }

    return (
        <Container sx={{ mt: 4 }}>
            <Typography variant="h4" gutterBottom>Каталог товаров</Typography>
            <Grid container spacing={3}>
                {products.map((product) => (
                    <Grid item key={product.id} xs={12} sm={6} md={4} lg={3}>
                        <Card sx={{ height: '100%', display: 'flex', flexDirection: 'column' }}>
                            <CardMedia
                                component="img"
                                image={product.image}
                                alt={product.title}
                                sx={{ objectFit: 'contain', height: 200, p: 2 }}
                            />
                            <CardContent>
                                <Typography variant="subtitle1" gutterBottom>{product.title}</Typography>
                                <Typography variant="body2" color="text.secondary">{product.description.slice(0, 100)}...</Typography>
                                <Typography variant="h6" sx={{ mt: 1 }}>${product.price}</Typography>
                            </CardContent>
                        </Card>
                    </Grid>
                ))}
            </Grid>
        </Container>
    );
};

export default Products;