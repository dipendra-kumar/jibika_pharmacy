import { motion } from "framer-motion";
import { staggerContainer } from "@/utils/motion";

const StarWrapper = (Component: React.FC, idName: string) =>
  function HOC() {
    return (
      <motion.section
        variants={staggerContainer()}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.15 }}
        className={`max-w-7xl mx-auto relative`}
      >
        <span className="hash-span" id={idName}></span>
        <Component />
      </motion.section>
    );
  };

export default StarWrapper;
