import React from 'react'
import './profile.css'

const Profile = ({user}) => {
	return (
		<>
			<button type='button' className='btn btn-sm d-flex align-items-center justify-content-center bg-white rounded-circle position-relative shadow-sm dropdown-toggle' data-bs-toggle="dropdown" aria-expanded="false">
				<img src="images/user.jpg" alt="profile" className='rounded-circle img-fluid' width={40} height={40}/>
			</button>
			<div className="dropdown-menu end-0 start-auto shadow border-0 mt-1">
				<div className="dropdown-item-text">
					<div className="d-flex align-items-center">
						<div className="avatar avatar-sm avatar-circle">
							<img src="images/user.jpg" alt="profile" className='rounded-circle img-fluid' width={40} height={40}/>
						</div>
						<div className="flex-grow-1 ms-3">
							<h5 className="mb-0 fs-6 fw-semibold">{user.name}</h5>
							<p className="card-text text-body">{user.email}</p>
						</div>
					</div>
                </div>
				<div class="dropdown-divider"></div>
		
				
			</div>
		</>
	)
}

export default Profile
