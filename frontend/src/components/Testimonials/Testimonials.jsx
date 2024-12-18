import React from 'react'
import Slider from 'react-slick'
import ava01 from '../../assets/images/ava-1.jpg'
import ava02 from '../../assets/images/ava-2.jpg'
import ava03 from '../../assets/images/ava-3.jpg'
const Testimonials = () => {
    const settings={
        dots:true,
        infinite:true,
        autoplay:true,
        speed:1000,
        swipeToSlide:true,
        autoplaySpeed:2000,
        SlideToShow:3,

        responsive:[
            {
                breakpoint:992,
                settings:{
                    slideToShow:2,
                    slidesToScroll:1,
                    infinite:true,
                    dots:true,
                },
    },
    {
        breakpoint:576,
        settings:{
            slidesTOShow:1,
            slideToScroll:1,
        },
    },
        ]
    }
  return (
    <Slider {...settings}>
        <div className="testimonial py-4 px-3"> 
        <p>My family and I had the best vacation ever thanks to this travel site.The kids had a blast, and we created memories that will last a lifetime. Thank you!</p>
         <div className="d-flex align-items-center gap-4 mt-3">
            <img src={ava01}  className='w-25 h-25 rounded-2'alt="" />
            <div>
                <h6 className='mb-0 mt-3'>John Smith</h6>
                <p>Customer</p>
            </div>
         </div>
        </div>
        <div className="testimonial py-4 px-3"> 
        <p>I had an incredible experience booking my vacation through this website. The process was seamless, and the customer service was outstanding.!</p>
         <div className="d-flex align-items-center gap-4 mt-3">
            <img src={ava02}  className='w-25 h-25 rounded-2'alt="" />
            <div>
                <h6 className='mb-0 mt-3'>Sofia Franklin</h6>
                <p>Customer</p>
            </div>
         </div>
        </div>
        <div className="testimonial py-4 px-3"> 
        <p>As a solo traveler, I always look for reliable travel websites, and this one exceeded my expectations.Local tours were well-organized, and I felt safe and well taken care of throughout my journey.!</p>
         <div className="d-flex align-items-center gap-4 mt-3">
            <img src={ava03}  className='w-25 h-25 rounded-2'alt="" />
            <div>
                <h6 className='mb-0 mt-3'>James Taylor</h6>
                <p>Customer</p>
            </div>
         </div>
        </div>
        <div className="testimonial py-4 px-3"> 
        <p>This travel website is my go-to for all my travel needs. Their user-friendly interface and comprehensive options make it easy to find and book the perfect trip.!</p>
         <div className="d-flex align-items-center gap-4 mt-3">
            <img src={ava02}  className='w-25 h-25 rounded-2'alt="" />
            <div>
                <h6 className='mb-0 mt-3'>Sofia Franklin</h6>
                <p>Customer</p>
            </div>
         </div>
        </div>
        
    </Slider>
  )
}

export default Testimonials