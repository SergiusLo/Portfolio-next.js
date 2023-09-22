"use client";
import Image from "next/image";

import { TypeAnimation } from "react-type-animation";

const HeroSection = () => {
  return (
    <section>
      <div className="grid grid-cols-3 sm:grid-cols-12">
        <div className="col-span-7 place-self-center text-center sm:text-left ">
          <h1 className="text-white mb-4 text-4xl sm:text-5xl lg:text-6xl font-extrabold">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600">
              Hello, I'm
            </span>{" "}
            <br />
            <TypeAnimation
              sequence={["Serhii", 1000, "Frontend Developer", 1000, 'Work with React.js']}
              wrapper="span"
              speed={10}
              repeat={Infinity}
            />
          </h1>
          <p className="text-[#ADB7BE] text-base  sm:text-lg mb-6 lg:text-xl">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit.
            Praesentium ad commodi rem quod, officiis corrupti labore autem
            magni, quam.
          </p>
          <div>
            <button className="w-full sm:w-fit px-6 py-3 rounded-full mr-4 bg-gradient-to-br from-blue-500 via-purple-500 to-pink-500 hover:bg-slate-200 text-white ">
              Hire Me
            </button>
            <button className="w-full sm:w-fit px-1 py-1 rounded-full  bg-gradient-to-br from-blue-500 via-purple-500 to-pink-500 hover:bg-slate-800 text-white mt-3">
              <span className="block bg-[#121212] hover:bg-slate-800 rounded-full px-5 py-2">
                Download CV
              </span>
            </button>
          </div>
        </div>
        <div className="col-span-5 place-self-center mt-4 lg:mt-0">
          <div className="rounded-full bg-[#181818] lg:w-[400px] lg:h-[400px] w-[250px] h-[250px] relative">
            <Image
              src="/images/developer.jpg"
              alt="hero image"
              width={300}
              height={300}
              className="rounded-full absolute transform -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
