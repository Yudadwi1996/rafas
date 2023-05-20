import { motion } from "framer-motion";
import Link from "next/link";

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

export default function Footer() {
  return (
    <>
      <footer className="border-t mt-10">
        <motion.header
          initial="hide"
          whileInView="show"
          exit="hide"
          variants={introHeaderVariants}
        >
          <div className="container px-5 py-5 mx-auto">
            <div className="flex flex-wrap lg:w-11/12 sm:mx-auto sm:mb-2 -mx-2">
              <div className="p-2 sm:w-1/3 w-full ">
                <h2 className="font-bold  text-lg item-center">
                  PRODUCTS AND SOLUTIONS
                </h2>
                <div className="space-y-2.5  flex flex-col ">
                  <Link href="/product" className="no-underline text-black">
                    <span className="bg-[#E64936] text-black w-4 h-4 mr-2 rounded-full inline-flex items-center justify-center">
                      <svg
                        fill="none"
                        stroke="currentColor"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="3"
                        className="w-3 h-3 "
                        viewBox="0 0 24 24"
                      >
                        <path d="M20 6L9 17l-5-5"></path>
                      </svg>
                    </span>
                    Insfrastructure as a services
                  </Link>
                  <Link href="/product" className="no-underline text-black">
                    <span className="bg-[#E64936] text-black w-4 h-4 mr-2 rounded-full inline-flex items-center justify-center">
                      <svg
                        fill="none"
                        stroke="currentColor"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="3"
                        className="w-3 h-3"
                        viewBox="0 0 24 24"
                      >
                        <path d="M20 6L9 17l-5-5"></path>
                      </svg>
                    </span>
                    Digital Marketing
                  </Link>
                  <Link href="/product" className="no-underline text-black">
                    <span className="bg-[#E64936] text-black w-4 h-4 mr-2 rounded-full inline-flex items-center justify-center">
                      <svg
                        fill="none"
                        stroke="currentColor"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="3"
                        className="w-3 h-3"
                        viewBox="0 0 24 24"
                      >
                        <path d="M20 6L9 17l-5-5"></path>
                      </svg>
                    </span>
                    Middleware
                  </Link>
                  <Link href="/product" className="no-underline text-black">
                    <span className="bg-[#E64936] text-black w-4 h-4 mr-2 rounded-full inline-flex items-center justify-center">
                      <svg
                        fill="none"
                        stroke="currentColor"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="3"
                        className="w-3 h-3"
                        viewBox="0 0 24 24"
                      >
                        <path d="M20 6L9 17l-5-5"></path>
                      </svg>
                    </span>
                    Data Warehouse and Business Intelligent{" "}
                    <span className="ml-6">Solution</span>
                  </Link>
                  <Link href="/product" className="no-underline text-black">
                    <span className="bg-[#E64936] text-black w-4 h-4 mr-2 rounded-full inline-flex items-center justify-center">
                      <svg
                        fill="none"
                        stroke="currentColor"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="3"
                        className="w-3 h-3"
                        viewBox="0 0 24 24"
                      >
                        <path d="M20 6L9 17l-5-5"></path>
                      </svg>
                    </span>
                    Human Capital Management
                  </Link>
                  <Link href="/product" className="no-underline text-black">
                    <span className="bg-[#E64936] text-black w-4 h-4 mr-2 rounded-full inline-flex items-center justify-center">
                      <svg
                        fill="none"
                        stroke="currentColor"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="3"
                        className="w-3 h-3"
                        viewBox="0 0 24 24"
                      >
                        <path d="M20 6L9 17l-5-5"></path>
                      </svg>
                    </span>
                    Hospital Integrated Information System
                  </Link>
                </div>
              </div>
              <div className="p-2 sm:w-1/3 w-full">
                <h2 className="font-bold  text-lg item-center">SERVICES</h2>
                <div className="space-y-2.5  flex flex-col ">
                  <Link href="/product" className="no-underline text-black">
                    <span className="bg-[#E64936] text-black w-4 h-4 mr-2 rounded-full inline-flex items-center justify-center">
                      <svg
                        fill="none"
                        stroke="currentColor"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="3"
                        className="w-3 h-3"
                        viewBox="0 0 24 24"
                      >
                        <path d="M20 6L9 17l-5-5"></path>
                      </svg>
                    </span>
                    Implemetation Services
                  </Link>
                  <Link href="/product" className="no-underline text-black">
                    <span className="bg-[#E64936] text-black w-4 h-4 mr-2 rounded-full inline-flex items-center justify-center">
                      <svg
                        fill="none"
                        stroke="currentColor"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="3"
                        className="w-3 h-3"
                        viewBox="0 0 24 24"
                      >
                        <path d="M20 6L9 17l-5-5"></path>
                      </svg>
                    </span>
                    Managed and Maintenance Support
                  </Link>
                  <Link href="/product" className="no-underline text-black">
                    <span className="bg-[#E64936] text-black w-4 h-4 mr-2 rounded-full inline-flex items-center justify-center">
                      <svg
                        fill="none"
                        stroke="currentColor"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="3"
                        className="w-3 h-3"
                        viewBox="0 0 24 24"
                      >
                        <path d="M20 6L9 17l-5-5"></path>
                      </svg>
                    </span>
                    IT Consultant
                  </Link>
                </div>
              </div>
              <div className="p-2 sm:w-1/3 w-full">
                <h2 className="font-bold  text-lg item-center">
                  {" "}
                  Please get in touch with us for detailed information
                </h2>
                <div className="flex items-center mt-2 ">
                  <svg
                    fill="none"
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="1.5"
                    viewBox="0 0 24 24"
                    className="w-14 h-14 "
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="1.5"
                      d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                    />
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="1.5"
                      d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                    />
                  </svg>
                  <div className="ml-3 text-md tracking-wide  w-62 ">
                    Ruko green garden Blok A14 no. 36 kel. kedoya utara kec.
                    Kebon jeruk Jakarta barat 11520.
                  </div>
                </div>

                <div className="flex items-center mt-2 ">
                  <svg
                    fill="none"
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="1.5"
                    viewBox="0 0 24 24"
                    className="w-6 h-6"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="1.5"
                      d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                    />
                  </svg>
                  <div className="ml-3 text-md tracking-wide w-40">
                    021 5815070
                  </div>
                </div>

                <div className="flex items-center mt-2 ">
                  <svg
                    fill="none"
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="1.5"
                    viewBox="0 0 24 24"
                    className="w-6 h-6 "
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="1.5"
                      d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                    />
                  </svg>
                  <div className="ml-3 text-md tracking-wide  w-40">
                    info@rafas.id
                  </div>
                </div>
              </div>
            </div>
          </div>
        </motion.header>
        <div className="bg-black">
          <div className="container mx-auto py-4 px-5 flex flex-wrap flex-col sm:flex-row">
            <p className="text-white text-sm text-center sm:text-left">
              © 2023 Rafas
            </p>
          </div>
        </div>
      </footer>
    </>
  );
}
