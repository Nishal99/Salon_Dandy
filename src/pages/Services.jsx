import React from 'react'
import '../assets/css/Services.css'
import Cards from  '../components/Card'



const Services = () => {
  return (
    <div className='services'>
        <div className="serviceImage">
        <div className="textcontain">
          <h1>Our Services</h1>
        </div>
      </div>
      <div className="xcard">
       <Cards/>
      </div>
      <div className="cardcontainer">  </div>
    </div>
  )
}
export default Services;