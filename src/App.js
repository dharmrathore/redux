import React from 'react';
import 'bootstrap/dist/js/bootstrap.bundle.js';
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

import {logout } from './redux/actions/authActions'
import HomeLayout from './pages/HomeLayout';
import Login from './components/Login';
import Footer from './components/Footer';
import Navbar from './components/Navbar';

// import {addToCard} from './redux/actions/productActions';


function AppLayout(){
	const dispatch = useDispatch();
	const {isAuthenticated, user} = useSelector(state => state.auth);
	const cartItems = useSelector(state => state.product.cardData);
//console.log(cartItems,"=-09876543234567890-=");
	if (!isAuthenticated) {
		return (
			<div className='d-flex  h-100 py-4 align-items-center justify-content-center login-grid'>
				<Login />
			</div>
		)
	}
	else{
		<button className='btn btn-danger' onClick={() => dispatch(logout())}>Logout</button> 
	}

	return (
        <>
			<header className="bg-gradient bg-light border-bottom d-flex px-3 py-2 shadow-sm w-100">
				<Header logout={() => dispatch(logout())} cartCount={cartItems.length}  user={user}/>
			</header>
			<nav className='bg-gradient bg-light py-0 border-end shadow-sm'>
				<Navbar/>
			</nav>
			<main className='p-3 thinScrollbar'>
				<Routes>
					<Route path="/" element={<HomeLayout user={user}/>} />
					<Route path="/about" element={<About />} />
					<Route path="/blog" element={<Blog />} />
					<Route path="/contact" element={<Contact />} />
				</Routes>
			</main>
			<footer className='d-flex align-items-center gap-3 flex-wrap bg-black py-3'>
				<Footer/>
			</footer>
		</>
    );
};

function App() {
	return (
		<div className="d-grid layout-grid">
			<Provider store={store}>
				<AppLayout/>
			</Provider>
		
		</div>
	);
}
export default App;

