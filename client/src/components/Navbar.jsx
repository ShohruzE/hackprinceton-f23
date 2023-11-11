import React from 'react'
import '../styles/Navbar.css';
import '../styles/index.css';

import { Link, Outlet } from 'react-router-dom';

const Navbar = () => {
  return (
    <>
        <div className="Navbar">
            <nav>
                <ul>
                    <Link to="/">Home</Link>
                </ul>
                <ul className='right-links'>
                    <Link to="/product">Product</Link>
                    <Link to="/pricing">Pricing</Link>
                </ul>
            </nav>
            
        </div>
        <Outlet />
    </>

  )
}

export default Navbar