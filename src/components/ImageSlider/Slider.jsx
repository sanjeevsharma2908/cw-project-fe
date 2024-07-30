import React from 'react';
import { Slide } from 'react-slideshow-image';
import 'react-slideshow-image/dist/styles.css'

const btnStyle ={
  padding: '20px',
  background: '#efefef',
  color: '#000000',
  border: 'none',
  cursor: 'pointer',
  borderRadius: '5px',
  marginLeft: '10px',
  fontSize:'18px',
  fontWeight:'800'
}

const divStyle = {
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  backgroundSize: 'cover',
  height: '400px'
}
const slideImages = [
  {
    url: 'https://www.bluefly.com/cdn/shop/files/shutterstock_442324294_720x.jpg?v=1660338965',
    caption: 'Slide 1'
  },
  {
    url: 'https://www.bluefly.com/cdn/shop/files/shutterstock_390723769_4_7_720x.jpg?v=1660348351',
    caption: 'Slide 2'
  },
  {
    url: 'https://www.bluefly.com/cdn/shop/files/shutterstock_324325775_1_720x.jpg?v=1660337720',
    caption: 'Slide 3'
  },
  {
    url: 'https://www.bluefly.com/cdn/shop/files/shutterstock_2056290722_720x.jpg?v=1660337209',
    caption: 'Slide 4'
  }
  
];

const Slider = () => {
    return (
      <div className="slide-container">
        <Slide>
         {slideImages.map((slideImage, index)=> (
            <div key={index}>
              <div style={{ ...divStyle, 'backgroundImage': `url(${slideImage.url})` }}>
                <button style={btnStyle}>SHOP NOW</button>
              </div>
            </div>
          ))} 
        </Slide>
      </div>
    )
}
export default  Slider