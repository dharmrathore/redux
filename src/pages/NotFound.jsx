import React from 'react'
import { Link } from 'react-router-dom';

const NotFound = () => {
  return (
	<div className="d-flex flex-column justify-content-center align-items-center" style={{ height: '100vh' }}>
		<h1 className="display-4">404</h1>
		<p className="lead">Page Not Found</p>
		<Link to="/" className="btn btn-primary mt-3">Go to Dashboard</Link>
  	</div>
  )
}

export default NotFound
