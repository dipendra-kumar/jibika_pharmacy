"use client";
// import React, { useEffect } from "react";
// import { Montserrat } from "next/font/google";
// import { main_section_img } from "@/assets";
// import { motion } from "framer-motion";
// import Image from "next/image";
// import { fadeIn, zoomIn } from "@/utils/motion";
// import { SectionWrapper } from "@/hoc";
// import Link from "next/link";
// import { useDispatch } from "react-redux";
// import { AppDispatch } from "@/store/store";
// import { fetchDoctors } from "@/store/slices/doctorSlice";

// const montserrat = Montserrat({
//   subsets: ["latin"],
//   weight: ["700"],
//   style: "normal",
// });
// const Hero = () => {
//   const dispatch = useDispatch<AppDispatch>();

//   const getDoctors = async () => {
//     await dispatch(fetchDoctors());
//   };
//   useEffect(() => {
//     getDoctors();
//   }, []);
//   return (
//     <div className="flex h-screen flex-col justify-between">
//       <div className="relative flex h-full w-full items-center justify-center overflow-hidden">
//         <div className="absolute inset-0 z-0 bg-gradient-to-r from-[#2e2e2e] to-transparent"></div>

//         {/* Heading */}
//         <motion.h2
//           variants={zoomIn(0.3, 0.7)}
//           className={`${montserrat.className} relative z-10 text-center text-4xl font-extrabold uppercase tracking-wider text-white sm:text-6xl lg:text-8xl`}
//         >
//           Your Local Neighbourhood Pharmacy
//         </motion.h2>
//       </div>
//       <div className="absolute -z-30 h-full w-full overflow-hidden">
//         <div className="h-full w-full">
//           <Image
//             src={main_section_img}
//             alt="main-section-image"
//             className="duration-1000] h-full w-full object-cover opacity-0 transition-opacity"
//             onLoad={(event) =>
//               event.currentTarget.classList.remove("opacity-0")
//             }
//           />
//         </div>
//       </div>

//       <Link href="get-appointment">
//         <button className=" absolute bottom-10 left-1/2 flex -translate-x-1/2 transform rounded-full border bg-primary px-10 py-5 text-lg font-bold text-primary-foreground duration-300 hover:bg-secondary lg:hidden ">
//           Shedule Appointment
//         </button>
//       </Link>
//     </div>
//   );
// };

// export default SectionWrapper(Hero, "hero");

import React, { useEffect, useRef, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { crousel_img_1, crousel_img_2, crousel_img_3 } from "@/assets";
import Image from "next/image";
import { FaGreaterThan, FaLessThan } from "react-icons/fa";
import { SectionWrapper } from "@/hoc";
import { Montserrat } from "next/font/google";

const slogans = [
  "Your local Neighborhood Pharmacy. Caring for you, close to home!",
  "Your Trusted Partner in Health. Your Wellness, Our Priority!",
  "Where Every Customer is Family. Healthier Happier Lives Await!",
];
const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["700"],
  style: "normal",
});

const HeroCarousel: React.FC = () => {
  const [currentImage, setCurrentImage] = useState(0);
  const images = [crousel_img_1, crousel_img_2, crousel_img_3];
  const touchStartX = useRef(0);

  const nextImage = () => {
    setCurrentImage((currentImage + 1) % images.length);
  };

  const prevImage = () => {
    setCurrentImage((currentImage - 1 + images.length) % images.length);
  };

  const handleTouchStart = (event: React.TouchEvent<HTMLDivElement>) => {
    touchStartX.current = event.touches[0].clientX;
  };

  const handleTouchEnd = (event: React.TouchEvent<HTMLDivElement>) => {
    const touchEndX = event.changedTouches[0].clientX;
    const deltaX = touchEndX - touchStartX.current;

    if (deltaX > 50) {
      prevImage();
    } else if (deltaX < -50) {
      nextImage();
    }
  };

  useEffect(() => {
    const interval = setInterval(() => {
      nextImage();
    }, 5000);

    return () => clearInterval(interval);
  }, [currentImage]);
  return (
    <div className="relative h-screen w-full overflow-hidden ">
      <div
        className="absolute inset-0 flex w-full flex-col items-center justify-center text-white"
        onTouchStart={handleTouchStart}
        onTouchEnd={handleTouchEnd}
      >
        <AnimatePresence mode="wait">
          <motion.div
            key={currentImage}
            className={`absolute inset-0 flex w-full items-center justify-center `}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0.5 }}
            transition={{ duration: 0.5 }}
          >
            <motion.div
              className="absolute inset-0 flex w-full items-center justify-center"
              initial={{ opacity: 0.5 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0.2 }}
              transition={{ duration: 0.5 }}
            >
              <Image
                src={images[currentImage]}
                alt="background-image"
                className="duration-[2s] h-full w-full object-cover opacity-0 transition-opacity"
                onLoad={(event) =>
                  event.currentTarget.classList.remove("opacity-0")
                }
              />
              <div className="absolute h-full w-full bg-gradient-to-b from-[#111827] to-black opacity-40" />
            </motion.div>
            <motion.div
              className="absolute text-center text-3xl font-bold text-gray-100 lg:px-10 lg:text-6xl"
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 20 }}
              transition={{ duration: 0.5 }}
            >
              {slogans[currentImage].split(".").map((sentence, index) => (
                <p
                  className={` ${montserrat.className} mt-2 drop-shadow-lg`}
                  key={index}
                >
                  {sentence.trim()}
                </p>
              ))}
            </motion.div>
            <div className="absolute bottom-2 left-0 right-0 text-center">
              {images.map((_, index) => (
                <span
                  key={index}
                  className={`mx-1 inline-block h-3 w-3 cursor-pointer rounded-full ${
                    index === currentImage ? "bg-white" : "bg-gray-300"
                  }`}
                  onClick={() => setCurrentImage(index)}
                />
              ))}
            </div>
          </motion.div>
        </AnimatePresence>
      </div>
      <div className="absolute bottom-3 left-4 z-40 hidden -translate-y-1/2 transform lg:flex">
        <button
          className="flex h-14 w-14 items-center justify-center rounded-full bg-white bg-opacity-20 text-white transition duration-300 hover:bg-opacity-100 hover:text-black"
          onClick={prevImage}
        >
          <FaLessThan />
        </button>
      </div>
      <div className="absolute bottom-3 right-4 z-40 hidden -translate-y-1/2 transform lg:flex">
        <button
          className="flex h-14 w-14 items-center justify-center rounded-full bg-white bg-opacity-20 text-white transition duration-300 hover:bg-opacity-100 hover:text-black"
          onClick={nextImage}
        >
          <FaGreaterThan />
        </button>
      </div>
    </div>
  );
};

export default SectionWrapper(HeroCarousel, "hero");
