import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin, FaEnvelope } from 'react-icons/fa';

// I created a footer for the app.
const AdainFooter = () => {
  return (
    // I used the footer element of html to wrapp all three divs i needed to make the footer.
    <footer className="bg-niyublack text-niyuwhite py-10">
      <div className="container mx-auto px-10 flex flex-col md:flex-row md:justify-center md:items-center items-center">
       
        <div className="mx-8 px-2 flex flex-col space-y-4 mb-2 md:mb-0 text-center"> {/* This is the first div to wrapp the Getin Touch */}
          <p className='mx-8 font-bold'>Get in Touch</p>
          <div className="mx-8 text-niyuyello flex space-x-4">
            <FaFacebook className="mx-8 text-2xl cursor-pointer" />
            <FaTwitter className="mx-8 text-2xl cursor-pointer" />
            <FaInstagram className="mx-8 text-2xl cursor-pointer" />
            
            <FaLinkedin className="mx-8 text-2xl cursor-pointer" />
          </div>
          <p className='mx-8'>Aso Abuja FCT</p>
          <p className='mx-8'>shazaniyu@gmail.com</p>
          <p className='mx-8'>+234-9074-235-666</p>
        </div>
        
     
       
        
    
        <div className="mx-8 px-2 flex my-4 flex-col  md:w-1/2 text-center">{/* This is the third div to wrapp the Newsletter */}
        <p className='mx-8 font-bold'>Newsletter</p>
          <p className="mx-8 mb-4">Subscribe to my newsletter to get our news & deals delivered to you</p>
          <form className="flex flex-col md:flex-row space-y-2 md:space-y-0 md:space-x-1">
            <input
              type="email"
              placeholder="Enter your email address"
              className="mx-8 border border-adainyellow px-2 py-1 rounded w-full md:w-auto"
            />
            <button
              type="submit"
              className="mx-8 bg-niyuyello text-white px-4 py-2 rounded"
            >
              Subscribe
            </button>
          </form>
        </div>
      </div>
    </footer>
  );
};

export default AdainFooter;
