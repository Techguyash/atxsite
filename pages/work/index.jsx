import { motion } from "framer-motion";

import Bulb from "../../components/Bulb";
import Circles from "../../components/Circles";
import WorkSlider from "../../components/WorkSlider";
import { fadeIn } from "../../variants";

const Work = () => {
  return (
    <div className="h-full bg-primary/30 py-36 flex items-center">
      <Circles />
      <div className="container mx-auto">
        <div className="flex flex-col xl:flex-row gap-x-8">
          {/* text */}
          <div className="text-center flex xl:w-[30vw] flex-col lg:text-left mb-4 xl:mb-0">
            <motion.h2
              variants={fadeIn("up", 0.2)}
              initial="hidden"
              animate="show"
              exit="hidden"
              className="h2 xl:mt-12"
            >
              Our work <span className="text-accent">.</span>
            </motion.h2>
            <motion.p
              variants={fadeIn("up", 0.4)}
              initial="hidden"
              animate="show"
              exit="hidden"
              className="mb-4 max-w-[400px] mx-auto lg:mx-0"
            >
              <div className="mb-5">
                <span className="text-xl text-white mb-5">
                  On-Time Delivery
                </span>
                <br /> We take pride in completing projects on time, ensuring
                your business stays on track without any delays.
              </div>
              <div className="mb-5">
                <span className="text-xl text-white mb-8">
                  Tailored Solutions
                </span>
                <br /> Our solutions are customized to fit the unique
                requirements of your business, equipping you with the tools for
                success.
              </div>
              {/* <div>
                <span className="text-xl text-white mb-8">
                  Cutting-Edge Technology
                </span>
                <br />
                We utilize the latest technologies to develop scalable, secure,
                and high-performance applications.
              </div> */}
            </motion.p>
          </div>

          {/* slider */}
          <motion.div
            variants={fadeIn("down", 0.6)}
            initial="hidden"
            animate="show"
            exit="hidden"
            className="w-full xl:max-w-[65%]"
          >
            <WorkSlider />
          </motion.div>
        </div>
      </div>
      <Bulb />
    </div>
  );
};

export default Work;
