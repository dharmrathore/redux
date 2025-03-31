import React, { useState } from 'react'

import { useDispatch } from 'react-redux';
import { loginSuccess } from '.././redux/actions/authActions'
import { FiEye, FiEyeOff } from 'react-icons/fi';


const Login = () => {

	const dispatch = useDispatch();
	// const { isAuthenticated, user } = useSelector((state) => state.auth)

	const [passwordView, setPasswordView] = useState(false);
	const [showToast, setShowToast] = useState(false);


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


		if(!inValidpwd){
			// alert('Please enter a valid 10-digit number');
			setShowToast(true)
			setTimeout(() => setShowToast(false), 2000);
			return false;
        }
		// else{
		// 	console.log('Password number', password);
		// 	return true;
		// }
		console.log('Form Submitted:', formData);
		dispatch(loginSuccess(formData));

	}

	const handlePasswordVIew = () =>{
		console.log("passwordView", passwordView)
		setPasswordView(!passwordView);
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
				<div className="form-group position-relative">
					<>
						<label htmlFor="password">Password <sup>*</sup></label>
						{passwordView ? (
							<input type="text" id="password" name="password" value={formData.password} required className='form-control pe-4' onChange={handleChange}/>
						):(
							<input type="password" id="password" name="password" value={formData.password} required className='form-control pe-4' onChange={handleChange}/>
						)}
					</>
					<button className='btn btn-sm position-absolute top-0 end-0 mt-4 border-0 bg-transparent' type='button' onClick={handlePasswordVIew}>
						{passwordView ? (
							<FiEye size={20}/>
						):(
							<FiEyeOff size={20}/>
						)}
					</button>
					
				</div>
				<div className="form-group">
					<input type='submit' className='btn btn-success d-inline-block' name='Submit' value="Submit"/>
				</div>
			</form>

			{showToast && (
                <div className="toast align-items-center text-bg-danger border-0 show position-fixed top-0 end-0 m-3" role="alert" aria-live="assertive" aria-atomic="true">
                    <div className="d-flex">
                        <div className="toast-body">
                            Password must be at least 10 characters long and contain both letters and numbers.
                        </div>
                   
                    </div>
                </div>
            )}
		</>
	)
}

export default Login
