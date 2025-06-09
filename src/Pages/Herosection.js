   import HeroSection from '../component/Hero'

   import React from 'react';
   import AboutSection from '../component/About.js';
   import ServicesSection from '../component/Services.js';
   import TestimonialsSection from '../component/testimonials.js';
import PortfolioSection from '../component/Protfolio.js';
import LandingBlogs from '../component/blog-h.js';


   
   // HomePage.js
    function HomePage() {
        return (
            <>
         <HeroSection/>
         <AboutSection/>
         <ServicesSection/>
         <TestimonialsSection/>
         <PortfolioSection/>
         <LandingBlogs/>
        


         

        
         </>
        );
      }
      export default HomePage;