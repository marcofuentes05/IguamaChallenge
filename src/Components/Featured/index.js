import React from 'react'
import './styles.css'
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';

import cloth_1 from '../../assets/cloth_1.jpg'
import cloth_2 from '../../assets/cloth_2.jpg'
import cloth_3 from '../../assets/cloth_3.jpg'

const featuredProduct = ({image, name , description , price}) => (
  <div className="feature">
    <img src={image} className="img0"/>
    <h1>{name}</h1>
    <h3>{description}</h3>
    <h3>{`\$${price}`}</h3>
  </div>
)

const list = [
  {image : cloth_1 , name : 'Tank Top' , description : 'Finding Perfect Products' , price : '50'},
  {image : cloth_2 , name : 'Corater' , description : 'Finding Perfect Products' , price : '50'},
  {image : cloth_3 , name : 'Polo Shirt' , description : 'Finding Perfect Products' , price : '50'},
]

const featured = () => (
  <div>
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