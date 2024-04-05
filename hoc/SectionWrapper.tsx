import { motion } from "framer-motion";
import { staggerContainer } from "@/utils/motion";

const SectionWrapper = (Component: React.FC, idName: string) =>
  function HOC() {
    return (
      <motion.section
        variants={staggerContainer()}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.15 }}
      >
        <span className="hash-span" id={idName}></span>
        <Component />
      </motion.section>
    );
  };

export default SectionWrapper;
