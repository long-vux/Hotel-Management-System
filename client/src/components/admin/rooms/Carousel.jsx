import React from 'react'
import Carousel from 'react-material-ui-carousel'

const Carousel = ({ images }) => {
  return (
    <Carousel>
      {images.map((image, i) => (
        <img
          key={i} 
          src={
            `https://via.placeholder.com/500x300?text=Image+${i + 1}`
          }
          alt={`Image ${i + 1}`}
          style={{ width: '100%', height: '300px', objectFit: 'cover' }}
        />
      ))}
    </Carousel>
  )
}

export default Carousel
