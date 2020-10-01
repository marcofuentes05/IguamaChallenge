import React from 'react'
import './styles.css'

const navbar = () => {
  return(
    <div className="navbar">
      <div>
        <i class="fa fa-search" aria-hidden="true"></i> 
        Search
      </div>
      <div className="name">
        SHOPPERS
      </div>
      <div>
        Actions
      </div>
    </div>
  )
}

export default navbar