import Home from "./Components/Home"
import Navbar from "./Components/Navbar"
import Footer from "./Components/Footer"
import React from 'react'
import Loading from "./Components/Loading"
import Contact from "./Components/Contact"
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import About from './Components/About'
import { useState, useEffect } from 'react'


function App() {
  
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false); // Hide loading after a delay (e.g., simulate data fetching)
    }, 2000); // Adjust the delay as needed (2000 ms = 2 seconds)

    return () => clearTimeout(timer); // Cleanup the timer on unmount
  }, []);

  return (
    <>
      {loading ? (
        <Loading /> // Show the loading component if loading is true
      ) : (
        <div>
          {/* <Header /> */}
          <Router>
            <Navbar/>
           
            <Routes>
            <Route path="/" element={<Home />}/>
              <Route path="/about" element={<About />} />
              <Route path="/contact" element={<Contact />} />
            </Routes>
          </Router>
          <Footer/>
        
        </div>
      )}
    </>
  )
}

export default App
