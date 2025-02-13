import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
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

