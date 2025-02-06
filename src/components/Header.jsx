import React from 'react'
import { Link } from 'react-router-dom'

const Header = ({logout, cartCount}) => {
    return (
        <>
            <nav className='navbar justify-content-between w-100'>
                <ul className='navbar-nav flex-row gap-3'>
                    <li className='nav-item'><Link className='nav-link' to="/" >Home</Link></li>
                    <li className='nav-item'><Link className='nav-link' to="/about" >About</Link></li>
                    <li className='nav-item'><Link className='nav-link' to="/blog" >Blog</Link></li>
                    <li className='nav-item'><Link className='nav-link' to="/contact" >Contact</Link></li>
                </ul>
                <button className="btn btn-danger" onClick={logout}>Logout</button>
                <span className='badge bg-primary'>Card Item {cartCount} </span>
            </nav>
        </>
    )
}

export default Header
