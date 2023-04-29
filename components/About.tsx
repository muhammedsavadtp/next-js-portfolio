import { motion } from "framer-motion";
import TechStack from "../components/TechStack";
import types from "../utils/types";

const About = ({data}:types) => {
  return (
    <section id="about">
      <div className="flex flex-col items-center justify-center min-h-screen w-full pt-8  ">
        <h1 className="text-4xl  text-center mb-6">About Me</h1>
        <div className="flex items-center  justify-between flex-col md:flex-row w-full ">
          <motion.div
            className="flex items-center mb-5 md:mb-0 w-56 h-80 bg-gray-50 rounded-lg shadow-md overflow-hidden hover:scale-105 transition-transform duration-300 ease-in-out"
            whileHover={{ boxShadow: "0px 0px 10px rgba(0, 0, 0, 0.3)" }}
          >
            <img
              src="https://images.pexels.com/photos/9950569/pexels-photo-9950569.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
              alt="Savad"
              className="h-full w-full "
            />
          </motion.div>
          <div className="md:w-2/3  py-2">
            <h2 className="  text-3xl font-semibold py-2">{data.name}</h2>
            <h3 className="text-sm font-medium bg-gray-100 text-violet-500 px-2 w-fit p-1 rounded-md">
              {data.stack}
            </h3>
            <p className="text-base   md:text-base mt-4">
             {data.aboutMe}
            </p>
            <div className="mt-4 flex space-x-4">
              <button className="px-6 py-2 bg-violet-500 hover:bg-violet-800 text-white rounded-md">
                Resume
              </button>
              <button className="px-6 py-2 hover:bg-gray-100 text-violet-500 rounded-md flex items-center justify-center gap-2">
                Book a Call
                <svg
                  stroke="currentColor"
                  fill="currentColor"
                  stroke-width="0"
                  viewBox="0 0 24 24"
                  height="1em"
                  width="1em"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="m13 3 3.293 3.293-7 7 1.414 1.414 7-7L21 11V3z"></path>
                  <path d="M19 19H5V5h7l-2-2H5c-1.103 0-2 .897-2 2v14c0 1.103.897 2 2 2h14c1.103 0 2-.897 2-2v-5l-2-2v7z"></path>
                </svg>
              </button>
            </div>
          </div>
        </div>
        <div className=" w-full ">
          <TechStack />
        </div>
      </div>
    </section>
  );
};

export default About;
