import { easeInOut, motion } from "framer-motion";
import React, { useEffect, useState } from "react";
import expoapp from "../assets/videos/expoapp.mp4";
import significo from "../assets/videos/significo.mp4"
import obeys from "../assets/videos/Obeys.clone.mp4"
import omegel from "../assets/videos/omegel.mp4"
import movie from "../assets/videos/movieweb.mp4"
import dozevideo from "../assets/videos/dozee.mp4"
import doze from "../assets/Images/dozeimg.jpeg"
import movieimg from "../assets/Images/moviimg.jpeg"

const Work = () => {
  const [project, setproject] = useState([
    {
      name: "Exoap clone",
      tech: ["React", "gsap", "Framermotion "],
      image:
        "https://cdn.dribbble.com/users/935677/avatars/normal/db768c6338ae1b101d9c1a54efec92df.png?1650535067",
      video: expoapp,
      href: "https://expoapclone.netlify.app/",
    },
    {
      name: "Significo",
      tech: ["html", "css","gsap","js"],
      image:
        "https://scontent.fktm21-1.fna.fbcdn.net/v/t39.30808-6/398692766_900982172029297_7489293159332004161_n.jpg?_nc_cat=105&ccb=1-7&_nc_sid=a5f93a&_nc_ohc=7dNSV8cvKzUQ7kNvgF48u0P&_nc_ht=scontent.fktm21-1.fna&oh=00_AYCB2U6r3HLIsHX9GjZI1Am2NwnLtfc8jtam3hblN3LTeg&oe=66D9E5DD",
      video:significo,
      href: "https://roshansignifico.netlify.app/",
    },
    {
      name: "Obeys clone",
      tech: ["html", "css","js","gsap"],
      image:
        "https://scontent.fktm21-1.fna.fbcdn.net/v/t1.6435-9/36295441_305295523343487_6429722726813925376_n.jpg?_nc_cat=104&ccb=1-7&_nc_sid=6ee11a&_nc_ohc=uYgQzRr4GNoQ7kNvgHEvMPm&_nc_ht=scontent.fktm21-1.fna&oh=00_AYAcMHWjR1y5IRslUYGNljiSd7ukeYV7LCrJp6aWWVClAQ&oe=66FB7123",
      video:obeys,
      href: "https://obeysclone.netlify.app/",
    },
    {
      name: "Omegele clone",
      tech: ["Node", "Express", "Socket-io","WebRtc"],
      image:
        "https://scontent.fktm21-1.fna.fbcdn.net/v/t39.30808-6/400783379_712334560928443_2477772226477479750_n.jpg?stp=dst-jpg_p526x296&_nc_cat=106&ccb=1-7&_nc_sid=833d8c&_nc_ohc=7KmYJukXI3MQ7kNvgFAs_9v&_nc_ht=scontent.fktm21-1.fna&oh=00_AYCBJQZT9sGcRUmxYfpG8DhflueunK9kc7Xy7U9vT-q3Wg&oe=66D9E2C5",
      video:omegel,
      href: "https://omegleclone-g341.onrender.com/",
    },
    {
      name: "Movie viewer",
      tech: ["React", "Tmdb api", "tailwind"],
      image:movieimg,
      video:movie,
      href: "https://front-end-domination-create-anything-with-code-q8ks.vercel.app/trending",
    },
    {
      name: "Canvas animation",
      tech: ["html", "canvas", "tailwind"],
      image:doze,
       video:dozevideo,
      href: "https://dozestudio.netlify.app/",
    },
  ]);
  const [text, settext] = useState("Scroll");
  const [mouseposition, setmouseposition] = useState({
    x: 0,
    y: 0,
  });

  useEffect(() => {
    window.addEventListener("mousemove", (e) => {
      setmouseposition({ x: e.clientX, y: e.clientY });
    });

    return () => {
      window.removeEventListener("mousemove", (e) => {
        setmouseposition({ x: e.clientX, y: e.clientY });
      });
    };
  });

  let varients = {
    default: {
      x: mouseposition.x,
      y: mouseposition.y + scrollY,
      duration: 0.5,
      ease: easeInOut,
    },
  };

  return (
    <div className=" w-full min-h-screen mt-4">
      <motion.div
        variants={varients}
        animate="default"
        className=" sm:block lg:block hidden   bg-white/20 text-black  shadow-lg shadow-black/10 backdrop-blur-sm border border-white/40 absolute top-0 left-0 w-20 h-20 rounded-full z-[9999] "
      >
       <h1 className=" font-New font flex items-center justify-center h-full w-full text-xl text-white">
        {text}
        
        </h1> 
      </motion.div>
      <div className=" max-w-screen-xl mx-auto pt-10 pl-8 sm:pl-14">
        <h1 className=" text-3xl sm:text-5xl lg:text-5xl  sm:mb-3 text-white font-New font-medium whitespace-nowrap ">
          Watch my{" "}
          <span className=" inline-block text-green-600 font-medium text-3xl sm:text-5xl font-New">
            artwork
          </span>
          .
        </h1>
        <div className="mt-6 flex items-start relative flex-wrap">
          {project.map((item, index) => {
            return (
              <div key={index} className="work  text-white  w-1/2 overflow-hidden ">
                <h1 className=" uppercase text-base sm:text-xl mt-7 font-normal font-New flex  items-center justify-start gap-4 pl-2">
                  <span className=" inline-block w-2 h-2 bg-white rounded-full"></span>{" "}
                  {item.name}
                </h1>
                <div 
                  onMouseEnter={() => settext("View")}
                  onMouseLeave={() => settext("Scroll")}
                  className=" relative  photo w-full p-2 h-[30vh] sm:h-[70vh] lg:h-[70vh] group overflow-hidden"
                >
                  <img 
                    className=" w-full h-full  object-cover rounded-md"
                    src={item.image}
                    alt=""
                  />
                  <a href={item.href} target="_blank" className=" inline-block w-full h-full">
                    <video
                      autoPlay
                      muted
                      loop
                      className="p-2 w-full h-full object-cover   group-hover:opacity-100 transition-opacity duration-500 ease-in-out opacity-0 absolute top-0 left-0 rounded-md "
                      src={item.video}
                    ></video>
                  </a>
                </div>

                <div className=" flex items-start gap-2 sm:gap-4 flex-wrap">
                  {item?.tech.map((tech, index) => {
                    return (
                      <div key={index} className="uppercase text-xs sm:text-sm px-1 sm:px-5 py-1 font-New font-medium rounded-xl border-[0.5px] sm:border-[1px] normal">
                        {tech}
                      </div>
                    );
                  })}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Work;
