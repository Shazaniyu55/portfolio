import React from 'react';
import NavBar from './Navbar';
import Footer from './Footer'


const Layouts = ({ children, showNavbarAndFooter }) => {
    return (
      <div>
        {showNavbarAndFooter && <NavBar />} 
        {children}
        {showNavbarAndFooter && <Footer />}
      </div>
    );
  };
  
  export default Layouts;