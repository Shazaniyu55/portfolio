import Skills from '@/components/Skills';
import NightMode from '../components/NightMode';
import Image from 'next/image';


const Home = ()=>{

  return(
    <div>
    <div className='flex justify-center items-center'>
     
    <h1 className='text-4xl font-bold'>About Me</h1>
    </div>
    
    <div className='flex justify-center items-center font-monteserat text-2xl p-2 '>
      <p>I am an software developer with a 10 years experience in frontend and backend, i have worked with a various languages over the years i am skilled in web base language such as HTML,CSS,Javascript ,PHP, React Js, Node Js, tailwind CSS,React Native and Next js, i am also skillled in the various framworks such as Angular  and Veu.
         There's more to me than just coding, i love to travel, play games and interact with new people.</p>

    </div>

    <div className='flex justify-center items-center'>
        <h1 className='text-4xl font-bold'>SKILLS</h1>
        </div>
      <Skills />

    

   

    </div>
  
  )

}

export default Home