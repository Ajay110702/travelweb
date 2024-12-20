import React from 'react'
import '../styles/about.css'
import plane from '../assets/images/plane.jpg'
const About = () => {
  return (
    <>   
     <section class="about-section">
  <div class="about-container">
    <div class="about-image">
      <img src={plane} alt="About Us"/>
    </div>
    <div class="about-content">
      <h2>About Us</h2>
      <p>
        Welcome to Tour Thrive Adventures, your gateway to exploring the world's most breathtaking destinations. 
        We specialize in creating unforgettable travel experiences tailored to your dreams and passions.
      </p>
      <p>
        From pristine beaches to majestic mountains, cultural landmarks to hidden gems, we ensure every trip is 
        filled with moments to treasure forever. Let us be your trusted partner in discovering the extraordinary!
      </p>
      <a href="/" class="about-btn">Discover More</a>
    </div>
  </div>
</section>
</>

  )
}

export default About;