import Image from "next/image";
import Bg from "../assets/customer.webp";
import Bg1 from "../assets/customer1.webp";
import Bg2 from "../assets/customer2.webp";
import Bg3 from "../assets/customer3.webp";
import Bg4 from "../assets/customer4.webp";
import Bg5 from "../assets/customer5.webp";
import Hero from "@/components/Hero";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const customer = () => {
  return (
    <>
      <Navbar />
      <Hero />

      <div className="container px-5 py-5 mx-auto">
        <div className="flex flex-col text-center w-full mb-10">
          <h1 className="sm:text-3xl text-2xl font-medium title-font mb-4 text-gray-900">
            CUSTOMERS
          </h1>
          <p className="lg:w-2/3 mx-auto leading-relaxed text-base">
            Professionalism is our principle to provide satisfaction to our
            clients
          </p>
        </div>
        <div className="flex flex-wrap -m-4">
          <div className="lg:w-1/3 sm:w-1/2 p-4">
            <div className="flex relative">
              <Image
                width="600px"
                height="360px"
                alt="gallery"
                className="inset-0 w-full h-full object-cover object-center"
                src={Bg}
              />
            </div>
          </div>
          <div className="lg:w-1/3 sm:w-1/2 p-4">
            <div className="flex relative">
              <Image
                width="601px"
                height="361px"
                alt="gallery"
                className="inset-0 w-full h-full object-cover object-center"
                src={Bg1}
              />
            </div>
          </div>
          <div className="lg:w-1/3 sm:w-1/2 p-4">
            <div className="flex relative">
              <Image
                width="603px"
                height="363px"
                alt="gallery"
                className="inset-0 w-full h-full object-cover object-center"
                src={Bg2}
              />
            </div>
          </div>
          <div className="lg:w-1/3 sm:w-1/2 p-4">
            <div className="flex relative">
              <Image
                width="602px"
                height="362px"
                alt="gallery"
                className=" inset-0 w-full h-full object-cover object-center"
                src={Bg3}
              />
            </div>
          </div>
          <div className="lg:w-1/3 sm:w-1/2 p-4">
            <div className="flex relative">
              <Image
                width="605px"
                height="365"
                alt="gallery"
                className=" inset-0 w-full h-full object-cover object-center"
                src={Bg4}
              />
            </div>
          </div>
          <div className="lg:w-1/3 sm:w-1/2 p-4">
            <div className="flex relative">
              <Image
                width="606px"
                height="366px"
                alt="gallery"
                className="inset-0 w-full h-full object-cover object-center"
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

export default customer;
