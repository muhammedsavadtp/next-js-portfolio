import { useState } from "react";
import { motion } from "framer-motion";
import { Link as ScrollLink } from "react-scroll";
import { FiMenu, FiX } from "react-icons/fi";


const HamburgerMenu = ({ menuItems }:any) => {

  const [isOpen, setIsOpen] = useState(false);
  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div>
      <button
        className="inline-flex items-center justify-center p-2 rounded-md text-gray-400  "
        onClick={toggleMenu}
      >
        {isOpen ? <FiX /> : <FiMenu />}
      </button>

      <motion.div
        className={`fixed right-0 top-0 h-screen w-4/5 p-4 bg-opacity-95   shadow-md z-50 bg-white dark:bg-black`}
        initial={{ x: "100%" }}
        animate={isOpen ? { x: 10 } : { x: "100%" }}
        transition={{ type: "spring", stiffness: 100, damping: 15 }}
      >
        <div className="flex justify-end">
          <button
            type="button"
            className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-gray-500  focus:outline-none   focus:white"
            onClick={toggleMenu}
          >
            <span className="sr-only">Close menu</span>
            <FiX />
          </button>
        </div>
        <div className="flex flex-col items-start justify-start h-full ">
          {menuItems.map((item:any) => (
            <ScrollLink
              className={` inline-flex px-3    mb-2 w-full  rounded-md  hover:text-gray-500 hover:bg-gray-100 focus:outline-none cursor-pointer `}
              to={item.route}
              offset={-60}
              smooth={true}
              duration={500}
              isDynamic={true}
              delay={500}
              key={item.name}
              onClick={() => setIsOpen(false)}
            >
              <button className="my-3   font-medium text-lg   ">
                {item.name}
              </button>
            </ScrollLink>
          ))}
        </div>
      </motion.div>
    </div>
  );
};

export default HamburgerMenu;
