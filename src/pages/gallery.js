import Hero from "@/components/Hero";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Bg from "../assets/g1.jpg";
import Bg1 from "../assets/gallery1.webp";
import Bg2 from "../assets/g2.jpg";
import Bg3 from "../assets/g3.jpg";
import Bg4 from "../assets/g4.jpg";
import Bg5 from "../assets/g5.jpg";
import Image from "next/image";

const gallery = () => {
  return (
    <>
      <Navbar />
      <Hero />

      <div className="container px-5 py-2 mx-auto flex flex-wrap max-w-screen-lg">
        <div className=" w-full mb-10 ">
          <h1 className="sm:text-3xl text-2xl font-medium title-font text-gray-900  lg:mb-0 mb-4">
            WIKA ARIS Business Process Modeling Training
          </h1>
        </div>
        <div className="flex flex-wrap md:-m-2 -m-1 rounded-lg">
          <div className="flex flex-wrap w-1/2">
            <div className="md:p-2 p-1 w-1/2">
              <Image
                width=""
                height=""
                alt="gallery"
                className="w-full object-cover h-full object-center block"
                src={Bg}
              />
            </div>
            <div className="md:p-2 p-1 w-1/2">
              <Image
                width=""
                height=""
                alt="gallery"
                className="w-full h-full object-cover object-center block"
                src={Bg2}
              />
            </div>
            <div className="md:p-2 p-1 w-full">
              <Image
                width=""
                height=""
                alt="gallery"
                className="w-full h-full object-cover object-center block"
                src={Bg2}
              />
            </div>
          </div>
          <div className="flex flex-wrap w-1/2">
            <div className="md:p-2 p-1 w-full">
              <Image
                width=""
                height=""
                alt="gallery"
                className="w-full h-full object-cover object-center block"
                src={Bg3}
              />
            </div>
            <div className="md:p-2 p-1 w-1/2">
              <Image
                width=""
                height=""
                alt="gallery"
                className="w-full object-cover h-full object-center block"
                src={Bg4}
              />
            </div>
            <div className="md:p-2 p-1 w-1/2">
              <Image
                width=""
                height=""
                alt="gallery"
                className="w-full object-cover h-full object-center block"
                src={Bg5}
              />
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
};

export default gallery;
