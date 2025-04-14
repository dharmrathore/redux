import React from 'react'
import { Link, useLocation } from 'react-router-dom';
import { MdOutlineSpaceDashboard } from "react-icons/md";
import { GrContactInfo } from "react-icons/gr";
import { TbBookmarkEdit } from "react-icons/tb";
import { MdOutlineContactPhone } from "react-icons/md";
import { RiCustomerService2Line } from "react-icons/ri";



const LinkItems = [
    { path: '/', label: 'Dashboard', icons: <MdOutlineSpaceDashboard /> },
    { path: '/about', label: 'About', icons: <GrContactInfo /> },
    { path: '/blog', label: 'Blog', icons: <TbBookmarkEdit />},
    { path: '/service', label: 'Service', icons: <RiCustomerService2Line />},
    { path: '/contact', label: 'Contact', icons: <MdOutlineContactPhone />},
]


const Navbar = () => {
    const { pathname } = useLocation();
    return (
        <>
            <ul className='navbar-nav flex-column text-center align-items-center justify-content-center gap-3'>
                {LinkItems.map(({ path, label, icons }) => {
                    return (
                        <li key={path} className={`nav-item w-100`}>
                            <Link to={path} className={`nav-link w-100 ${pathname === path ? 'active' : ''}`}>
                               <span className='fs-4 d-flex align-items-center justify-content-center'> {icons}</span>
                                {label}
                            </Link>
                        </li>
                    )
                })}
            </ul>
        </>
    )
}

export default Navbar
