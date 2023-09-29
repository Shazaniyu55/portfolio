import React from 'react';
import Image from 'next/image';

const Skills = () => {
  return (
    <div className="bg-niyuyello text-niyuwhite py-12">
      
      <div className="container mx-auto">
        <div className="flex flex-wrap justify-center">
          {/* Card 1 */}
          <div className="w-full sm:w-1/2 md:w-1/3 lg:w-1/4 px-4 mb-8">
            <div className=" rounded-lg p-6 hover:scale-40 transform transition-transform duration-300">
              <div className="mb-4 relative">
              <Image src='/images/angular.svg'
              className="rounded-full w-full h-auto"
              width={200} height={100}/>
                
                {/* Gradient Effect */}
                <div
                  className="absolute inset-0"
                  style={{
                    background: 'linear-gradient(to bottom, rgba(0, 0, 0, 0) 0%, rgba(0, 0, 0, 0.5) 100%)',
                  }}
                ></div>
              </div>
              <h3 className="text-xl font-semibold mb-4">Angular</h3>
              <p className="text-gray-600 mb-4">
                
              </p>

            </div>
          </div>

          {/* Card 2 */}
          <div className="w-full sm:w-1/2 md:w-1/3 lg:w-1/4 px-4 mb-8">
            <div className=" rounded-lg p-6 hover:scale-105 transform transition-transform duration-300">
              <div className="mb-4 relative">
              <Image src='/images/html.webp'
              className="rounded-full w-full h-auto"
              width={200} height={100}/>
                {/* Gradient Effect */}
                <div
                  className="absolute inset-0"
                  style={{
                    background: 'linear-gradient(to bottom, rgba(0, 0, 0, 0) 0%, rgba(0, 0, 0, 0.5) 100%)',
                  }}
                ></div>
              </div>
              <h3 className="text-xl font-semibold mb-4">HTML 5</h3>
              <p className="text-gray-600 mb-4">
               
              </p>

            </div>
          </div>

          {/* Card 3 */}
          <div className="w-full sm:w-1/2 md:w-1/3 lg:w-1/4 px-4 mb-8">
            <div className=" rounded-lg p-6 hover:scale-105 transform transition-transform duration-300">
              <div className="mb-4 relative">
              <Image src='/images/next.png'
              className="rounded-full w-full h-auto"
              width={200} height={100}/>
                {/* Gradient Effect */}
                <div
                  className="absolute inset-0"
                  style={{
                    background: 'linear-gradient(to bottom, rgba(0, 0, 0, 0) 0%, rgba(0, 0, 0, 0.5) 100%)',
                  }}
                ></div>
              </div>
              <h3 className="text-xl font-semibold mb-4">NEXT JS</h3>
              <p className="text-gray-600 mb-4">
              
              </p>

            </div>
          </div>
          {/**card 4 */}
           {/* Card 3 */}
           <div className="w-full sm:w-1/2 md:w-1/3 lg:w-1/4 px-4 mb-8">
            <div className=" rounded-lg p-6 hover:scale-105 transform transition-transform duration-300">
              <div className="mb-4 relative">
              <Image src='/images/react.png'
              className="rounded-full w-full h-auto"
              width={200} height={100}/>
                {/* Gradient Effect */}
                <div
                  className="absolute inset-0"
                  style={{
                    background: 'linear-gradient(to bottom, rgba(0, 0, 0, 0) 0%, rgba(0, 0, 0, 0.5) 100%)',
                  }}
                > </div>
              </div>
              <h3 className="text-xl font-semibold mb-4">React js & React Native</h3>
              <p className="text-gray-600 mb-4">
              
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skills;
