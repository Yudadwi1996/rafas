import LogoAge from "../assets/cisco.jpg";
import LogoIsystem from "../assets/microsoft.jpg";
import SofwareAg from "../assets/sofware.jpg";
import Isystem from "../assets/isystem.jpg";
import Oracle from "../assets/oracle.jpg";
import Image from "next/image";
import { motion } from "framer-motion";

const introHeaderVariants = {
  hide: {
    opacity: 0,
    x: -100,
  },
  show: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 2,
    },
  },
};

export default function Partner() {
  return (
    <>
      {/* <section className="bg-black ">
        <div className="py-8 lg:py-8 mx-auto max-w-screen-xl px-1">
          <motion.header
            variants={introHeaderVariants}
            initial="hide"
            whileInView="show"
            exit="hide"
          >
            <h2 className="mb-1 lg:mb-1 text-3xl font-extrabold tracking-tight leading-tight text-center text-[#E64936]  md:text-4xl">
              RAFAS PARTNER
            </h2>
            <p className="leading-relaxed text-base text-center mb-4 text-white">
              Meet our Professional Partner
            </p>
          </motion.header>

          <div>
            <div className="flex flex-wrap md:w-1/2 justify-center gap-4 mx-auto items-center">
              <Image src={LogoAge} width="40px" height="40px" alt="Logo" />
              <Image src={LogoIsystem} width="40px" height="40px" alt="Logo" />
              <Image src={LogoIsystem} width="40px" height="40px" alt="Logo" />
              <Image src={LogoIsystem} width="40px" height="40px" alt="Logo" />
              <Image src={LogoIsystem} width="40px" height="40px" alt="Logo" />
            </div>
          </div>
        </div>
      </section> */}
      <section className="bg-white dark:bg-gray-900">
        <div className="py-8 lg:py-16 mx-auto max-w-screen-xl px-4">
          <motion.header
            variants={introHeaderVariants}
            initial="hide"
            whileInView="show"
            exit="hide"
          >
            <h2 className="mb-8 lg:mb-1 text-3xl font-extrabold tracking-tight leading-tight text-center text-gray-900 dark:text-white md:text-4xl">
              RAFAS PARTNER
            </h2>
            <p className="leading-relaxed text-base text-center mb-4 ">
              Meet our Professional Partner
            </p>
          </motion.header>
          <div className="grid grid-cols-2 gap-8 text-gray-500 sm:gap-12 md:grid-cols-3 lg:grid-cols-6 dark:text-gray-400">
            <span className="flex justify-center items-center">
              <Image src={LogoAge} width="40px" height="40px" alt="Logo" />
            </span>
            <span className="flex justify-center items-center">
              <Image src={LogoIsystem} width="40px" height="40px" alt="Logo" />
            </span>
            <span className="flex justify-center items-center">
              <Image src={SofwareAg} width="40px" height="40px" alt="Logo" />
            </span>
            <span className="flex justify-center items-center">
              <Image src={Isystem} width="40px" height="40px" alt="Logo" />
            </span>
            <span className="flex justify-center items-center">
              <Image src={Oracle} width="40px" height="40px" alt="Logo" />
            </span>
          </div>
        </div>
      </section>
    </>
  );
}
