import { easeInOut, motion } from "framer-motion";
import React, { useState } from "react";
import { CiMenuFries } from "react-icons/ci";
import cv from "../assets/cv/cv.pdf";
import { IoMdClose } from "react-icons/io";
import { Link } from "react-scroll";
import { Power4 } from "gsap/all";
import logo from "../assets/Images/logo.png"

const Navbar = () => {
  const [menu, setmenu] = useState(false);
  const [social, setsocial] = useState([
    {
      name: "Linkdin",
      href: "https://www.linkedin.com/in/roshan-jung-rayamajhi-a9354a282/",
    },
    {
      name: "facebook",
      href: "https://www.facebook.com/profile.php?id=100080751117476",
    },
    {
      name: "Instagram",
      href: "https://www.instagram.com/_call_me__roshan/",
    },
  ]);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ ease:Power4.easeInOut, duration:1.2 }}
      className="fixed  z-[99] w-full h-20  text-white  px-3  "
    >
      <div
        className={`w-screen h-screen absolute transform ${
          menu ? "translate-x-0" : "-translate-x-[100%]"
        } duration-100 transition-transform bg-black  -ml-3 `}
      >
        <div
          onClick={() => setmenu(!menu)}
          className=" absolute top-6 right-6 text-5xl"
        >
          <IoMdClose />
        </div>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-center font-New flex flex-col gap-3">
          <Link onClick={()=>setmenu(false)}
            to="skills"
            smooth={true}
            duration={500}
            className=" font-New text-2xl inline-block "
          >
            Skills
          </Link>
          <a target="_blank" href="https://www.instagram.com/_call_me__roshan/" className="inline-block font-New text-2xl ">Let collab</a>
          <a
            target="_blank"
            href="https://github.com/RoshanJungRayamajhi"
            className="flex items-center gap-2"
          >
            <img
              className=" w-8 h-8 rounded-full"
              src="https://imgs.search.brave.com/v-0kmq9ncGMcXdqYffUoA9M5Kh0iWAE8dxTbZ4mWIvs/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly9zdGF0/aWMtMDAuaWNvbmR1/Y2suY29tL2Fzc2V0/cy4wMC9naXRodWIt/aWNvbi01MTJ4NDk3/LW9wcHRocmUyLnBu/Zw"
              alt=""
            />
            <h4 className=" font-New font-medium text-2xl text-white">
              See github
            </h4>
          </a>
        </div>
        <div className=" absolute bottom-0 left-0 w-full text-white flex justify-end gap-6 px-3 py-4">
          {social.map((item, index) => {
            return (
              <a
                key={index}
                href={item.href}
                target="_blank"
                className=" font-New font-medium text-xl capitalize"
              >
                {item.name}
              </a>
            );
          })}
        </div>
      </div>
      <div className=" max-w-screen-xl mx-auto h-full  bg-transparent flex items-center justify-between font-New font-medium text-xl cursor-pointer">
        <a href="/" className="w-32 h-32 sm:w-52 sm:h-52">
          <img className=" w-full h-full  bg-cover inset-0 mix-blend-multiply" src={logo} alt="" />
        </a>
        <a
          target="_blank"
          href="https://github.com/RoshanJungRayamajhi"
          className="hidden sm:flex items-center gap-2"
        >
          <img
            className=" w-8 h-8 rounded-full"
            src="https://imgs.search.brave.com/v-0kmq9ncGMcXdqYffUoA9M5Kh0iWAE8dxTbZ4mWIvs/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly9zdGF0/aWMtMDAuaWNvbmR1/Y2suY29tL2Fzc2V0/cy4wMC9naXRodWIt/aWNvbi01MTJ4NDk3/LW9wcHRocmUyLnBu/Zw"
            alt=""
          />
          <h4 className=" font-New font-medium text-white">See github</h4>
        </a>
        <div onClick={() => setmenu(true)} className=" block sm:hidden ">
          <CiMenuFries />
        </div>
        <div className="sm:block lg:block hidden p-2 border-[1px] rounded-md">
          <a
            href={cv}
            download="Roshan_Jung_Rayamajhi_Resume.pdf"
            className="font-New text-lg"
          >
            Download Resume
          </a>
        </div>
      </div>
    </motion.div>
  );
};

export default Navbar;
