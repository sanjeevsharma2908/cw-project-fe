import React from 'react'
import { useState, useEffect } from 'react'
import './recommended.css'


const Recommended = () => {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    try {
      fetch('https://fakestoreapi.com/products?limit=6') 
      .then(response => response.json())
      .then(data => setProducts(data));
      console.log(products)
    } catch (error) {
      console.log('Error fetching data', error);
      
    }
   
}, []);
  return (
    <div className='recom-div'>
      <h1>Recommended Products</h1>
      <div>
        {
        products?.map((item) =>(
          <div className="r-products">
        <img src={item.image} alt="product-img" />
        <h3>{item.title}</h3>
        <p>${item.price}</p>
      </div>
        ))
      }
      </div>
     

    </div>
  )
}

export default Recommended