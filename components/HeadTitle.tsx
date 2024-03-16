import React from "react";
import { motion } from "framer-motion";

import { Nunito_Sans } from "next/font/google";
import { fadeIn, textVariant, zoomIn } from "@/utils/motion";
const nunitoSans = Nunito_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

interface TitleProps {
  title: string;
  subtitle: string;
}

const HeadTitle = ({ title, subtitle }: TitleProps) => {
  return (
    <motion.div
      variants={textVariant()}
      className="w-full flex flex-col items-center justify-center p-5 gap-5"
    >
      <h1 className="inline-block bg-light text-secondary text-center border-2 border-[#effff5] rounded-full py-1 px-4 max-w-fit font-semibold">
        {title}
      </h1>
      <p className="font-bold text-5xl text-center ">{subtitle}</p>
    </motion.div>
  );
};

export default HeadTitle;
