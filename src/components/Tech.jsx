import React from "react";
import { motion } from "framer-motion";

import { styles } from "../styles";
import { BallCanvas } from "./canvas";
import { SectionWrapper } from "../hoc";
import { technologies } from "../constants";
import { fadeIn, textVariant } from "../utils/motion";

const Tech = () => {
  return (
    <div className="flex flex-row flex-wrap justify-center gap-10">
      <motion.div variants={textVariant()} className="block">
        <h2 className={styles.sectionHeadText}>Skills.</h2>
      </motion.div>
      <div className="flex flex-nowrap flex-row">
        {technologies.map((technology) => (
          <div className="w-28 h-28" key={technology.name}>
            <BallCanvas icon={technology.icon} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default SectionWrapper(Tech, "");
