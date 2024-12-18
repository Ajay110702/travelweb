/* eslint-disable react/style-prop-object */
/* eslint-disable jsx-a11y/iframe-has-title */
import React from 'react'
import '../styles/home.css'

import Subtitle from './../shared/Subtitle';
import {Container,Row,Col} from 'reactstrap';
import heroImg from '../assets/images/hero-img01.jpg'
import heroImg02 from '../assets/images/hero-img02.jpg'
import heroVideo from '../assets/images/hero-video.mp4'
import worldImg from '../assets/images/world.png'
import experienceImg from '../assets/images/experience.png'
import Search from '../shared/Search';
import ServiceList from '../services/ServiceList';
import FeaturedTour from '../components/Featured-tours/FeaturedTour';
import MasonryImagesGallery from '../components/Image-gallery/MasonryImagesGallery';
import Testimonials from '../components/Testimonials/Testimonials';
import Newsletter from '../shared/Newsletter';
import logo from '../assets/images/logo.png';

const Home = () => {
  return (
    <div>
      <section>
        <Container>
          <Row>
            <Col lg='6'>
            <div className="logo">
                  <img src={logo} alt="" />
                </div>
              <div className="hero__content">
              
                <div className="hero__subtitle d-flex align-items-center ">
                  <Subtitle subtitle={'Know Before You Go'}/>
                  <img src={worldImg}  alt="" />
                </div>
                <h1>Traveling opens the door  for creating <span className="highlight">
                    good memories.
                  </span></h1>
                  <p>"Traveling is an amazing way to learn about the world and different cultures. It can be a great way to relax and de-stress, and it can also be a lot of fun. When you travel, you get to see new places, meet new people, and try new things."</p>
              </div>
              </Col>
            <Col lg='2'>
            <div className='heroimg'>
              <img src={heroImg} alt="" />
            </div>
            </Col>
            <Col lg='2'>
            <div className='heroimg herovideo'>
              <video src={heroVideo} alt="" controls/>
            </div>
            </Col>
            <Col lg='2'>
            <div className='heroimg '>
              <img src={heroImg02} alt="" />
            </div>
            </Col>
            <Search/>

          </Row>
        </Container>
      </section>

         {/* hero section */}
          <section >
            <Container>
              <Row>
                <Col lg='3'>
                  <h5 className='services_subtitle'>  What we serve?  </h5>
                    <h2 className="services_title">We offer our best services</h2>
                     </Col>
                     <ServiceList />
              </Row>
              </Container>
          </section>

                {/* featured tour section */}

                <section>
                  <Container>
                    <Row>
                      <Col lg='12' className='mb-5'>
          <Subtitle subtitle={'Explore'}/>
             <h2 className="featured_tour">Our featured tours</h2>
        
                      </Col>
                      <FeaturedTour/>
                    </Row>
                  </Container>
                </section>

                {/* experience section */}

                <section>
                  <Container>
                    <Row>
                      <Col lg='6'>
                      <div className="experience_content">
                        <Subtitle subtitle={'Experience'}/>
                      <h2>With our all experience <br/> we will serve you</h2>
                      <p>
                        By providing unparalleled travel expertise, personalized recommendations, and unforgettable experiences.
                      </p>
                      </div>

                      <div className="counter_wrappper d-flex  align-items-center gap-5" >
                        <div className="counter_box">
                          <span>12K+</span>
                          <h6>Successful Trip</h6>
                        </div>
                        <div className="counter_box">
                          <span>1K+</span>
                          <h6>Regular Customers</h6>
                        </div>
                        <div className="counter_box">
                          <span>5</span>
                          <h6>Years of Experience</h6>
                        </div>
                      </div>
                      </Col>
                      <Col lg='6'>
                        <div className="experience_img">
                          <img src={experienceImg} alt="" />
                        </div>
                      </Col>
                    </Row>
                  </Container>
                </section>
                {/* experience section ends*/}

                {/* gallery section*/}
                            <section>
                           <Container>
                            <Row>
                              <Col lg='12'>
                                <Subtitle subtitle={'Gallery'}/>
                                <h2 className='gallery_title'>
                                  Visit our customers tour gallery
                                  </h2>
                              </Col>
                              <Col lg='12'>
                                <MasonryImagesGallery />
                              </Col>
                            </Row>
                           </Container>
                            </section>
                {/* gallery section ends*/}

                {/* Testimonial section*/}
                 <section>
                  <Container>
                    <Row>
                      <Col lg='12'>
                        <Subtitle subtitle={'Fans Love'}/> 
                   <h2 className='testimonial_title'>What our fans say about us</h2>
                      </Col>
                      <Col lg='12'>
                      <Testimonials/>
                      </Col>
                    </Row>
                  </Container>
                 </section>

                {/* Testimonial section end*/}
                <Newsletter/>

    </div>
  )
}

export default Home;