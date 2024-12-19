import React from 'react'
import ServiceCard from './ServiceCard';
import {Col} from 'reactstrap';
const servicesData =[
  {
  title:'Destination Booking',
  desc:'You can book the travel places according to your budget.'
  },
  {
    title:'Local Information',
    desc:'We provide information on the travel places via maps.'
  },
  {
    
    title:'Rating and reviews',
    desc:'We enable the  clients to provide valuable feedback on our services.',
  },

]
const ServiceList = () => {
  return <>
      {
        servicesData.map((item,index)=>( 
        <Col lg='3' md='6'  sm='12' className='mb-4' key={index}>
          <ServiceCard item={item}/>
           </Col>
      ))}
    </>
  
}

export default ServiceList