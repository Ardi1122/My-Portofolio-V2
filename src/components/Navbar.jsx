import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";

function Navbar() {
  const [show, setShow] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  const handleClick = () => {
    setShow(!show);
  };

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768); // Set breakpoint untuk mobile
    };
    handleResize(); // Initial check
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  let arrowIcon = show ? (
    <svg
      className="border-transparent sm:w-7 sm:h-7"
      xmlns="http://www.w3.org/2000/svg"
      height="24px"
      viewBox="0 -960 960 960"
      width="24px"
      fill="#000"
    >
      <path d="M360-120v-720h80v720h-80Zm160-160v-400l200 200-200 200Z" />
    </svg>
  ) : (
    <svg
      className="border-transparent sm:w-7 sm:h-7"
      xmlns="http://www.w3.org/2000/svg"
      height="24px"
      viewBox="0 -960 960 960"
      width="24px"
      fill="#000"
    >
      <path d="M440-280v-400L240-480l200 200Zm80 160h80v-720h-80v720Z" />
    </svg>
  );

  return (
    <div className="mx-auto z-50 px-8 py-8 fixed w-full h-4/5 md:flex md:items-center md:h-screen md:px-6">
      <motion.div
  initial={{
    opacity: 0,
    x: isMobile ? 0 : -100, // Transformasi awal untuk x-axis hanya berlaku pada desktop
    y: isMobile ? -100 : 0, // Transformasi awal untuk y-axis hanya berlaku pada mobile
    scale: 0.5,
  }}
  animate={{
    opacity: 1,
    x: isMobile ? 0 : show ? -300 : 0, // Transformasi x hanya untuk desktop
    y: isMobile ? (show ? -300 : 0) : 0, // Transformasi y hanya untuk mobile
    scale: 1,
  }}
  whileHover={{ scale: 1.1 }}
  transition={{ duration: 0.2 }}
  className={`bg-black p-4 rounded-full flex justify-evenly ${
    isMobile ? "flex-row w-full h-auto relative" : "md:flex-col md:h-96 md:absolute"
  } transition-transform md:w-fit`}
>

        <motion.svg
          whileHover={{ scale: 1.25 }}
          whileTap={{ scale: 1 }}
          className="border-transparent sm:w-7 sm:h-7"
          xmlns="http://www.w3.org/2000/svg"
          height="24px"
          viewBox="0 -960 960 960"
          width="24px"
          fill="#fff"
        >
          <path d="M240-200h120v-240h240v240h120v-360L480-740 240-560v360Zm-80 80v-480l320-240 320 240v480H520v-240h-80v240H160Zm320-350Z" />
        </motion.svg>

        <motion.svg
          whileHover={{ scale: 1.25 }}
          whileTap={{ scale: 1 }}
          className="sm:w-7 sm:h-7"
          xmlns="http://www.w3.org/2000/svg"
          height="24px"
          viewBox="0 -960 960 960"
          width="24px"
          fill="#fff"
        >
          <path d="M480-480.67q-66 0-109.67-43.66Q326.67-568 326.67-634t43.66-109.67Q414-787.33 480-787.33t109.67 43.66Q633.33-700 633.33-634t-43.66 109.67Q546-480.67 480-480.67ZM160-160v-100q0-36.67 18.5-64.17T226.67-366q65.33-30.33 127.66-45.5 62.34-15.17 125.67-15.17t125.33 15.5q62 15.5 127.28 45.3 30.54 14.42 48.96 41.81Q800-296.67 800-260v100H160Zm66.67-66.67h506.66V-260q0-14.33-8.16-27-8.17-12.67-20.5-19-60.67-29.67-114.34-41.83Q536.67-360 480-360t-111 12.17Q314.67-335.67 254.67-306q-12.34 6.33-20.17 19-7.83 12.67-7.83 27v33.33ZM480-547.33q37 0 61.83-24.84Q566.67-597 566.67-634t-24.84-61.83Q517-720.67 480-720.67t-61.83 24.84Q393.33-671 393.33-634t24.84 61.83Q443-547.33 480-547.33Zm0-86.67Zm0 407.33Z" />
        </motion.svg>

        <motion.svg
          whileHover={{ scale: 1.25 }}
          whileTap={{ scale: 1 }}
          className="sm:w-7 sm:h-7"
          xmlns="http://www.w3.org/2000/svg"
          height="24px"
          viewBox="0 -960 960 960"
          width="24px"
          fill="#fff"
        >
          <path d="m320-241.33-240-240 241.33-241.34L369-675 175-481l192.33 192.33L320-241.33ZM638.67-240 591-287.67l194-194L592.67-674 640-721.33l240 240L638.67-240Z" />
        </motion.svg>

        <motion.svg
          whileHover={{ scale: 1.25 }}
          whileTap={{ scale: 1 }}
          className="sm:w-7 sm:h-7"
          xmlns="http://www.w3.org/2000/svg"
          height="24px"
          viewBox="0 -960 960 960"
          width="24px"
          fill="#fff"
        >
          <path d="m370-80-16-128q-13-5-24.5-12T307-235l-119 50L78-375l103-78q-1-7-1-13.5v-27q0-6.5 1-13.5L78-585l110-190 119 50q11-8 23-15t24-12l16-128h220l16 128q13 5 24.5 12t22.5 15l119-50 110 190-103 78q1 7 1 13.5v27q0 6.5-2 13.5l103 78-110 190-118-50q-11 8-23 15t-24 12L590-80H370Zm70-80h79l14-106q31-8 57.5-23.5T639-327l99 41 39-68-86-65q5-14 7-29.5t2-31.5q0-16-2-31.5t-7-29.5l86-65-39-68-99 42q-22-23-48.5-38.5T533-694l-13-106h-79l-14 106q-31 8-57.5 23.5T321-633l-99-41-39 68 86 64q-5 15-7 30t-2 32q0 16 2 31t7 30l-86 65 39 68 99-42q22 23 48.5 38.5T427-266l13 106Zm42-180q58 0 99-41t41-99q0-58-41-99t-99-41q-59 0-99.5 41T342-480q0 58 40.5 99t99.5 41Zm-2-140Z" />
        </motion.svg>

        <motion.svg
          whileHover={{ scale: 1.25 }}
          whileTap={{ scale: 1 }}
          className="sm:w-7 sm:h-7"
          xmlns="http://www.w3.org/2000/svg"
          height="24px"
          viewBox="0 -960 960 960"
          width="24px"
          fill="#fff"
        >
          <path d="M149.33-40v-66.67h661.34V-40H149.33Zm0-813.33V-920h661.34v66.67H149.33ZM480-442.67q50 0 84.33-34.33 34.34-34.33 34.34-84.33t-34.34-84.34Q530-680 480-680t-84.33 34.33q-34.34 34.34-34.34 84.34T395.67-477Q430-442.67 480-442.67ZM141.33-160q-27 0-46.83-19.83-19.83-19.84-19.83-46.84v-506.66q0-28.34 19.83-47.5Q114.33-800 141.33-800h677.34q27 0 46.83 19.83 19.83 19.84 19.83 46.84v506.66q0 27-19.83 46.84Q845.67-160 818.67-160H141.33Zm82-66.67q49-60.66 117-92.33t139.34-31.67Q551-350.67 620-319q69 31.67 116.67 92.33h82v-506.66H141.33v506.66h82Zm102 0H636q-30.33-26.66-69.17-42Q528-284 480-284t-86.17 15.33q-38.16 15.34-68.5 42Zm154.78-282.66q-21.78 0-36.61-15.17-14.83-15.17-14.83-36.83 0-21.67 14.72-36.84 14.73-15.16 36.5-15.16 21.78 0 36.61 15.16 14.83 15.17 14.83 36.84 0 21.66-14.72 36.83-14.73 15.17-36.5 15.17ZM480-480Z" />
        </motion.svg>
      </motion.div>
      <div
        onClick={handleClick}
        className="absolute top-2 left-1/2 transform -translate-x-1/2 rotate-90 md:top-[50%] md:left-0 md:translate-x-0 md:rotate-0 cursor-pointer"
      >
        {arrowIcon}
      </div>
    </div>
  );
}

export default Navbar;
