import React from 'react'
import Carousel from 'react-material-ui-carousel'

const Carousel = ({ images }) => {
  return (
    <Carousel>
      {images.map((image, i) => (
        <img
          key={i} // Or image.id if you have unique IDs
          src={
            `https://via.placeholder.com/500x300?text=Image+${i + 1}`
          } // Placeholder if image is null or undefined
          alt={`Image ${i + 1}`}
          style={{ width: '100%', height: '300px', objectFit: 'cover' }}
        />
      ))}
    </Carousel>
  )
}

export default Carousel
