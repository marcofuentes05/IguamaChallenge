import React from 'react'
import './styles.css'
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';

import cloth_1 from '../../assets/cloth_1.jpg'
import hero_1 from '../../assets/hero_1.png'
import cloth_3 from '../../assets/cloth_3.jpg'

const featuredProduct = ({image, name , description , price}) => (
  <div className="feature">
    <img src={image} className="img0" width="20%" height="auto" alt="No resource" />
    <h1 className="purple">{name}</h1>
    <h3>{description}</h3>
    <h3 className="purple">{`$ ${price}`}</h3>
  </div>
)

const list = [
  {image : cloth_1 , name : 'Tank Top' , description : 'Finding Perfect Products' , price : '50'},
  {image : hero_1 , name : 'Corater' , description : 'Finding Perfect Products' , price : '50'},
  {image : cloth_3 , name : 'Polo Shirt' , description : 'Finding Perfect Products' , price : '50'},
]

const featured = () => (
  <div className="carouselContainer">
    <div className="title">
      Featured Products
    </div>
    <Carousel>
      <div className="features">
        {list.map(value => featuredProduct(value))}
      </div>
      <div className="features">
        {list.map(value => featuredProduct(value))}
      </div>
      <div className="features">
        {list.map(value => featuredProduct(value))}
      </div>
      <div className="features">
        {list.map(value => featuredProduct(value))}
      </div>
    </Carousel>
  </div>
)

export default featured;