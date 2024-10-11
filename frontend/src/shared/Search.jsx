import React,{useRef} from 'react'
import './Search.css'
import {Col,Form,FormGroup} from 'reactstrap';
import { BASE_URL } from './../utils/config.js';
import { useNavigate } from 'react-router-dom';
const Search = () => {
    const locationRef=useRef('')
    const priceRef=useRef(0)
    const maxGroupSizeRef=useRef(0)
    const navigate = useNavigate()

    const searchHandler= async()=>{
        const location=locationRef.current.value
        const price=priceRef.current.value
        const maxGroupSize=maxGroupSizeRef.current.value
        

        if(location==='' || price==='' || maxGroupSize===''){
           return alert("All the fields are required!")
        }
        const res = await fetch(`${BASE_URL}/tours/search/getTourBySearch?city=${location}&price=${price}&maxGroupSize=${maxGroupSize}`)
        // http://localhost:4000/api/v1/tours/search/getTourBySearch 
          if(!res.ok) alert ('Something went wrong')
            console.log(res.error);
            

            const result = await res.json()
            navigate(`/tours/search?city=${location} & price= ${price} & maxGroupSize = ${maxGroupSize}`, {state:result.data});
   
    }
  return (
  <Col lg='12'>
     <div className="searchbar mt-5">
        <Form className='d-flex align-items-center gap-4 '>
            <FormGroup className='d-flex gap-3  formgroup formgroup-fast'>
                <span><i class="ri-map-pin-fill"></i></span>
                <div>
                    <h6>Location</h6>
                    <input type="text" placeholder='Where you want to go?'  ref={locationRef}/>
                </div>
            </FormGroup>
            <FormGroup className='d-flex gap-3  formgroup formgroup-fast' >
                <span><i class="ri-wallet-fill"></i></span>
                <div>
                    <h6>Budget</h6>
                    <input type="number" placeholder='Budget Rs' ref={priceRef} />
                </div>
            </FormGroup>
            <FormGroup className='d-flex gap-3  formgroup formgroup-fast'>
                <span><i class="ri-group-fill"></i></span>
                <div>
                    <h6>Max people</h6>
                    <input type="number" placeholder='0' ref={maxGroupSizeRef} />
                </div>
            </FormGroup>

            <span className="search_icon" type='submit' onClick={searchHandler}>
            <i class="ri-search-eye-line"></i>
            </span>

        </Form>
     </div>
  </Col>
    )
}

export default Search;