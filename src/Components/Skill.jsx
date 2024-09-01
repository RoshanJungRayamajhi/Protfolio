import React, { useEffect, useRef, useState } from "react";
import Image1 from "../assets/Images/React-icon.svg.webp";
import { useGSAP } from "@gsap/react";
import gsap, { Power4, ScrollTrigger } from "gsap/all";
import { PiImageSquareFill } from "react-icons/pi";
import { easeInOut, motion } from "framer-motion";

const Skill = () => {
  const [image, setimage] = useState([
    "https://saarthack.github.io/portfolio/images/React-icon.svg.webp",
    "https://saarthack.github.io/portfolio/images/js-min.webp",
    "https://saarthack.github.io/portfolio/images/node-min.webp",
    "https://saarthack.github.io/portfolio/images/mongodb-min.webp",
    "https://saarthack.github.io/portfolio/images/MySQL-min.webp",
    "https://saarthack.github.io/portfolio/images/github-min.webp",
    "https://saarthack.github.io/portfolio/images/gsap-min.webp",
    "https://saarthack.github.io/portfolio/images/html-min.webp",
    "https://saarthack.github.io/portfolio/images/css-min.webp",
  ]);
  const [design, setdesign] = useState([
    "https://saarthack.github.io/portfolio/images/figma-min.webp",
  ]);

  const parentRef = useRef(null);
  const imageRef = useRef(null);
 
  return (
    <div
      ref={parentRef}
      id="skills"
      className="skill  text-white min-h-[80vh]    max-w-screen-xl mx-auto pl-8 sm:pl-14"
    >
      <h1 className=" text-4xl sm:text-5xl font-New font-medium whitespace-nowrap">
        Things i'm
        <span className="inline-block font-New font-medium text-green-600  text-4xl sm:text-5xl tracking-tighter ml-4">
          good
        </span>{" "}
        at
      </h1>
      <p className=" text-xl sm:text-2xl font-New font-medium normal">
        Skill,interest,hobbies,passion
      </p>

      <div className=" font-New w-fit px-2 sm:px-4 py-2 sm:py-3 rounded-md text-white text-base sm:text-xl my-3 sm:my-6 md:my-6 border-2 hover:bg-green-600">
        Development
      </div>
      <div className="img flex items-center gap-4 sm:gap-6 flex-wrap">
        {image.map((item, index) => {
          return (
            <div key={index} className=" overflow-hidden  rounded-md">
              <motion.div
                initial={{ y: "50%*index", opacity: 0 }}
                whileInView={{ y: "0%", opacity: 1 }}
                viewport={{ once: true }}
                transition={{
                  ease: Power4.easeInOut,
                  duration: 2,
                  delay: index * 0.2,
                }}
                key={index}
                className=" w-16 h-16 sm:w-20 sm:h-20 bg-white  rounded-md "
              >
                <img
                  ref={imageRef}
                  className=" w-full h-full object-contain"
                  src={item}
                  alt=""
                />
              </motion.div>
            </div>
          );
        })}
      </div>
      <div className="group relative font-New w-fit rounded-md text-lg sm:text-xl my-8 ">
        <div className="sm:px-4 p-2 sm:py-3 border-2 rounded-md font-New z-10">
          Designing
        </div>
      </div>
      <div className="img flex items-center gap-6">
        {design.map((item, index) => {
          return (
            <motion.div
              initial={{ y: "50%*index", opacity: 0 }}
              whileInView={{ y: "0%", opacity: 1 }}
              viewport={{ once: true }}
              transition={{
                ease: Power4.easeInOut,
                duration: 2,
                delay: index * 0.2,
              }}
              key={index}
              className="w-16 h-16 sm:w-20 sm:h-20 bg-white  rounded-md "
            >
              <img
                ref={imageRef}
                className=" w-full h-full object-contain"
                src={item}
                alt=""
              />
            </motion.div>
          );
        })}
      </div>
    </div>
  );
};

export default Skill;
