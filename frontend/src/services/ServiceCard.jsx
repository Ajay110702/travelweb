import React from 'react'
import './service-card.css'
const ServiceCard = ({item}) => {
    const {title,desc}=item;
  return <div className="service_item ">
    
    <h5>{title}</h5>
    <p>{desc}</p> 
</div>  
}

export default ServiceCard; 