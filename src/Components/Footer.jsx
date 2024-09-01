import React, { useState } from "react";
import { FaFacebook, FaSquareArrowUpRight } from "react-icons/fa6";
import { LiaFacebook, LiaInstagram, LiaLinkedin, LiaVoicemailSolid } from "react-icons/lia";

const Footer = () => {
  const [social, setsocial] = useState([{
    name:< LiaLinkedin/>, href:"https://www.linkedin.com/in/roshan-jung-rayamajhi-a9354a282/"
  },{
    name:<LiaFacebook/>,href:"https://www.facebook.com/profile.php?id=100080751117476"
  },
  {
    name:<LiaInstagram/>,href:"https://www.instagram.com/_call_me__roshan/"
  },
 
  ])
  return (
    <div className="w-full min-h-fit my-12 relative">
      <div className=" my-0 max-w-screen-xl mx-auto  pl-8 sm:pl-14 flex items-start sm:justify-between flex-wrap">
        <div className=" sm:w-1/2  w-full ">
          <h1 className=" text-green-600 font-New tracking-wide text-2xl sm:text-8xl font-semibold whitespace-nowrap">
            Let's Connect
          </h1>
          <h3 className="text-white font-New font-normal text-xl sm:text-4xl">
            Create something awesome
          </h3>
          <div className="group cursor-pointer text-base sm:text-xl font-New font-semibold border-green-600 sm:border-2 border-[1px] mt-8 sm:px-2 sm:py-2 p-1 w-fit uppercase text-green-600 ">
            contact me{" "}
            <span className=" inline-block opacity-0 group-hover:opacity-100  ml-4 scale-105">
              {" "}
              <FaSquareArrowUpRight />
            </span>
          </div>
        </div>
        <div className=" mt-12 sm:mt-4 w-[25%]">
          <h1 className=" text-left text-white font-New font-medium  text-3xl sm:text-6xl mb-2">
            Social
          </h1>
          <div className="flex items-start gap-6">
          {social.map((item, index) => {
            return (
              <a href={item.href} target="_/blank"
                key={index}
                className=" cursor-pointer text-left text-3xl sm:text-4xl font-New font-medium text-zinc-400 mt-2 capitalize"
              >
                {item.name}
              </a>
            );
          })}
          </div>
        </div>
      </div>
      <p className=" text-white text-center mt-20">Made with ❤️</p>
    </div>
  );
};

export default Footer;
