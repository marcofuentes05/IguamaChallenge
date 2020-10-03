import React from 'react'
import './styles.css'
import men from '../../assets/men.jpg'
import women from '../../assets/women.jpg'
import children from '../../assets/children.jpg'

const imageBack = ({img , col}) =>(
  <div >
    <img src={img} width="80%" height="auto" alt="No resource" />
    <h3>COLLECTIONS</h3>
    <h1>{col}</h1>
  </div>)

const list = [
  {img:women, col: 'Women'},
  {img:children , col: 'Children'},
  {img:men , col: 'Men'},
]
const collections = () => (
  <div className="collections">
    {list.map(value => imageBack(value))}
  </div>
)

export default collections;