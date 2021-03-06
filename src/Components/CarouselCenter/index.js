import React from 'react'
import './styles.css'
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import shoe from '../../assets/shoe.png'
const images = [shoe, shoe, shoe]
const carEl = (img) => (
  <div className="carouselElement">
    <img src={img} alt="Nada nuevo" className="image" />
    <div className="insideCarouselElement">
      <h1 className="text">
        Finding Your Perfect Shoes
      </h1>
      <h2 className="subtext">
        Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum
      </h2>
      <button className="shopNowButton">
        SHOP NOW
      </button>
    </div>
  </div>
)

const carousel = () => (
  <div >
    <Carousel >
      {images.map(value => carEl(value))}
    </Carousel>
  </div>
)

export default carousel;