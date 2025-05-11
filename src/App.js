import React from 'react';
import { Routes, Route, Link } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import Products from './pages/Products';

const App = () => {
    return (
        <div style={{ padding: 20 }}>
            <nav style={{ marginBottom: 20 }}>
                <Link to="/" style={{ marginRight: 10 }}>Home</Link>
                <Link to="/about" style={{ marginRight: 10 }}>About</Link>
                <Link to="/products">Products</Link>
            </nav>

            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/about" element={<About />} />
                <Route path="/products" element={<Products />} />
            </Routes>
        </div>
    );
};

export default App;