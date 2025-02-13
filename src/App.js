import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import {  Routes, Route } from 'react-router-dom';
import Header from './components/Header';
// import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';
import Blog from './pages/Blog';

import { Provider, useDispatch, useSelector } from 'react-redux';
import store from './redux/store';
// import Login from './components/Login';
// import Product from './components/Product';

import { loginSuccess, logout } from './redux/actions/authActions'
import HomeLayout from './pages/HomeLayout';
import Login from './components/Login';

// import {addToCard} from './redux/actions/productActions';


function AppLayout(){
	const dispatch = useDispatch();
	const {isAuthenticated, user} = useSelector(state => state.auth);
	const cartItems = useSelector(state => state.product.cardData);
//console.log(cartItems,"=-09876543234567890-=");
	if (!isAuthenticated) {
		return (
			<div className='d-flex w-100 h-100 p-4 align-items-center justify-content-center'>
				<Login />
			</div>
		)
	}
	else{
		<button className='btn btn-danger' onClick={() => dispatch(logout())}>Logout</button> 
	}

	return (
        <>
			<header className="d-flex w-100 px-3 bg-light">
				<Header logout={() => dispatch(logout())} cartCount={cartItems.length}/>
			</header>
			<main className='py-3 container'>
				<Routes>
					<Route path="/" element={<HomeLayout user={user}/>} />
					<Route path="/about" element={<About />} />
					<Route path="/blog" element={<Blog />} />
					<Route path="/contact" element={<Contact />} />
				</Routes>
			</main>
			<footer className='d-flex align-items-center gap-2 flex-wrap'>
				<p>�� 2025 Your Website. All rights reserved.</p>
                <p>Developed by <a href="https://www.yourwebsite.com">Your Name</a></p>
                <p>Powered by <a href="https://reactjs.org/">React</a></p>
                <p>Theme by <a href="https://www.bootstrap.com/">Bootstrap</a></p>
                <p>Icons by <a href="https://fontawesome.com/">Font Awesome</a></p>
                <p>Source code available on <a href="https://github.com/yourusername/yourwebsite">GitHub</a></p>
                <p>Contact us at <a href="mailto:yourwebsite@example.com">yourwebsite@example.com</a></p>
			</footer>
		</>
    );
};

function App() {
	return (
		<div className="d-grid">
		
			<Provider store={store}>
				<AppLayout/>
			</Provider>
		
		</div>
	);
}
export default App;

