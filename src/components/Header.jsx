import React from 'react'
import { Link } from 'react-router-dom';
import { IoMdNotificationsOutline } from "react-icons/io";
import { MdOutlineLogout } from "react-icons/md";
import Profile from './Profile';





const Header = ({logout, cartCount, user}) => {

    return (
        <>
            <div className='navbar justify-content-between w-100 p-0'>
                <Link to="/">
                    Appy pie
                </Link>
               <ul className='d-flex  gap-3 align-items-center'>
                    <li> 
                        <button type='button' className="btn btn-danger btn-sm rounded-pill" onClick={()=>{ window.location.replace("/");logout()}}>
                            <MdOutlineLogout size={25} />
                        </button>
                    </li>
                    <li>
                        <button type='button' className="btn btn-primary btn-sm rounded-pill"><IoMdNotificationsOutline size={25} /> {cartCount} </button>
                    </li>
                    <li className='dropup-center '>
                        <Profile user={user}/>
                    </li>
               </ul>
            </div>
        </>
    )
}

export default Header
