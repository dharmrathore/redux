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
		let data = localStorage.getItem('formData2');
		data = data ? JSON.parse(data) : [];

		// Create a new Date object and format it properly
		const now = new Date();
		const userData = {
			...formData,
			loginTime: now.toISOString() // Store as ISO string
		};

		localStorage.setItem('formData', JSON.stringify(userData));

		const password = formData.password;
		const inValidpwd = password.length >= 10 && /[a-zA-Z]/.test(password) && /\d/.test(password);

		if(!inValidpwd){
			setShowToast(true)
			setTimeout(() => setShowToast(false), 2000);
			return false;
		}
		console.log('Form Submitted:', userData);
		data.push(userData);

		localStorage.setItem('formData2', JSON.stringify(data));
		dispatch(loginSuccess(userData));
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
		<div className="container-fluid vh-100">
			<div className="row h-100">
				{/* Left side with image */}
				<div className="col-md-6 d-none d-md-flex align-items-center justify-content-center bg-primary">
					<div className="text-center text-white p-5">
						<h1 className="display-4 mb-2">Welcome Back!</h1>
						<p className="lead">Sign in to continue your journey with us</p>
						<img 
							src="https://img.freepik.com/free-vector/secure-login-concept-illustration_114360-4685.jpg" 
							alt="Login Illustration" 
							className="img-fluid mt-3 img-thumbnail"
							style={{ maxWidth: '80%' }}
						/>
					</div>
				</div>

				{/* Right side with form */}
				<div className="col-md-6 d-flex align-items-center justify-content-center">
					<div className="w-100 p-4" style={{ maxWidth: '500px' }}>
						<div className="text-start mb-4">
							<h2 className="fw-bold">Sign In</h2>
							<p className="text-muted">Please enter your details to continue</p>
						</div>

						<form onSubmit={handleSubmit} className="needs-validation">
							<div className="mb-3">
								<label htmlFor="name" className="form-label">Name <span className="text-danger">*</span></label>
								<input 
									type="text" 
									id="name" 
									name="name" 
									value={formData.name} 
									required 
									className="form-control" 
									onChange={handleChange}
									placeholder="Enter your name"
								/>
							</div>

							<div className="mb-3">
								<label htmlFor="email" className="form-label">Email <span className="text-danger">*</span></label>
								<input 
									type="email" 
									id="email" 
									name="email" 
									value={formData.email} 
									required 
									className="form-control" 
									onChange={handleChange}
									placeholder="Enter your email"
								/>
							</div>

							<div className="mb-4 position-relative">
								<label htmlFor="password" className="form-label">Password <span className="text-danger">*</span></label>
								<div className="input-group">
									<input 
										type={passwordView ? "text" : "password"} 
										id="password" 
										name="password" 
										value={formData.password} 
										required 
										className="form-control" 
										onChange={handleChange}
										placeholder="Enter your password"
									/>
									<button 
										className="btn btn-outline-secondary" 
										type="button" 
										onClick={handlePasswordVIew}
									>
										{passwordView ? <FiEye size={20}/> : <FiEyeOff size={20}/>}
									</button>
								</div>
							</div>

							<div className="d-grid">
								<button 
									type="submit" 
									className="btn btn-primary btn-lg"
								>
									Sign In
								</button>
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
					</div>
				</div>
			</div>
		</div>
	)
}

export default Login
