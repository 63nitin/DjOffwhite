import React, { useState } from 'react';
import { NavLink } from 'react-router-dom'; // Import NavLink from react-router-dom

const NavBar = () => {
  const [isOpen, setIsOpen] = useState(false);

  // Function to toggle the menu
  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="bg-black ">
      <div className="container mx-auto flex justify-between items-center px-3">
        
        {/* Logo Section */}
        <div className="flex items-center">
          <img 
            src="./assets/Logo.png" 
            alt="Lotus Solar Solutions Logo" 
            className="h-[80px] w-[100px] mr-5"
          />
          <div>
            <h1 className=" text-3xl animate-bounce font-mono font-semibold text-yellow-500">DJOFFWHITE</h1>
            
          </div>

        </div>

        {/* Hamburger Menu Icon for Small Screens */}
        <div className="block lg:hidden">
          <button 
            onClick={toggleMenu} 
            className="text-yellow-500 focus:outline-none"
          >
            <svg className="h-8 w-8" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16m-7 6h7" />
            </svg>
          </button>
        </div>

        {/* Navigation Links for Large Screens */}
        <div className="hidden lg:flex space-x-6">
          <NavLink 
            to="/" 
            className="text-yellow-200 hover:text-yellow-500 bg-slate-800 p-2 border rounded-lg" 
            
          >
            Home
          </NavLink>
          <NavLink 
            to="/about" 
            className="text-yellow-200 hover:text-yellow-500 bg-slate-800 p-2 border rounded-lg" 
           
          >
            About Us
          </NavLink>
         
          
          <NavLink 
            to="/contact" 
            className="text-yellow-200 hover:text-yellow-500 bg-slate-800 p-2 border rounded-lg" 
            
          >
            Contact Us
          </NavLink>
        </div>

       
      </div>

      {/* Mobile Menu */}
      <div className={`lg:hidden ${isOpen ? 'block' : 'hidden'} text-center`}>
        <div className="px-6 pb-4 font-serif font-semibold  space-y-2">
          <NavLink 
            to="/" 
            className="block text-yellow-200 hover:text-yellow-500" 
            
          >
            Home
          </NavLink>
          <NavLink 
            to="/about" 
            className="block text-yellow-200 hover:text-yellow-500" 
            
          >
            About Us
          </NavLink>
          
          <NavLink 
            to="/contact" 
            className="block text-yellow-200 hover:text-yellow-500" 
           
          >
            Contact Us
          </NavLink>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;