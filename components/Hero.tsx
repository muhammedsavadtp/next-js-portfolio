import React from "react";
import { motion } from "framer-motion";
import Typewriter from "typewriter-effect";
import { Link as ScrollLink } from "react-scroll";
import types from "../utils/types";


const Hero = ({data}:types) => {
  
  const titles = [
    "developer",
    "content creator",
    "front end developer",
    "backend developer",
  ];

  return (
    <section id="home">
      <div className="flex flex-col md:flex-row min-h-screen relative  ">
        <div className="absolute -z-10 min-h-screen h-full w-full">
          {
            // <img
            //   src="/_next/image?url=%2Fherobgc.jpg&w=1920&q=100"
            //   layout="fill"
            //   objectFit="cover"
            //   loading="lazy"
            //   className="object-bottom"
            //   quality={100}
            //   alt={""}
            // />
          }
        </div>
        {/* Right side - move to top for small devices */}
        <div className="md:hidden flex justify-center items-center pt-20  ">
          <motion.div
            className="rounded-full overflow-hidden h-64 w-64 lg:h-80 lg:w-80 shadow-lg"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <img
              src="https://images.pexels.com/photos/9950569/pexels-photo-9950569.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
              alt="Profile picture"
              height={400}
              width={400}
              className="h-full w-full object-cover"
            />
          </motion.div>
        </div>

        {/* Left side */}
        <div className="md:w-1/2 flex-1 flex flex-col justify-center md:justify-center b py-4 md:py-6 ">
          <div className="flex items-center  gap-2 md:mb-4">
            <img
              src="https://jigarsable.vercel.app/_next/static/media/waving-hand.1da6fc7a.gif"
              alt=""
              height={10}
              width={30}
              className=" pb-2 md:pb-0"
            />
            <h1 className="  font-bold   ">{data.greeting}</h1>
          </div>
          <h2 className="text-2xl lg:text-4xl font-bold  mb-2 md:mb-4">
            I&apos;m {data.name}
          </h2>
          <div className=" flex  items-center gap-2 mb-2  md:mb-8">
            <h3 className="text-lg lg:text-xl font-medium  ">I&apos;m a</h3>
            <Typewriter
              options={{
                strings: titles,
                autoStart: true,
                loop: true,
                deleteSpeed: 50,
                delay: 50,
                wrapperClassName:
                  "text-violet-700 dark:text-violet-600 text-lg lg:text-xl font-medium ",
                cursorClassName:
                  "text-violet-700 dark:text-violet-600 text-lg lg:text-xl",
              }}
            />
          </div>
          <p className="text-base lg:text-lg  mb-3">
            {data.description}
          </p>
          <div>
            <ScrollLink
              className="w-fit text-sm md:text-base py-2 px-4 cursor-pointer flex items-center gap-1 rounded-md bg-violet-600 hover:bg-violet-700 dark:bg-violet-700 hover:dark:bg-violet-800 transition-colors group text-white"
              to={"about"}
              offset={-60}
              smooth={true}
              duration={500}
              isDynamic={true}
            >
              About Me
            </ScrollLink>
          </div>
        </div>

        {/* Right side - move to bottom for larger devices */}
        <div className="hidden md:flex md:w-1/2 justify-center items-center p-8">
          <motion.div
            className="rounded-full overflow-hidden h-64 w-64 lg:h-80 lg:w-80 shadow-lg"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <img
              src="https://images.pexels.com/photos/9950569/pexels-photo-9950569.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
              alt="Profile picture"
              height={400}
              width={400}
              className="h-full w-full object-cover"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
