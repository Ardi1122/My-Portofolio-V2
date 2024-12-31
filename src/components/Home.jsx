import { useState } from "react";
import MainImage from "../assets/images/ProfileHome.png";

function Home() {

  const [hover, setHover] = useState(false)

  function handleMouseEnter() {
    setHover(true);
  }

  function handleMouseLeave() {
    setHover(false);
  }

  let hov = hover? "z-0":"-z-10"

  return (
    <div className="px-8 md:py-4 pt-28">
      <div className="container mx-auto">
        <div onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave} className="relative w-fit mx-auto">
          <h1 className="font-extrabold lg:text-8xl md:text-7xl italic text-center sm:text-6xl text-4xl">
            <span className="text-red-600">I'M</span> ARDS
          </h1>
          <div className="sm:w-[10.4rem] w-[5.4rem] h-1 bg-red-600 absolute right-0 mt-1"></div>
        </div>
        <div className="relative w-fit mx-auto mt-6 cursor-pointer">
          <div className={`sm:w-[823px] w-76 mx-auto pt-28 absolute sm:top-0 right-0 lg:translate-x-[26%] sm:translate-x-[26%] z-10 -translate-x-[4%] sm:translate-y-0 translate-y-[18rem] ${hov} text-3xl`}>
            <h1 className={`text-center text-red-600 lg:text-8xl md:text-7xl sm:text-6xl font-extrabold italic`}>
              WE<span className="sm:text-white text-black">B DEVELO</span><span>PER</span><br /> <span className="sm:text-white">& <br /> STUDENT</span>
            </h1>
          </div>

          <div className="relative lg:mr-0 sm:pr-10 sm:mr-0 md:pr-10">
            <div className={`lg:w-[474px] lg:h-[454px] md:w-[464px] md:h-[444px] sm:w-[444px] sm:h-[424px]  bg-black absolute -z-20 bottom-0 rounded-e-lg rounded-s-lg left-0 sm:-translate-x-0 -translate-x-3`}></div>
            <img src={MainImage} alt="Profile" className="lg:w-[400px] lg:h-[533.03px] md:w-[390px] md:h-[523.03px] sm:w-[360px] sm:h-[483.03px] w-[286px] h-[381.11px] rounded-bl-xl" />
          </div>
        </div>
      </div>
    </div>
  );
}
export default Home;
