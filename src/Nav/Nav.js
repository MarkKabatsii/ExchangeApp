import React from 'react';
import './Nav.css';

class Nav extends React.Component {

    render() {
        return (
            <nav>
                <ul className="nav-list d-flex justify-content-between align-items-center">
                    <li className='nav-item'>
                        <a href="/" className="nav-link">Home</a>
                    </li>
                    <li className='nav-item'>
                        <a href="/about" className="nav-link">About us</a>
                    </li>
                    <li className='nav-item'>
                        <a href="/exchange" className="nav-link">Exchange</a>
                    </li>
                    <li className='nav-item'>
                        <a href="/contacts" className="nav-link">Graphic</a>
                    </li>
                    <li className='nav-item'>
                        <a href="/contacts" className="nav-link">Contact</a>
                    </li>
                </ul>
            </nav>
        )
    }
}

export default Nav;
