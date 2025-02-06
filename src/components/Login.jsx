import React from 'react'

import { useDispatch, useSelector } from 'react-redux';
import { loginSuccess, logout } from '.././redux/actions/authActions'


const Login = (props) => {

	const dispatch = useDispatch();
	const { isAuthenticated, user } = useSelector((state) => state.auth)
	// console.log('login', loginSuccess)
	return (
		<div>
			{isAuthenticated ? (
				<>
					<h2>Welcome, {user.name}</h2>
					<button onClick={() => dispatch(logout())}>Logout</button>
				</>
			) : <button onClick={() => dispatch(loginSuccess({ name: 'Dharmendra' }))}>
					Login
				</button>
			}
		</div>
	)
}

export default Login
