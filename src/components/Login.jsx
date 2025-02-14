import React, { useState } from 'react'

import { useDispatch } from 'react-redux';
import { loginSuccess } from '.././redux/actions/authActions'


const Login = () => {

	const dispatch = useDispatch();
	// const { isAuthenticated, user } = useSelector((state) => state.auth)

	const [formData,setFormData] = useState({
		name: '',
        email: '',
        password: ''
	})


	const handleChange = (e) => {
		//console.log('value', e.target.value)
		const {name , value} = e.target
       // setFormData({...formData, [e.target.name]: e.target.value });
	   setFormData( (prevDate)=>({
		...prevDate,
		[name]:value,
	   }) );
    }

	// console.log('login', loginSuccess)

	const handleSubmit = (e) =>{
		e.preventDefault();
		
		localStorage.setItem('formData', JSON.stringify(formData));

		const password = formData.password;
		const inValidpwd = password.length >= 10 && /[a-zA-Z]/.test(password) && /\d/.test(password);


		if(inValidpwd){
			console.log('Form Submitted:', formData);
			dispatch(loginSuccess(formData));
        }
		else{
			console.log('Password number', password)
		}

	}


	return (
		// <div>
		// 	{isAuthenticated ? (
		// 		<>
		// 			<h2>Welcome, {user.name}</h2>
		// 			<button onClick={() => dispatch(logout())}>Logout</button>
		// 		</>
		// 	) : <button onClick={() => dispatch(loginSuccess({ name: 'Dharmendra' }))}>
		// 			Login
		// 		</button>
		// 	}
		// </div>
		<>
		

			<form onSubmit={handleSubmit} method='POST' className='d-flex w-100 flex-column gap-3 border rounded-3 p-4 bg-gradient bg-light'>
				<div className="form-group">
					<label htmlFor="name">Name <sup>*</sup></label>
                    <input type="name" id="name" name="name" value={formData.name} required className='form-control' onChange={handleChange} />
				</div>
				<div className="form-group">
					<label htmlFor="email">Email <sup>*</sup></label>
                    <input type="email" id="email" name="email" value={formData.email} required className='form-control' onChange={handleChange}/>
				</div>
				<div className="form-group">
					<label htmlFor="password">Password <sup>*</sup></label>
                    <input type="password" id="password" name="password" value={formData.password} required className='form-control' onChange={handleChange}/>
				</div>
				<div className="form-group">
					<input type='submit' className='btn btn-success d-inline-block' name='Submit' value="Submit"/>
				</div>
			</form>
		</>
	)
}

export default Login
