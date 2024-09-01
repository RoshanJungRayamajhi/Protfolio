import React, { useEffect, useRef, useState } from "react";
import Navbar from "./Components/Navbar";
import Landing from "./Components/Landing";
import Skill from "./Components/Skill";
import Work from "./Components/Work";
import Footer from "./Components/Footer";
import LocomotiveScroll from "locomotive-scroll";
import Loader from "./Components/loading";

const App = () => {
  const svg = useRef(null);
  const path = useRef(null);
  const [isLoading, setIsLoading] = useState(true);
  const scrollRef = useRef(null);

  document.title = "Roshan.J portfolio";

  useEffect(() => {
    const fakeDataFetch = () => {
      setTimeout(() => {
        setIsLoading(false);
      }, 4000);
    };

    fakeDataFetch();
  }, []);

  useEffect(() => {
    if (!isLoading) {
      const scroll = new LocomotiveScroll({
        el: scrollRef.current,
        smooth: true,
      });

      return () => {
        scroll.destroy();
      };
    }
  }, [isLoading]);

  useEffect(() => {
    const handleScroll = () => {
      if (svg.current && path.current) {
        const distance = window.scrollY;
        const totalDistance = svg.current.clientHeight - window.innerHeight;

        const percentage = distance / totalDistance;

        const pathLength = path.current.getTotalLength();

        path.current.style.strokeDasharray = `${pathLength}`;
        path.current.style.strokeDashoffset = `${pathLength * (1 - percentage)}`;
      }
    };

    if (path.current) {
      const pathLength = path.current.getTotalLength();
      path.current.style.strokeDasharray = `${pathLength}`;
      path.current.style.strokeDashoffset = `${pathLength}`;
    }

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return isLoading ? (
    <Loader />
  ) : (
    <div ref={scrollRef} className="w-full min-h-screen bg-[#000000] overflow-x-hidden">
      <svg
        ref={svg}
        width="1000"
        height="2000"
        viewBox="0 0 1000 2000"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="squiggle"
      >
        <path
          ref={path}
          d="M-24.5 101C285 315 5.86278 448.291 144.223 631.238C239.404 757.091 559.515 782.846 608.808 617.456C658.101 452.067 497.627 367.073 406.298 426.797C314.968 486.521 263.347 612.858 322.909 865.537C384.086 1125.06 79.3992 1007.94 100 1261.99C144.222 1807.35 819 1325 513 1142.5C152.717 927.625 -45 1916.5 1191.5 1852"
          stroke="#22C55E"
          strokeWidth="30"
          strokeLinejoin="round"
          strokeLinecap="round"
        />
      </svg>
      <Navbar />
      <Landing />
      <Skill />
      <Work />
      <Footer />
    </div>
  );
};

export default App;
