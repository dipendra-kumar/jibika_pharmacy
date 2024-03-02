import React from "react";
import { motion } from "framer-motion";

import { Nunito_Sans } from "next/font/google";
import { fadeIn, textVariant } from "@/utils/motion";
const nunitoSans = Nunito_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

interface TitleProps {
  title: string;
}

const HeadTitle = ({ title }: TitleProps) => {
  return (
    <div className="w-full flex items-center justify-center gap-5 my-10">
      <motion.div
        variants={fadeIn("right", "tween", 0.2, 0.5)}
        className="w-20 bg-blue-400 h-2 rounded-full"
      ></motion.div>
      <motion.h2
        variants={textVariant()}
        className={`${nunitoSans.className} text-4xl lg:text-6xl font-bold capitalize text-center  cursor-default`}
      >
        {title}
      </motion.h2>
      <motion.div
        variants={fadeIn("left", "tween", 0.2, 0.5)}
        className="w-20 bg-blue-400 h-2 rounded-full"
      ></motion.div>
    </div>
  );
};

export default HeadTitle;
