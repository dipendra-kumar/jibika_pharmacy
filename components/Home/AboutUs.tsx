'use client'
import React from "react";
import { useInView } from "react-intersection-observer";
import {motion} from 'framer-motion'
import { Dancing_Script } from "next/font/google"; // Assuming you're using the Dancing Script font

const dancingScript = Dancing_Script({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});


const AboutUs = () => {
  const { ref, inView } = useInView({
    triggerOnce: true, // Trigger animation only once
    threshold: 0.5, // Trigger animation when 50% of the element is in view
  });

  return (
    <section id="about_us">
      <div
        ref={ref}
        className="w-full flex flex-col items-center justify-center p-5 lg:p-10"
      >
        <motion.h2
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className={`${dancingScript.className} text-4xl lg:text-7xl font-bold capitalize mb-6 text-center duration-300 hover:tracking-wider cursor-default`}
        >
          About our Pharmacy
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y:  20}}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="text-lg lg:text-2xl text-center"
        >
          At Jibika Pharmacy and Health Clinic, we&apos;re dedicated to your
          well-being. Our experienced team provides personalized care, offering
          a wide range of medications, wellness products, and health services.
          We prioritize your health journey, focusing on education, prevention,
          and holistic wellness. Your health is our priority, and we&apos;re
          committed to being your trusted partner on the path to better health.
        </motion.p>
      </div>
    </section>
  );
};

export default AboutUs;
