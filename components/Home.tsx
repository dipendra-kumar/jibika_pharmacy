import AboutUs from "./Home/AboutUs";
import ContactUs from "./Home/ContactUs";
import Hero from "./Home/Hero";
import OurDoctors from "./Home/OurDoctors";
import OurServices from "./Home/OurServices";
import KnowOurLocation from "./KnowOurLocation";

const Home = () => {
  return (
    <>
      <Hero />
      <AboutUs />
      <OurServices />
      <OurDoctors />
      <ContactUs />
      <KnowOurLocation />
    </>
  );
};

export default Home;
