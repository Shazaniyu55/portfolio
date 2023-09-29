import Link from 'next/link';
import { useState, useEffect } from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { FaBars, FaCaretDown } from 'react-icons/fa';


function NavBar() {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [navbar, setNavbar] = useState(false);
  const [activeNavItem, setActiveNavItem] = useState('');

 {/* I made a function here to toggle the dropdown button whenever 
 the user want to change the state of the dropdown to true from false... */}

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  
   {/* I made a function here to handle what the signin button 
  should do, you can alter it it to work with your firebase... */}

  const handleClick = (navItem) => {
    setActiveNavItem(navItem);
    setNavbar(!navbar);
  };

  
  return (
    <nav className="transition-opacity duration-500 w-full top-0 h-25 hover:bg-niyuyello shadow-lg fixed lg:mb-8 bg-niyunav backdrop-blur-3xl  opacity-100 z-50 hover:bg-avista2">
      <motion.main 
      initial={{ opacity: 0 }} 
      animate={{ opacity: 1 }} 
      transition={{ duration: 3 }}>
     
        <div className="justify-between px-4 mx-auto lg:max-w-8xl md:items-center md:flex sm:px-8">
          <div className={`mt-top-adjusted ${navbar ? 'adjust-down' : ''}`}>
            <div className="flex text-adainblack hover:text-niyuwhite items-center justify-between py-5">
              <a href="/" className="flex items-center">
                <Image src="/images/codegeek.png" width={60} height={20} className='rounded-full' alt="Avista Beach Resort Logo" />
                <p className='text-sm p-2 tracking-widest'>CodeGeek</p>
              </a>
              <div className="md:hidden text-adainblack hover:text-niyuwhite">
                <button className="text-adainblack hover:text-adainwhite pt-2 rounded-md" onClick={handleClick}>
                  {navbar ? (
                    <svg className="text-adainblack hover:text-adainwhite icon icon-tabler icon-tabler-letter-x" fill="none" height="24" stroke="currentColor" 
                    stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24" width="24" 
                    xmlns="http://www.w3.org/2000/svg">
                    <path d="M0 0h24v24H0z" fill="none" stroke="none"/>
                    <line x1="7" x2="17" y1="4" y2="20"/>
                    <line x1="17" x2="7" y1="4" y2="20"/>
                    </svg>
                    
                  ) : (
                    <div className='text-adainblack hover:text-niyuwhite'>
                    <svg width="21" height="8" viewBox="0 0 21 8" fill="none" 
                     xmlns="http://www.w3.org/2000/svg">
                    <rect width="21" height="2" fill="#1B1919"/>
                   <rect y="3" width="21" height="2" fill="#1B1919"/>
                   <rect y="6" width="21" height="2" fill="#1B1919"/>
                   </svg>
                   </div>

                  )}
                </button>
              </div>
            </div>
          </div>
          <div>
            <div className={`text-adainblack hover:text-niyuwhite flex-2 justify-self-center pl-2 ... tracking-tight pb-3 mt-8 md:block md:pb-0 md:mt-0 ${navbar ? "block" : "hidden"}`}>
              <div className="space-x-4 text-lg">
                
              <ul className="mb-4 mt-2 items-center pr-20 font-medium text-sm... justify-center space-y-4 md:flex md:space-x-4 md:space-y-0">
  <li className={`text-adainblack hover:text-adainwhite pr-16 ${activeNavItem === 'home' ? 'active' : ''}`}>
    <Link href="/" onClick={() => handleClick('home')}>
      {`Home`}
    </Link>
  </li>


         {/* I continued with the rest of the listed navlinks items here... */}  
                  
                  <li className={`text-adainblack hover:text-adainwhite ${activeNavItem === 'about' ? 'active' : ''}`}>
                    <Link href="/About" onClick={() => handleClick('about')}>
                      About Us
                    </Link>
                  </li>
                  
                  <li className={`text-adainblack hover:text-adainwhite  ${activeNavItem === 'experiences' ? 'active' : ''}`}>
                    <Link href="/Skills" onClick={() => handleClick('experiences')}>
                    Skills
                    </Link>
                  </li>
                  <li className={`text-adainblack hover:text-adainwhite pr-20 ${activeNavItem === 'experiences' ? 'active' : ''}`}>
                    <Link href="/Contact" onClick={() => handleClick('experiences')}>
                    Contact
                    </Link>
                  </li>

          
                  
               {/* I created a sign in button here to have an event listener of onclick 
               that it should listen to handle click function above 
              the parent codeblock... */}
                  
         
</ul>
              </div>
            </div>
          </div>
        </div>
      </motion.main>
    </nav>
  );
}

export default NavBar;



