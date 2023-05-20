import valueBg from "../assets/rafasvalue.jpg";
import Image from "next/image";

import { motion } from "framer-motion";

const introHeaderVariants = {
  hide: {
    opacity: 0,
    x: 50,
  },
  show: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 2,
    },
  },
};

const introHeaderVariantss = {
  hide: {
    opacity: 0,
    x: 50,
  },

  show: {
    animate: { x: 100 },
    opacity: 1,
    x: 0,
    transition: {
      duration: 2,
    },
  },
};

export default function Value() {
  return (
    <div className="container px-5 py-2 mx-auto ">
      <div className="w-full py-10 px-10 relative mb-4 text-white">
        <Image
          alt="gallery"
          width="820px"
          height="340px"
          className="w-full object-cover h-full object-center block rounded absolute inset-0 brightness-50"
          src={valueBg}
        />
        <motion.header
          initial="hide"
          whileInView="show"
          exit="hide"
          variants={introHeaderVariants}
        >
          <div className="text-center relative z-10 w-full">
            <h2 className="text-3xl font-extrabold tracking-tight leading-tight mb-1  mb-2">
              RAFAS VALUE
            </h2>

            <p className="leading-relaxed ">
              We are grateful for our great team and their incredible skills to
              complete the projects and achieve our client`s satisfaction goal
            </p>
            <div className="flex flex-wrap -m-4 mt-6 text-center justify-center relative">
              <div className="xl:w-1/4 md:w-1/2 p-4">
                <h2 className="title-font font-medium sm:text-4xl text-3xl ">
                  98
                </h2>
                <p className="">PROJECT COMPLETED</p>
              </div>
              <div className="xl:w-1/4 md:w-1/2 p-4">
                <h2 className="title-font font-medium sm:text-4xl text-3xl ">
                  98
                </h2>
                <p className="">CLIENT SATISFACTION</p>
              </div>
              <div className="xl:w-1/4 md:w-1/2 p-4">
                <h2 className="title-font font-medium sm:text-4xl text-3xl ">
                  95
                </h2>
                <p className="">TEAM WORK</p>
              </div>
              <div className="xl:w-1/4 md:w-1/2 p-4">
                <h2 className="title-font font-medium sm:text-4xl text-3xl ">
                  87
                </h2>
                <p className="leading-relaxed ">INDIVIDUAL SKILL</p>
              </div>
            </div>
          </div>
        </motion.header>
      </div>
    </div>
  );
}
