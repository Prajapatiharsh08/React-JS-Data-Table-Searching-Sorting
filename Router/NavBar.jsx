import React from 'react';
import { Link } from 'react-router-dom';

export default function NavBar() {

    return (

        <div style={{ padding: '10px'}}>
            <Link to='/Home' style={{ textDecoration: 'none', color : 'black'}}>Home</Link> &nbsp;&nbsp;
            <Link to='/About' style={{ textDecoration: 'none', color: 'black' }}>About</Link>&nbsp;&nbsp;
            <Link to='/Contact' style={{ textDecoration: 'none', color: 'black' }}>Contact</Link>&nbsp;&nbsp;
            <Link to='/Product' style={{ textDecoration: 'none', color: 'black' }}>Products</Link>&nbsp;&nbsp;
        </div>
    );
}
