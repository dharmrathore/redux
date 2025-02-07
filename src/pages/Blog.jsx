import React, { useEffect, useState } from 'react'
import ProductCard from '../components/ProductCard'

const Blog = () => {

    const [products, setProducts] = useState([]);


    useEffect(()=>{
        fetch('https://dummyjson.com/products')
        .then(response => {
            if (!response.ok) throw new Error("Failed to fetch products");
            return response.json();
        })
        .then(data => {
            setProducts(data.products);
            console.log('API Data', data)
        })
        .catch (error => {
            console.error('Error:', error);
            //alert('Failed to fetch products');
            // setError(error);
        })
    },[]);   


    return (
        <>
            <div className="row row-cols-lg-4 gy-4">
                
                {products.map((product , index) => (
                    <div className="col">
                    <ProductCard key={product.id || index} product={product} />
                    </div>
                ))}
            
            </div>
        </>
    )
}

export default Blog
