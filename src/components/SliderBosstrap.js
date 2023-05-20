import { useState } from "react";
import Image from "next/image";
import BgSlider from "../assets/slider.jpg";
import BgSlider1 from "../assets/slider1.jpg";
import BgSlider2 from "../assets/hero.webp";
import Carousel from "react-bootstrap/Carousel";
import style from "../styles/boostrap.module.css";

import "bootstrap/dist/css/bootstrap.min.css";

export default function BootstrapCarousel() {
  return (
    <>
      <Carousel fade>
        <Carousel.Item>
          <Image
            height=""
            width="1024px"
            className="d-block w-100 brightness-50"
            src={BgSlider1}
            alt="First slide"
          />
          <div className="flex flex-col text-center w-full mb-20 absolute text-white top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
            <h1 className="text-3xl sm:text-5xl lg:text-5xl font-bold title-font mb-2 text-white mt-20 sm:mt-0">
              CITILINK &#45; CRM
            </h1>
            <p className="lg:w-2/3 mx-auto text-sm sm:p-2 md:p-4 lg:p-6">
              We implement Customer Relationship Management for Citilink
              Indonesia to manage the relationship with every valuable customer
            </p>
          </div>

          {/* <h1 className="absolute text-5xl text-white top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
        KindaCode.com
      </h1> */}
        </Carousel.Item>

        <Carousel.Item>
          <Image
            height=""
            width="1024px"
            className="d-block w-100 brightness-50"
            src={BgSlider}
            alt="Third slide"
          />

          <div className="flex flex-col text-center w-full mb-20 absolute text-white top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
            <h1 className="text-1xl sm:text-5xl lg:text-5xl font-bold title-font mb-4 text-white mt-24 sm:mt-0">
              WIJAYA KARYA &#45; BPM
            </h1>
            <p className="lg:w-2/3 mx-auto leading-relaxed text-base sm:p-2 md:p-4 lg:p-6">
              We bring solution for construction business throught Business
              Process Modeling
            </p>
          </div>
        </Carousel.Item>
      </Carousel>
    </>
  );
}
