import React, { useState } from 'react'
import { useDispatch } from 'react-redux';
import { loginSuccess } from '.././redux/actions/authActions'
import { FiEye, FiEyeOff, FiUser, FiMail, FiLock, FiPhone } from 'react-icons/fi';

const Login = () => {
	const dispatch = useDispatch();
	// const { isAuthenticated, user } = useSelector((state) => state.auth)

	const [passwordView, setPasswordView] = useState(false);
	const [showToast, setShowToast] = useState(false);
	const [errors, setErrors] = useState({
		name: '',
		email: '',
		password: '',
		phone: ''
	});

	const [formData, setFormData] = useState({
		name: '',
		email: '',
		password: '',
		phone: ''
	})

	const validateField = (name, value) => {
		let error = '';
		switch (name) {
			case 'name':
				if (!value) {
					error = 'Name is required';
				} else if (value.length < 3) {
					error = 'Name must be at least 3 characters long';
				} else if (!/^[a-zA-Z\s]+$/.test(value)) {
					error = 'Name can only contain letters and spaces';
				}
				break;
			case 'email':
				if (!value) {
					error = 'Email is required';
				} else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value)) {
					error = 'Please enter a valid email address';
				}
				break;
			case 'password':
				if (!value) {
					error = 'Password is required';
				} else if (value.length < 10) {
					error = 'Password must be at least 10 characters long';
				} else if (!/[a-zA-Z]/.test(value)) {
					error = 'Password must contain at least one letter';
				} else if (!/\d/.test(value)) {
					error = 'Password must contain at least one number';
				}
				break;
			case 'phone':
				if (!value) {
					error = 'Phone number is required';
				} else if (!/^\d{10}$/.test(value)) {
					error = 'Please enter a valid 10-digit phone number';
				}
				break;
			default:
				break;
		}
		return error;
	}

	const handleChange = (e) => {
		const { name, value } = e.target;
		setFormData(prev => ({
			...prev,
			[name]: value
		}));
		
		// Validate field on change
		const error = validateField(name, value);
		setErrors(prev => ({
			...prev,
			[name]: error
		}));
	}

	// console.log('login', loginSuccess)

	const handleSubmit = (e) => {
		e.preventDefault();
		
		// Validate all fields
		const newErrors = {
			name: validateField('name', formData.name),
			email: validateField('email', formData.email),
			password: validateField('password', formData.password),
			phone: validateField('phone', formData.phone)
		};
		
		setErrors(newErrors);
		
		// Check if there are any errors
		if (Object.values(newErrors).some(error => error !== '')) {
			setShowToast(true);
			setTimeout(() => setShowToast(false), 3000);
			return;
		}

		// If validation passes, proceed with form submission
		let data = localStorage.getItem('formData2');
		data = data ? JSON.parse(data) : [];

		const now = new Date();
		const userData = {
			...formData,
			loginTime: now.toISOString()
		};

		localStorage.setItem('formData', JSON.stringify(userData));
		data.push(userData);
		localStorage.setItem('formData2', JSON.stringify(data));
		dispatch(loginSuccess(userData));
	}

	const handlePasswordView = () => {
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
								<label htmlFor="name" className="form-label">
									<FiUser className="me-2" />
									Name <span className="text-danger">*</span>
								</label>
								<div className="input-group">
									<input 
										type="text" 
										id="name" 
										name="name" 
										value={formData.name} 
										required 
										className={`form-control ${errors.name ? 'is-invalid' : ''}`}
										onChange={handleChange}
										placeholder="Enter your name"
									/>
									{errors.name && <div className="invalid-feedback">{errors.name}</div>}
								</div>
							</div>

							<div className="mb-3">
								<label htmlFor="email" className="form-label">
									<FiMail className="me-2" />
									Email <span className="text-danger">*</span>
								</label>
								<div className="input-group">
									<input 
										type="email" 
										id="email" 
										name="email" 
										value={formData.email} 
										required 
										className={`form-control ${errors.email ? 'is-invalid' : ''}`}
										onChange={handleChange}
										placeholder="Enter your email"
									/>
									{errors.email && <div className="invalid-feedback">{errors.email}</div>}
								</div>
							</div>

							<div className="mb-3">
								<label htmlFor="password" className="form-label">
									<FiLock className="me-2" />
									Password <span className="text-danger">*</span>
								</label>
								<div className="input-group position-relative">
									<input 
										type={passwordView ? "text" : "password"} 
										id="password" 
										name="password" 
										value={formData.password} 
										required 
										className={`form-control border-2 rounded-3 ps-3 pe-5 ${errors.password ? 'is-invalid' : ''}`}
										onChange={handleChange}
										placeholder="Enter your password"
									/>
									<button 
										className="btn position-absolute end-0 top-50 translate-middle-y text-muted border-0 bg-transparent" 
										type="button" 
										onClick={handlePasswordView}
										style={{zIndex: 5}}
									>
										{passwordView ? <FiEye size={18}/> : <FiEyeOff size={18}/>}
									</button>
									{errors.password && <div className="invalid-feedback">{errors.password}</div>}
								</div>
							</div>

							<div className="mb-3">
								<label htmlFor="phone" className="form-label">
									<FiPhone className="me-2" />
									Phone <span className="text-danger">*</span>
								</label>
								<div className="input-group">
									<input 
										type="tel" 
										id="phone" 
										name="phone" 
										value={formData.phone} 
										required 
										className={`form-control ${errors.phone ? 'is-invalid' : ''}`}
										onChange={handleChange}
										placeholder="Enter your phone number"
									/>
									{errors.phone && <div className="invalid-feedback">{errors.phone}</div>}
								</div>
							</div>

							<div className="d-grid">
								<button 
									type="submit" 
									className="btn btn-primary btn-lg"
									disabled={Object.values(errors).some(error => error !== '') || 
										!formData.name || !formData.email || !formData.password || !formData.phone}
								>
									Sign In
								</button>
							</div>
						</form>

						{showToast && (
							<div className="toast align-items-center text-bg-danger border-0 show position-fixed top-0 end-0 m-3" role="alert" aria-live="assertive" aria-atomic="true">
								<div className="d-flex">
									<div className="toast-body">
										Please fix the errors in the form before submitting.
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
