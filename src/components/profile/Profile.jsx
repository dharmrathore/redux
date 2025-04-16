import React, { useEffect, useRef, useState } from 'react'
import './profile.css'
import { Link } from 'react-router-dom'
import { LuLogOut } from "react-icons/lu";
import { GoChevronRight } from "react-icons/go";


const Profile = ({logout, user}) => {

	const [isProfile, setIsProfile] = useState(false);
	const profileRef = useRef(null);

	useEffect(() => {
		const handleClickOutside = (event) => {
			if (profileRef.current && !profileRef.current.contains(event.target)) {
				setIsProfile(false);
			}
		};
		document.addEventListener('mousedown', handleClickOutside);		
	}, [user]);



	return (
		<>
			<button type='button' className='btn btn-sm d-flex align-items-center justify-content-center bg-white rounded-circle position-relative shadow-sm dropdown-toggle' onClick={() => setIsProfile(!isProfile)}>
				<img src="images/user.jpg" alt="profile" className='rounded-circle img-fluid' width={40} height={40} />
			</button>

			{isProfile && (
			<div className="dropdown-menu end-0 start-auto shadow border-0 mt-1 p-2 show" ref={profileRef}>
				<div className="dropdown-item-text">
					<div className="d-flex align-items-center">
						<div className="avatar avatar-sm avatar-circle">
							<img src="images/user.jpg" alt="profile" className='rounded-circle img-fluid' width={40} height={40} />
						</div>
						<div className="flex-grow-1 ms-2">
							<h5 className="mb-0 fs-6 fw-semibold">{user.name}</h5>
							<p className="card-text text-body">{user.email}</p>
						</div>
					</div>
				</div>
				<div className="dropdown-divider"></div>
				<div className="dropdown">
					<button className="navbar-dropdown-submenu-item dropdown-item dropdown-toggle justify-content-between align-items-center d-flex" id="navSubmenuPagesAccountDropdown1" data-bs-toggle="dropdown" aria-expanded="false">Set status <GoChevronRight />
					</button>

					<div className="dropdown-menu right-outside start-auto shadow border-0 p-2" aria-labelledby="navSubmenuPagesAccountDropdown1">
						<Link className="dropdown-item btn" href="#">
							<span className="legend-indicator bg-success me-1"></span> Available
						</Link>
						<Link className="dropdown-item btn" href="#">
							<span className="legend-indicator bg-danger me-1"></span> Busy
						</Link>
						<Link className="dropdown-item btn" href="#">
							<span className="legend-indicator bg-warning me-1"></span> Away
						</Link>
						<div className="dropdown-divider"></div>
						<Link className="dropdown-item btn" href="#"> Reset status
						</Link>
					</div>
				</div>
				<Link className="dropdown-item btn" href="#">Profile &amp; account</Link>
				<Link className="dropdown-item btn" href="#">Settings</Link>
				<div className="dropdown-divider"></div>
				<Link className="dropdown-item btn" href="#">Manage team</Link>
				<div className="dropdown-divider"></div>
				<button type='button' className="dropdown-item align-items-center btn d-flex gap-1 justify-content-start position-relative" onClick={() => { window.location.replace("/"); logout(); localStorage.removeItem("formData") }}>
					<LuLogOut size={20} /> Logout
				</button>
			</div>
			)}
		</>
	)
}

export default Profile
