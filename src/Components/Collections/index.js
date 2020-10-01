import React from 'react'
import './styles.css'
import men from '../../assets/men.jpg'
import women from '../../assets/women.jpg'
import children from '../../assets/children.jpg'

const imageBack = ({img , col}) =>(
  <div className="imageBack">
    <h3>COLLECTIONS</h3>
    <h1>{col}</h1>
  </div>)

const list = [
  {img:men , col: 'Men'},
  {img:women, col: 'Women'},
  {img:children , col: 'Children'},
]
const collections = () => (
  <div className="collections">
    {list.map(value => imageBack(value))}
  </div>
)

export default collections;