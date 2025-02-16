import React from 'react'
import { Link } from 'react-router-dom';
import { IoMdNotificationsOutline } from "react-icons/io";
import { LuLogOut } from "react-icons/lu";
import Profile from './Profile';
// import logo from '../images/logo.png';




const Header = ({logout, cartCount, user}) => {

    return (
        <>
            <div className='navbar justify-content-between w-100 p-0'>
                <Link to="/">
                    <img src="../images/logo.png" alt='logo' className='brand' width={44} height={44} />
                </Link>
               <ul className='d-flex  gap-2 align-items-center'>
                    <li> 
                        <button type='button' className="btn btn-sm d-flex align-items-center justify-content-center bg-white rounded-circle position-relative shadow-sm" onClick={()=>{ window.location.replace("/");logout()}}>
                        <LuLogOut size={20}/>

                        </button>
                    </li>
                    <li>
                        <button type='button' className="btn btn-sm d-flex align-items-center justify-content-center bg-white rounded-circle position-relative shadow-sm"><IoMdNotificationsOutline size={25} /> 
                            <small className='position-absolute top-0 end-0 text-danger'>{cartCount}</small>
                         </button>
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
