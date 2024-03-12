"use client";
import React from "react";
import { motion } from "framer-motion";
import { fadeIn } from "@/utils/motion";
import { SectionWrapper } from "@/hoc";
import { config } from "dotenv";
config();

const KnowOurLocation = () => {
  return (
    <motion.div
      variants={fadeIn("down", "spring", 0.5, 1)}
      className="w-full h-full overflow-hidden rounded-lg shadow-lg"
    >
      <div id="my-map-display" className="h-full">
        <iframe
          className="w-full h-full"
          src={`https://www.google.com/maps/embed/v1/place?q=Jibika+Pharmacy,+Madhya+Marg,+Kathmandu,+Nepal&key=${process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY}`}
          title="Jibika Pharmacy Location"
        ></iframe>
      </div>
    </motion.div>
  );
};

export default SectionWrapper(KnowOurLocation, "location");
