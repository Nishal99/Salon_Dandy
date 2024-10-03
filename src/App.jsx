import { useEffect, useState } from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from './pages/Home.jsx';
import About from './pages/About.jsx';
import Services from './pages/Services.jsx';
import Gallery from './pages/Gallery.jsx';
import Contact from './pages/Contact.jsx';
import Footer from "./components/Footer.jsx";
import ScrollToTop from './ScrollToTop'; // Import ScrollToTop component
import Albums from "./pages/Albums.jsx";




function App() {
  const [showLoader, setShowLoader] = useState(true);
  const location = useLocation(); // Track the current route

  useEffect(() => {
    // Show the preloader every time the route changes
    setShowLoader(true);
    
    const timer = setTimeout(() => {
      setShowLoader(false);
    }, 1000); // You can adjust the duration of the preloader here

    // Clear timeout when the component unmounts
    return () => clearTimeout(timer);
  }, [location]); // Trigger useEffect on route change

  return (
    <>
      {showLoader && (
        <div className="preloader">
          <svg viewBox="0 0 1000 1000" preserveAspectRatio="none">
            <path id="preloaderSvg" d="M0,1005S175,995,500,995s500,5,500,5V0H0Z"></path>
          </svg>
          <div className="preloader-heading">
            <div className="load-text">
              <span>S</span>
              <span>A</span>
              <span>L</span>
              <span>O</span>
              <span>N</span>
              <span>&nbsp;</span>
              <span>D</span>
              <span>A</span>
              <span>N</span>
              <span>D</span>
              <span>Y</span>
            </div>
          </div>
        </div>
      )}
      {!showLoader && (
        <>
          <Navbar />
          <ScrollToTop />
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/about' element={<About />} />
            <Route path='/services' element={<Services />} />
            <Route path='/gallery' element={<Gallery />} />
            <Route path="/albums" element={<Albums/>} />
            <Route path='/contact' element={<Contact />} />
          </Routes>
          <Footer />
        </>
      )}
    </>
  );
}

export default App;
