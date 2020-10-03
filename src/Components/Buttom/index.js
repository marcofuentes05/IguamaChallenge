import React from 'react'
import './styles.css'
import blog_1 from '../../assets/blog_1.jpg'

const buttom = () => (
  <div className="buttomtitle">
    <h1>
      Big Sale!
    </h1>
    <div className="body">
      <img src={blog_1} className="imgbuttom" width="50vw" alt="No resource" />
      <div className="buttomtitlebody">
        <h2 className="purple" >
          50% less in all items!
        </h2>
        <h3>
          By<h3 className="purple">Juan Carlos</h3> - September 2020
        </h3>
        <h3>
          Lorem Ipsum dolor sit amet, consectetur adipisicing elit. Quisquam iste dolor accusantium facere corporis ipsum animi deleniti fugiat. Ex, veniam?
        </h3>
        <buttom className="shopNowButton" >
          SHOP NOW
        </buttom>
      </div>
    </div>
  </div>
)

export default buttom