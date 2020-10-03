import React from 'react'
import './styles.css'

const contentBox= ({img , title, text} ) => (
  <div className="wrapper " >
    <img src={img} classname="img" height="50px" width="50px" margin="15px" alt="No resource" />
    <div className="contentBox" >
      <h1 className="title">
        {title} 
      </h1>
      <h2 className="grey">
        {text}
      </h2>
    </div>
  </div>
)
const list=[
  { img : require('../../assets/truck.png') ,title: 'FREE SHIPPING', text:' Lorem Ipsum dolor sit amet, consectetur adipisicing elit. Quisquam iste dolor accusantium facere corporis ipsum animi deleniti fugiat. Ex, veniam?'},
  { img : require('../../assets/truck.png') ,title: 'FREE RETURNS', text: ' Lorem Ipsum dolor sit amet, consectetur adipisicing elit. Quisquam iste dolor accusantium facere corporis ipsum animi deleniti fugiat. Ex, veniam?' },
  { img : require('../../assets/truck.png') ,title: 'CUSTOMER SUPPORT', text: ' Lorem Ipsum dolor sit amet, consectetur adipisicing elit. Quisquam iste dolor accusantium facere corporis ipsum animi deleniti fugiat. Ex, veniam?' },
]
const belowCarousel = () => (
  <div className="belowCarousel">
    {list.map(value => contentBox(value))}
  </div>
)

export default belowCarousel