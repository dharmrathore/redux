import React from 'react'

import { useDispatch } from 'react-redux';
import { addToCard, removeToCard } from '../redux/actions/productActions';
const products = [
    {
        id: 1,
        name: "iPhone 15 Pro",
        image: "https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/iphone-15-pro-model-unselect-gallery-2-202309?wid=5120&hei=2880&fmt=p-jpg&qlt=80&.v=1692720186481",
        price: "$999",
        description: "6.1-inch display, A17 Pro chip, Titanium design, 48MP camera.",
        color: "Titanium Gray",
        storage: "256GB",
        inStock: true
    },
    {
        id: 2,
        name: "iPhone 14 Pro",
        image: "https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/iphone-15-pro-model-unselect-gallery-2-202309?wid=5120&hei=2880&fmt=p-jpg&qlt=80&.v=1692720186481",
        price: "$899",
        description: "6.1-inch display, A16 Bionic chip, Ceramic Shield, 48MP camera.",
        color: "Deep Purple",
        storage: "128GB",
        inStock: false
    },
    {
        id: 3,
        name: "iPhone 13 Pro",
        image: "https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/iphone-15-pro-model-unselect-gallery-2-202309?wid=5120&hei=2880&fmt=p-jpg&qlt=80&.v=1692720186481",
        price: "$799",
        description: "6.1-inch display, A15 Bionic chip, ProMotion, 12MP camera.",
        color: "Sierra Blue",
        storage: "512GB",
        inStock: true
    },
    {
        id: 4,
        name: "iPhone 12 Pro",
        image: "https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/iphone-15-pro-model-unselect-gallery-2-202309?wid=5120&hei=2880&fmt=p-jpg&qlt=80&.v=1692720186481",
        price: "$699",
        description: "6.1-inch display, A14 Bionic chip, Ceramic Shield, 12MP camera.",
        color: "Pacific Blue",
        storage: "256GB",
        inStock: false
    }
];

const ProductCard = () => {
    // console.log('ProductCard', props)
    const dispatch = useDispatch();
    return (
        <>

            <div className="row row-cols-1 row-cols-lg-4">
                {products.map((product) => (
                    <div className="col" key={product.id}>
                        <div className="card border shadow-sm text-center" >
                            <img src={product.image} className="card-img-top" alt={product.name} />
                            <div className="card-body">
                                <span className={`badge ${product.inStock ? 'bg-success' : 'bg-danger'}`}>
                                    {product.inStock ? "In Stock" : "Out of Stock"}
                                </span>
                                <h5 className="card-title">{product.name}</h5>
                              
                                <h6 className="text-danger">{product.storage} / <strong className='text-success'>{product.color} </strong> </h6>
                                <h6 className="text-danger">{product.price} </h6>
                                <p className="card-text">{product.description}</p>
                            </div>
                            <div className="card-footer justify-content-between d-flex">
                                <button className="btn btn-primary" disabled={!product.inStock} onClick={() => dispatch(addToCard(product))}>Add to Cart</button>
                                <button className="btn btn-danger"  onClick={() => dispatch(removeToCard(product))}>Remove to Cart</button>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </>
    )
}

export default ProductCard
