import React from 'react'
import { FaRegUser } from "react-icons/fa";

const Profile = ({user}) => {
	return (
		<>
			<button type='button' className='btn btn-sm d-flex align-items-center justify-content-center bg-white rounded-circle position-relative shadow-sm dropdown-toggle' data-bs-toggle="dropdown" aria-expanded="false">
			<FaRegUser size={18} />
			</button>
			<ul className="dropdown-menu end-0 start-auto shadow mt-1">
				<li><button type='button' className="dropdown-item" >{user.name}</button></li>
				<li><hr className="dropdown-divider" /></li>
				<li><button type='button' className="dropdown-item">{user.email}</button></li>
				
			</ul>
		</>
	)
}

export default Profile
