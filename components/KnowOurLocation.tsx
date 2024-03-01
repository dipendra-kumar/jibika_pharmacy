"use client";
import React from "react";
import { motion } from "framer-motion";
import { fadeIn, textVariant } from "@/utils/motion";
import { SectionWrapper } from "@/hoc";
import { config } from "dotenv";
config();

const KnowOurLocation = () => {
  return (
    <div className=" min-h-[60%] w-full">
      <div className="p-8 flex flex-col-reverse md:grid grid-cols-1 md:grid-cols-2 gap-8 pt-10 lg:px-20">
        <motion.div
          variants={fadeIn("right", "spring", 0.5, 1)}
          className="max-w-full overflow-hidden rounded-lg shadow-lg"
        >
          <div id="my-map-display" className="h-96">
            <iframe
              className="w-full h-full"
              src={`https://www.google.com/maps/embed/v1/place?q=Jibika+Pharmacy,+Madhya+Marg,+Kathmandu,+Nepal&key=${process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY}`}
              title="Jibika Pharmacy Location"
            ></iframe>
          </div>
        </motion.div>
        <motion.div
          variants={textVariant()}
          className="flex flex-col justify-center items-center"
        >
          <h1 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
            Want to know where we are located ?
          </h1>
          <div className="w-[80%] flex flex-col items-center justify-center text-center">
            <p className=" mt-4  text-gray-600">
              Please check the given map for our location and feel free to visit
              us during our business hours for any inquiries or assistance you
              may need.
            </p>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default SectionWrapper(KnowOurLocation, "location");
