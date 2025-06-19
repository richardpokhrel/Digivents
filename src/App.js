import { BrowserRouter, Route, Routes } from 'react-router-dom';

import Navbar from './component/navbar';
import HomePage from './Pages/Herosection';
import Footer from './component/Footer';
import AboutPage from './Pages/AboutUs';
import ProtfolioPage from './Pages/Protfolio';

import BlogPage from './Pages/BlogPage';
import BlogArticlePage from './component/blogArticle';
import ProjectDetail from './component/p-details';
import ContactUs from './Pages/contact'
import EventPage from './Pages/Events';



export default function App() {
  return (

    <BrowserRouter>
      {/* Add Global Styles */}
      <style>{`
       hero-background {
          background-image: url('/header_bg.jpg'); /* Path to public folder */
          background-size: cover;
          background-position: center;
          position: relative;
        }
        .hero-overlay {
          position: absolute;
          inset: 0;
          opacity: 1;
        }
        .hero-shapes {
          position: absolute;
          inset: 0;
          width: 100%;
          height: 100%;
          object-fit: cover;
          mix-blend-mode: overlay;
          filter: brightness(1.2) contrast(0.8);
        }
      `}</style>

      <div>


        <Navbar />


        <Routes>

          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<AboutPage />}  />
          <Route path="/portfolio" element={<ProtfolioPage />}  />
          <Route path="/project/:id" element={<ProjectDetail />} />
          <Route path="/blog" element={<BlogPage />}  />
          <Route path="/contact" element={<ContactUs />} />
          <Route path="/events" element={<EventPage/>} />
          

          <Route path="/blog/:id" element={<BlogArticlePage />} />
          
          



        </Routes>

        <Footer/>

      </div>
    </BrowserRouter>
  );
}