import React from 'react'
import { Link } from 'react-router-dom';
import { IoMdNotificationsOutline } from "react-icons/io";
import Profile from './profile/Profile';
import { useDispatch } from 'react-redux';



const Header = ({ logout, cartCount, user}) => {
    const dispatch = useDispatch();
    return (
        <>
            <div className='navbar justify-content-between w-100 p-0'>
                <Link to="/" className='fs-4'>
                Tracking
                </Link>
               <ul className='d-flex  gap-2 align-items-center'>
                    
                    <li>
                        <button type='button' className="btn btn-sm d-flex align-items-center justify-content-center bg-white rounded-circle position-relative shadow-sm"><IoMdNotificationsOutline size={25} /> 
                            <small className='position-absolute top-0 end-0 text-danger'>{cartCount}</small>
                         </button>
                    </li>
                    <li className='dropup-center '>
                        <Profile user={user} logout={() => dispatch(logout())}/>
                    </li>
               </ul>
            </div>
        </>
    )
}

export default Header
