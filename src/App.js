import React, { useState } from 'react';
import { useNavigate, Routes, Route, useLocation } from 'react-router-dom';
import {
    ShellBar,
    Avatar,
    SideNavigation,
    SideNavigationItem,
    FlexBox,
    FlexBoxDirection
} from '@ui5/webcomponents-react';

import Home from './pages/Home';
import About from './pages/About';
//import Products from './pages/Products';
import { Products } from './pages/Products';

const App = () => {
    const navigate = useNavigate();
    const location = useLocation();
    const [selectedKey, setSelectedKey] = useState(location.pathname);

    const handleSelectionChange = (event) => {
        const selected = event.detail.item.dataset.key;
        setSelectedKey(selected);
        navigate(selected);
    };

    return (
        <>
            <ShellBar
                primaryTitle="Fiori Demo"
                profile={<Avatar initials="VS" />}
                onLogoClick={() => navigate('/')}
            />

            <FlexBox direction={FlexBoxDirection.Row} style={{ height: 'calc(100vh - 3rem)' }}>
                <SideNavigation onSelectionChange={handleSelectionChange} selectedKey={selectedKey}>
                    <SideNavigationItem text="Home" icon="home" data-key="/" />
                    <SideNavigationItem text="About" icon="hint" data-key="/about" />
                    <SideNavigationItem text="Products" icon="product" data-key="/products" />
                </SideNavigation>

                <div
                    style={{
                        padding: '1rem',
                        flexGrow: 1,
                        overflowY: 'auto',
                        overflowX: 'hidden',
                        maxWidth: '100%',
                        boxSizing: 'border-box',
                        height: '100%',
                    }}
                >
                    <Routes>
                        <Route path="/" element={<Home />} />
                        <Route path="/about" element={<About />} />
                        <Route path="/products" element={<Products />} />
                    </Routes>
                </div>
            </FlexBox>
        </>
    );
};

export default App;