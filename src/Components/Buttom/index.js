import React from 'react'
import './styles.css'
import blog_1 from '../../assets/blog_1.jpg'

const buttom = () => (
  <div className="buttomtitle">
    <h1>
      Big Sale!
    </h1>
    <div className="body">
      <img src={blog_1} className="imgbuttom"/>
      <div className="buttomtitlebody">
        <h2>
          50% less in all items!
        </h2>
        <h3>
          By Juan Carlos - SEptember 2020
        </h3>
        <h3>
          Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum 
        </h3>

      </div>
    </div>
  </div>
)

export default buttom