import profile from '../assets/profile1.jpeg'

function Home() {
  return (
    <div className="max-w-[1920px] mx-auto">
      <div className="flex">
        {/* description */}
        <div className="w-3/5 p-20 space-y-10">
          <p className="text-white font-bold text-4xl">Hi There! 👋🏻</p>
          <h1 className="text-white font-bold text-6xl">I AM <span className="text-[#8bc7f3] font-extrabold  flex">HIRUNA DE SILVA</span></h1>
          <h2 className="text-white font bold text-5xl">Frontend Developer</h2>
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

export default Home;
