import React from 'react'
import { Link, useLocation } from 'react-router-dom'


const LinkItems =[
    {path: '/',label: 'Home'},
    {path: '/about',label: 'About'},
    {path: '/blog',label: 'Blog'},
    {path: '/contact',label: 'Contact'},
]


const Header = ({logout, cartCount}) => {

    const {pathname} = useLocation();

    return (
        <>
            <nav className='navbar justify-content-between w-100'>
                <ul className='navbar-nav flex-row gap-3'>

                    {LinkItems.map(({path, label})=>{
                        return (
                            <li key={path} className={`nav-item`}>
                                <Link to={path} className={`nav-link ${pathname === path? 'active': ''}`}>{label}</Link>
                            </li>
                        )
                    } )}

                    {/* <li className='nav-item'><Link className={`nav-link ${pathname === '/' ? 'active': ''}`} to="/" >Home</Link></li>
                    <li className='nav-item'><Link className={`nav-link ${pathname === '/about' ? 'active': ''}`} to="/about" >About</Link></li>
                    <li className='nav-item'><Link className={`nav-link ${pathname === '/blog' ? 'active': ''}`} to="/blog" >Blog</Link></li>
                    <li className='nav-item'><Link className={`nav-link ${pathname === '/contact' ? 'active': ''}`} to="/contact" >Contact</Link></li> */}
                </ul>
                <button className="btn btn-danger" onClick={()=>{ window.location.replace("/");logout()}}>Logout</button>
                <span className='badge bg-primary'>Card Item {cartCount} </span>
            </nav>
        </>
    )
}

export default Header
