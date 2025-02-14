import React from 'react'

import { useDispatch } from 'react-redux';
import { addToCard, removeToCard } from '../redux/actions/productActions';


const ProductCard = ({product}) => {
    // console.log('ProductCard', props)
    const dispatch = useDispatch();
    return (
        <>
        <div className="card border shadow-sm text-center" >
            <img src={product.images} className="card-img-top mx-auto" alt={product.images} width={100} height={100}/>
            <div className="card-body">
                <span className={`badge ${product.stock ? 'bg-success' : 'bg-danger'}`}>
                    {product.stock ? "In Stock" : "Out of Stock"}
                </span>
                <h5 className="card-title">{product.brand}</h5>
                
                <h6 className="text-danger">{product.storage}  </h6>
                <h6 className="text-danger">{product.price} </h6>
                <p className="card-text">{product.description}</p>
            </div>
            <div className="card-footer justify-content-between d-flex">
                <button className="btn btn-primary" disabled={!product.stock} onClick={() => dispatch(addToCard(product))}>Add to Cart</button>
                <button className="btn btn-danger" disabled={!product.stock} onClick={() => dispatch(removeToCard(product))}>Remove to Cart</button>
            </div>
        </div>
        </>
    )
}

export default ProductCard
