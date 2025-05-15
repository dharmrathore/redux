import React, { useCallback, useEffect } from 'react';
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

import {loginSuccess, logout } from './redux/actions/authActions'
import HomeLayout from './pages/HomeLayout';
import Login from './components/Login';
import Footer from './components/Footer';
import Navbar from './components/Navbar';
import NotFound from './pages/NotFound';
import Service from './pages/Service';
import UserAccount from './pages/UserAccount';

// import {addToCard} from './redux/actions/productActions';


function AppLayout(){
	const dispatch = useDispatch();
	const {isAuthenticated, user} = useSelector(state => state.auth);
	const cartItems = useSelector(state => state.product.cardData);
	const usersList = useSelector(state => state.auth.usersList)

	//console.log('--------', usersList)
//console.log(cartItems,"=-09876543234567890-=");

	const loginIn = useCallback (() =>{
		// if(localStorage.formData){
		// 	console.log('Form Submitted:', localStorage.formData);
		// 	dispatch(loginSuccess(localStorage.formData));
		// }
		if (localStorage.formData) {
			const userData = JSON.parse(localStorage.formData);
			dispatch(loginSuccess(userData)); 
			//dispatch()
		}
	},[dispatch])

	useEffect( () =>{
		loginIn()
	}, [loginIn])


	if (!isAuthenticated) {
		return (
			<div className='d-flex  h-100  align-items-center justify-content-center login-grid'>
				<Login />
			</div>
		)
	}
	else{
		<button className='btn btn-danger' onClick={() => dispatch(logout())}>Logout</button> 
	}





	return (
        <>
			<header className="d-flex w-100 p-3 py-2 bg-light shadow-sm">
				<Header logout={() => dispatch(logout())} cartCount={cartItems.length}  user={user}/>
			</header>
			<nav className='bg-light'>
				<Navbar/>
			</nav>
			<main className='p-4'>
				<Routes>
					<Route path="/" element={<HomeLayout user={user} usersList={usersList} pageName="Dashboard"/>} />
					<Route path="/about" element={<About pageName="About" />} />
					<Route path="/blog" element={<Blog pageName="Blog"/>} />
					<Route path="/service" element={<Service pageName="Service"/>} />
					<Route path="/contact" element={<Contact pageName="Contact"/>} />
					<Route path="/user-profile" element={<UserAccount user={user}/>} />
					<Route path="*" element={NotFound}/>
				</Routes>
			</main>
			<footer className='d-flex align-items-center gap-3 flex-wrap bg-secondary py-3'>
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

