import React, { useEffect, useState, Suspense, lazy } from 'react'
// import ProductCard from '../components/ProductCard'
const ProductCard = lazy(() => import("../components/ProductCard"));


const Blog = ({pageName}) => {

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
          
            <h1 className='fs-5 fw-semibold mb-3'>{pageName}</h1>

           
            <Suspense fallback={<p className='d-flex h-100 w-100 align-items-center bg-dark'>Loading Components...</p>}>
                <div className="row row-cols-lg-4 g-3">
                    {products.length > 0 ? (
                        products.map((product, index) => (

                            <div className="col">
                                <ProductCard key={product.id || index} product={product} />
                            </div>
                        ))
                    ) : (
                        <p>Loading Products...</p>
                    )}
                </div>
            </Suspense>

        </>
    )
}

export default Blog
