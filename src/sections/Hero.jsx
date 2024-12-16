import { useEffect, useState } from "react";
import profile from "../assets/profile1.jpeg";
import { roleDescriptions } from "../constants/roleDescriptions";
import AOS from "aos";
import "aos/dist/aos.css";
import { FaInstagramSquare, FaLinkedin } from "react-icons/fa";
import { FaHackerrank, FaSquareGithub } from "react-icons/fa6";
import CommonButton from "../components/CommonButton";

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
      once: true, // Whether animation should happen only once
    });
  }, []);

  useEffect(() => {
    // Re-trigger AOS animations when roleDescriptions change
    AOS.refresh();
  }, [currentIndex]); // Run when currentIndex updates

  return (
    <div className="max-w-[1920px] mx-auto h-screen">
      <div className="flex">
        {/* description */}
        <div className="w-3/5 p-20 space-y-10">
          <h1 className="text-white font-bold text-5xl">
            Hi, I am{" "}
            <span className="text-[#8bc7f3] font-extrabold">
              HIRUNA DE SILVA
            </span>
          </h1>
          {/* <h1 className="text-white font-bold text-6xl">I AM <span className="text-[#8bc7f3] font-extrabold  flex">HIRUNA DE SILVA</span></h1> */}
          <h2
            className="text-white font bold text-5xl transition-opacity duration-1000 ease-in-out"
            data-aos="fade-left"
            key={currentIndex}
          >
            {roleDescriptions[currentIndex]}
          </h2>
          <p className="text-white text-xl">
            Welcome to my portfolio website! I’m [Your Name], a passionate
            Computer Engineering undergraduate at the Faculty of Engineering,
            University of Ruhuna, Sri Lanka. I specialize in web and mobile
            application development and thrive on transforming innovative ideas
            into functional, real-world solutions. Currently, I’m gaining
            hands-on experience as a Software Engineering Intern, continuously
            enhancing my skills and exploring new technologies. Check out my
            projects and see how I bring ideas to life!
          </p>
        </div>
        {/* image */}
        <div className="w-2/5 p-20 self-center">
          <img src={profile} alt="profile" className="rounded-3xl" />
        </div>
      </div>
      {/* social media icons */}
      <div className="px-20 flex gap-4">
        <a
          href="https://www.linkedin.com/in/hiruna-de-silva-2329aa229"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaLinkedin className="text-white text-4xl" />
        </a>
        <a
          href="https://github.com/HirunaD"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaSquareGithub className="text-white text-4xl" />
        </a>
        <a
          href="https://www.hackerrank.com/profile/EG_2020_3884"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaHackerrank className="text-white text-4xl" />
        </a>
        <a
          href="https://www.instagram.com/hiruna_dsilva?igsh=ODZzd3ViY3R2bW05"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaInstagramSquare className="text-white text-4xl" />
        </a>
      </div>
      {/* buttons */}
      <div className="flex px-20 py-10 gap-4">
        <CommonButton
          label="Download CV"
          href="/assets/CV.pdf" // Replace with your CV file path
        />
        <CommonButton
          label="Hire Me"
          href="#contact" // Replace with your CV file path
        />
      </div>
    </div>
  );
}

export default Hero;
