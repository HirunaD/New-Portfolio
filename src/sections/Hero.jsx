import { useEffect, useState } from 'react';
import profile from '../assets/profile1.jpeg'
import { roleDescriptions } from '../constants/roleDescriptions';
import AOS from "aos";
import "aos/dist/aos.css";


function Hero() {

  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % roleDescriptions.length);
    }, 3000); // Change text every 3 seconds
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    AOS.init({
      duration: 1000, // Animation duration (in milliseconds)
      once: true,     // Whether animation should happen only once
    });
  }, []);
  return (
    <div className="max-w-[1920px] mx-auto h-screen">
      <div className="flex">
        {/* description */}
        <div className="w-3/5 p-20 space-y-10">
          <h1 className="text-white font-bold text-5xl">Hi, I am <span className="text-[#8bc7f3] font-extrabold">HIRUNA DE SILVA</span></h1>
          {/* <h1 className="text-white font-bold text-6xl">I AM <span className="text-[#8bc7f3] font-extrabold  flex">HIRUNA DE SILVA</span></h1> */}
          <h2 className="text-white font bold text-5xl transition-opacity duration-1000 ease-in-out" data-aos="fade-right">{roleDescriptions[currentIndex]}</h2>
          <p className="text-white text-xl">
            I am a Computer Engineering Undergraduate at Faculty of Engineering,
            University of Ruhuna in Sri Lanka.
          </p>
        </div>
        {/* image */}
        <div className='w-2/5 p-20 self-center'>
          <img src={profile} alt="profile" className='rounded-3xl' />
        </div>  
        {/* social media icons */}
        <div></div>
        {/* buttons */}
      </div>
    </div>
  );
}

export default Hero;
