import Image from 'next/image'


import { TypeAnimation } from 'react-type-animation';

const AdainAnimatedText = () => {
  return (
    <div className='mx-4 mb-10'>
      
    <TypeAnimation 
      sequence={[
        // Same substring at the start will only be typed out once, initially
        'WEBSITE DEVELOPMENT',
        2000, // wait 1s before replacing 
        'MOBILE APP DEVELOPMENT',
        2000, // wait 2
        `SOFTWARE DEVELOPER`,
        2000, // wait 2
      ]}
      wrapper="span"
      speed={20} // speed set to 20 seconds
      className="flex items-center mt-10 pt-8 text-4xl font-extrabold mx-4 px-10 justify-center tracking-tighter  text-niyuyello"

      repeat={Infinity} // let the animation repeat for forever
    />
    
    
    </div>
  );
};

export default AdainAnimatedText;


