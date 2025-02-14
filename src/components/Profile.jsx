import React from 'react'
import { LuCircleUserRound } from "react-icons/lu";

const Profile = ({user}) => {
	return (
		<>
			<button type='button' className='btn btn-sm btn-success rounded-pill dropdown-toggle' data-bs-toggle="dropdown" aria-expanded="false">
				<LuCircleUserRound size={25} />
			</button>
			<ul class="dropdown-menu end-0 start-auto shadow mt-1">
				<li><button type='button' className="dropdown-item" >{user.name}</button></li>
				<li><hr className="dropdown-divider" /></li>
				<li><button type='button' className="dropdown-item">{user.email}</button></li>
				
			</ul>
		</>
	)
}

export default Profile
