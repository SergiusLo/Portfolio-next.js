"use client";
import Image from "next/image";

import { motion } from "framer-motion";
import { TypeAnimation } from "react-type-animation";
import { Link } from 'react-scroll';

const HeroSection = () => {
  return (
    <section className="lg:py-16">
      <div className="grid grid-cols-3 sm:grid-cols-12">
        <motion.div
          initial={{ opacity: 0, scale:0.5 }}
          animate={{ opacity: 1, scale:1 }}
          transition={{ duration: 0.3 }}
          className="col-span-8 place-self-center text-center sm:text-left justify-self-start"
        >
          <h1 className="text-white mb-4 text-4xl sm:text-5xl lg:text-7xl  font-extrabold">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-400 to-secondary-600">
              Hello, I'm
            </span>{" "}
            <br />
            <TypeAnimation
              sequence={[
                "Serhii",
                1000,
                "Frontend Developer",
                1000,
                "Work with React.js",
              ]}
              wrapper="span"
              speed={10}
              repeat={Infinity}
            />
          </h1>
          <p className="text-[#ADB7BE] text-base  sm:text-lg mb-6 lg:text-xl">
            Welcome to my portfolio website! I'm a passionate developer
            specializing in React.js, TypeScript, and Next.js. Explore my
            projects, skills, and achievements below.
          </p>
          <div>
            <Link to={'contact'} smooth={true} className="w-full sm:w-fit px-6 py-3 rounded-full mr-4 bg-gradient-to-br from-blue-500 via-primary-500 to-secondary-500 hover:bg-slate-200 text-white cursor-pointer">
              Hire Me
            </Link>
            <button className="w-full sm:w-fit px-1 py-1 rounded-full  bg-gradient-to-br from-blue-500 via-primary-500 to-secondary-500 hover:bg-slate-800 text-white mt-3">
              <span className="block bg-[#121212] hover:bg-slate-800 rounded-full px-5 py-2">
                Download CV
              </span>
            </button>
          </div>
        </motion.div>
        <motion.div 
                  initial={{ opacity: 0, scale:0.5 }}
                  animate={{ opacity: 1, scale:1 }}
                  transition={{ duration: 0.3 }}
         className="col-span-4 place-self-center mt-4 lg:mt-0">
          <div className="rounded-full  lg:w-[400px] lg:h-[400px] w-[250px] h-[250px] relative">
            <Image
              src="/images/developer-hero.png"
              alt="hero image"
              width={300}
              height={300}
              className="rounded-full absolute transform -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2"
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
