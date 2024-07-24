import React from 'react'
import Mycard from './../mycard/Mycard';
const shoppingCategories = [
    {
        category: "Electronics",
        brand: "TechWorld",
        image: "https://www.bluefly.com/cdn/shop/files/shutterstock_1464509732_1_720x.jpg?v=1660342703",
        description: "Discover the latest in electronics and gadgets!"
    },
    {
        category: "Fashion",
        brand: "StyleHub",
        image: "https://www.bluefly.com/cdn/shop/files/shutterstock_442324294_720x.jpg?v=1660338965",
        description: "Stay trendy with our latest fashion collections!"
    },
    {
        category: "Home & Kitchen",
        brand: "HomeEssentials",
        image: "https://www.bluefly.com/cdn/shop/files/shutterstock_390723769_4_7_720x.jpg?v=1660348351",
        description: "Upgrade your home with our premium kitchenware!"
    },
    {
        category: "Sports",
        brand: "FitGear",
        image: "https://www.bluefly.com/cdn/shop/files/shutterstock_324325775_1_720x.jpg?v=1660337720",
        description: "Gear up for your next adventure with our sports equipment!"
    },
    {
        category: "Beauty",
        brand: "GlamourBox",
        image: "https://www.bluefly.com/cdn/shop/files/shutterstock_2056290722_720x.jpg?v=1660337209",
        description: "Enhance your beauty with our exclusive products!"
    }
];

const Carausel = () => {
  return (
    <div className='image-carausel'>
        <button className='pre-btn'><p>&lt;</p></button>
        <button className='next-btn'><p>&gt;</p></button>
        <div className="product-container">
        {shoppingCategories.map((item) =>(
            <Mycard key={item.category} category={item.category} brand={item.brand} image={item.image} description={item.description} />
        ))}
        </div>
       
    </div>
  )
}

export default Carausel