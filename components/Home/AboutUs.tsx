import React from "react";
import { Dancing_Script } from "next/font/google";

const dancingScript = Dancing_Script({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

const AboutUs = () => {
  return (
    <section id="about_us">
      <div className="w-full flex flex-col items-center justify-center p-5 lg:p-10">
        <h2
          className={`${dancingScript.className} text-4xl lg:text-7xl font-bold capitalize mb-6 text-center duration-300 hover:tracking-wider cursor-default`}
        >
          About our Pharmacy
        </h2>
        <p className="text-lg lg:text-2xl text-center">
          At Jibika Pharmacy and Health Clinic, we're dedicated to your
          well-being. Our experienced team provides personalized care, offering
          a wide range of medications, wellness products, and health services.
          We prioritize your health journey, focusing on education, prevention,
          and holistic wellness. Your health is our priority, and we're
          committed to being your trusted partner on the path to better health.
        </p>
      </div>
    </section>
  );
};

export default AboutUs;
