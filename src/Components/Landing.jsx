import { useGSAP } from "@gsap/react";
import { easeInOut, motion } from "framer-motion";
import gsap, { ScrollTrigger } from "gsap/all";
import React, { useEffect, useRef } from "react";

const Landing = () => {
  const parentRef = useRef(null);
  const quoteRef = useRef(null);

  return (
    <div
      ref={parentRef}
      className="w-full min-h-screen relative overflow-hidden "
    >
      <div className="Name  absolute top-[30%] sm:top-[20%] left-[50%] -translate-x-1/2  leading-none ">
        <h1 className=" font-Founder font-bold uppercase text-[10.6vw] sm:text-[10.6vw] whitespace-nowrap  text-white overflow-hidden">
          <motion.span
            initial={{ opacity: 0, y: "50%" }}
            whileInView={{ opacity: 1, y: "0%" }}
            transition={{ ease: easeInOut, duration: 0.8 }}
            viewport={{ once: true }}
            className="inline-block font-Founder origin-left "
          >
            {" "}
            Roshan Jung Rayamajhi{" "}
          </motion.span>
        </h1>
        <div className="flex items-center gap-8 sm:gap-28 h8788888888888888888888888888888888888  sm:h-10  text-green-400 uppercase ">
          {["full", "stack", "web", "developer"].map((item, index) => {
            return (
              <h1
                key={index}
                className=" text-[2vw] sm:text-[2vw] font-New text-green-300 tracking-[1.5vw] "
              >
                <motion.span
                  initial={{ opacity: 0, y: "50%" }}
                  whileInView={{ opacity: 1, y: "0%" }}
                  transition={{ ease: easeInOut, duration: 0.8 }}
                  viewport={{ once: true }}
                  className="inline-block font-New"
                >
                  {item}{" "}
                </motion.span>
              </h1>
            );
          })}
        </div>
      </div>
      <div className="quote absolute left-[50%] top-[50%] sm:top-[55%] -translate-x-1/2 text-white  text-center overflow-hidden w-full sm:w-1/2  ">
        <motion.p
          initial={{ opacity: 0, y: "50%" }}
          whileInView={{ opacity: 1, y: "0%" }}
          viewport={{ once: true }}
          transition={{ ease: easeInOut, duration: 1 }}
          className=" text-2xl sm:text-4xl font-New font-medium opacity-0 text-center "
        >
          I'm specialized in building digital experiences that not only capture
          attention but also inspire action
          <span className=" text-green-400 text-3xl inline-block">.</span>
        </motion.p>
      </div>
      <a href="https://www.instagram.com/_call_me__roshan/" target="_blank" className="scroll font-New absolute left-[50%] top-[80%] -translate-x-1/2  capitalize text-xl sm:text-2xl text-green-500 rounded-full">
        <img className=" w-32 h-10" src="https://asynchronousjavascriptor.github.io/pflo/images/hibtn.png" alt="" />
      </a>
    </div>
  );
};

export default Landing;
