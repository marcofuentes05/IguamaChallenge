import React from 'react'
import './styles.css'

const contentBox= ({title, text} ) => (
  <div className="contentBox" >
    <h1>
      {title} 
    </h1>
    <h2>
      {text}
    </h2>
  </div>
)
const list=[
  { title: 'FREE SHIPPING', text:' Lorem Ipsum  Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum'},
  { title: 'FREE RETURNS', text: ' Lorem Ipsum  Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum' },
  { title: 'CUSTOMER SUPPORT', text: ' Lorem Ipsum  Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum' },
]
const belowCarousel = () => (
  <div className="belowCarousel">
    {list.map(value => contentBox(value))}
  </div>
)

export default belowCarousel