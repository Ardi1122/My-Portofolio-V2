import { motion } from "framer-motion";
import { useState } from "react";
import MainImage from "../assets/images/ProfileHome.png";

function Home() {
  return (
    <div className="px-8 md:py-4 pt-28">
      <div className="container mx-auto">
        {/* Animasi Teks I'M ARDS */}
        <motion.div
          className="relative w-fit mx-auto"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          <h1 className="font-extrabold lg:text-8xl md:text-7xl italic text-center sm:text-6xl text-4xl">
            <span className="text-red-600">I'M</span> ARDS
          </h1>
          <div className="sm:w-[10.4rem] w-[5.4rem] h-1 bg-red-600 absolute right-0 mt-1"></div>
        </motion.div>

        {/* Animasi Teks WEB DEVELOPER */}
        <motion.div
          className="relative w-fit mx-auto mt-6 cursor-pointer"
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, delay: 0.5 }}
        >
          <div
            className={`sm:w-[823px] w-76 mx-auto pt-28 absolute sm:top-0 right-0 lg:translate-x-[26%] sm:translate-x-[26%] z-10 -translate-x-[4%] sm:translate-y-0 translate-y-[18rem] text-3xl`}
          >
            <h1
              className={`text-center text-red-600 lg:text-8xl md:text-7xl sm:text-6xl font-extrabold italic`}
            >
              WE<span className="sm:text-white text-black">B DEVELO</span>
              <span>PER</span>
              <br /> <span className="sm:text-white">& <br /> STUDENT</span>
            </h1>
          </div>

          {/* Animasi Background dan Gambar */}
          <motion.div
            className="relative lg:mr-0 sm:pr-10 sm:mr-0 md:pr-10"
            initial={{ scale: 0.6, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 1, delay: 0.8 }}
          >
            <div
              className={`lg:w-[474px] lg:h-[454px] md:w-[464px] md:h-[444px] sm:w-[444px] sm:h-[424px]  bg-black absolute -z-20 bottom-0 rounded-e-lg rounded-s-lg left-0 sm:-translate-x-0 -translate-x-3`}
            ></div>
            <img
              src={MainImage}
              alt="Profile"
              className="lg:w-[400px] lg:h-[533.03px] md:w-[390px] md:h-[523.03px] sm:w-[360px] sm:h-[483.03px] w-[286px] h-[381.11px] rounded-bl-xl"
            />
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
}

export default Home;
