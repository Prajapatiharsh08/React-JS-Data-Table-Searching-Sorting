import React from 'react';
import { Outlet, Link } from 'react-router-dom';

export default function Product() {

    const jewellery = {
        display: 'flex',
        justifyContent: 'space-around',
    };

    const linkStyle = {
        color: 'black',
        fontSize: '18px',
        textDecoration: 'none',
    };

    return (
        <div>
            <div style={jewellery}>
                <Link to='Electronics' style={linkStyle}>Electronics</Link>
                <Link to='Jewellery' style={linkStyle}>Jewellery</Link>
            </div>
            <div>
                <Outlet />
            </div>
        </div>
    );
}
