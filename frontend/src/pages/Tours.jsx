/* eslint-disable jsx-a11y/iframe-has-title */
import React,{useState,useEffect} from 'react'
import CommonSection from '../shared/CommonSection';
import '../styles/tour.css';
import SearchBar from './../shared/Search';
import TourCard from './../shared/TourCard.jsx' ;
import NewsLetter from './../shared/Newsletter';
import { Col, Container,Row,  } from 'reactstrap';
import useFetch from '../hooks/useFetch.js'
import {BASE_URL} from '../utils/config.js'
const Tours = ({tour}) => {
  const [pageCount, setPageCount] = useState(0);
  const [page,setPage] = useState(0);
  
  
 const {data:tours,loading,error} =useFetch(`${BASE_URL}/tours`)
 const {data:tourCount} =useFetch(`${BASE_URL}/tours/search/getTourCount`)

  useEffect(()=>{

    const pages=Math.ceil(tourCount/4) //later we will use backend data count 
    setPageCount(pages)
  },[page,tourCount])
  return (
    <div>
      <CommonSection title={"All Tours"}/>
      <section>
            <Container>
              <Row>
         <SearchBar/>
              </Row>
            </Container>
      </section>
      <section className='pt-0'>
        <Container>
          {loading &&  <h4 className='text-center pt-5'>Loading....</h4>}
          {error &&  <h4 className='text-center pt-5'>{error}</h4>}
         {
          !loading  && !error && <Row>
            {tours?.map(tour=>(
            <Col lg='3' md='6' sm='6' className='mb-4' key={tour._id}>
            <TourCard tour={tour}/>
            </Col>
            ))}

     <Col>
     <div className="pagination d-flex align-items-center justify-content-center mt-4 gap-3">
      {[...Array(pageCount).keys()].map(number=>(
        <span key={number} onClick={()=>setPage(number)} className={page===number ? 'active_page':''}>
          {number+1}
        </span>
      ))}
     </div>
     </Col>
          </Row>
         }
        </Container>
      </section>
      <NewsLetter/>
    </div>
  )
}

export default Tours