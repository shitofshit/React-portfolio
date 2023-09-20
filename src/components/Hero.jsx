import { motion } from "framer-motion";

import { styles } from "../styles";
import { ComputersCanvas } from "./canvas";

const Hero = () => {
  return (
    <section className={`relative w-full h-screen mx-auto `}>
      <div
        className={`absolute inset-0 top-[130px]  max-w-7xl mx-auto ${styles.paddingX} flex flex-row items-start gap-5 `}
      >
        <div className="flex flex-col justify-center items-center mt-5">
          <div className="w-10 h-10 rounded-full bg-[#213555]" />
          <div className="w-1 sm:h-80 h-40 violet-gradient" />
        </div>

        <div className="z-10">
          <h1 className={`text-hover-active ${styles.heroHeadText} `}>
            Hi, I'm <span className="text-[#213555]">Wilson</span>
          </h1>
          <p
            className={`${styles.heroSubText} mt-5 text-hover-active rounded-xl`}
          >
            I am a fresh graduates
            <br className="sm:block hidden" />
            which I codes and developes web
            <br className="sm:block hidden" />
            application and programs.
          </p>
          <button className="text-white h-10 w-auto bg-[#213555] rounded-xl bg-opacity-90 text-[15px] font-bold mt-7 px-4">
            <a>Download My CV now!</a>
          </button>
        </div>
      </div>

      <ComputersCanvas />

      <div className="absolute xs:bottom-10 bottom-32 w-full flex justify-center items-center">
        <a href="#about">
          <div className="w-[35px] h-[64px] rounded-3xl border-4 border-hover-active flex justify-center items-start p-2">
            <motion.div
              animate={{
                y: [0, 24, 0],
              }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                repeatType: "loop",
              }}
              className="w-3 h-3 rounded-full bg-hover-active mb-1"
            />
          </div>
        </a>
      </div>
    </section>
  );
};

export default Hero;
