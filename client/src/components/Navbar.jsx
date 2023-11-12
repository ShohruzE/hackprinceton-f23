import React from 'react'
import '../styles/Navbar.css';
import '../styles/index.css';

import logo from "../../public/logo.png"

import { Link, Outlet } from 'react-router-dom';

const Navbar = () => {
  return (
    <main>
        <div className="Navbar">
            <nav>
                <ul className='title'>
                    <Link to="/"><h2>HoneyDo</h2></Link>
                    <Link to="/"><img src={logo} /></Link>
                </ul>
                <ul>
                </ul>
                <ul className='right-links'>
                    <Link to="/product">Product</Link>
                    <Link to="/pricing">Pricing</Link>
                </ul>
            </nav>
        </div>
        <Outlet />
    </main>
  )
}

export default Navbar