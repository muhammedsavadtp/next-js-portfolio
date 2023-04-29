import Head from "next/head";
import { FiSun, FiMoon } from "react-icons/fi";
import useDarkMode from "../hooks/DarkMode";
import useNavigation from "../hooks/useNavigation";
import HamburgerMenu from "./HamburgerMenu";
import useScrollDown from "../utils/scrollDown";
import { Link as ScrollLink } from "react-scroll";
import types from "../utils/types";

const Layout = ({ title, children }: types) => {
  const { isDarkMode, toggleDarkMode } = useDarkMode();
  const { activeItem, menuItems, handleItemClick } = useNavigation();
  const scrollDown = useScrollDown();

  return (
    <>
      <Head>
        <title>{title ? `${title} | muhammed savad` : "muhammed savad"}</title>
        <meta name="description" content="Personal portfolio website" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div
        className={`  container mx-auto  relative lg:w-11/12 2xl:w-4/5 w-full  `}
      >
        <header
          className={` fixed top-0 left-0  min-w-full backdrop-filter backdrop-blur-lg z-50 px-3 ${
            scrollDown && !isDarkMode && "border-b border-gray-200 "
          } `}
        >
          <nav
            className={` py-4 md:py-6 flex flex-wrap items-center justify-between lg:w-11/12 2xl:w-4/5 w-full  mx-auto  `}
          >
            <div className="container mx-auto flex flex-wrap items-center justify-between">
              <div className={`flex items-center   `}>savad</div>
              <div className="hidden md:block">
                <ul className={`flex space-x-8   `}>
                  {menuItems.map((item) => (
                    <li key={item.name}>
                      <ScrollLink
                        className={`font-medium tracking-wide hover:text-secondary cursor-pointer ${
                          activeItem === item.name ? "text-secondary" : ""
                        }`}
                        to={item.route}
                        offset={-60}
                        smooth={true}
                        duration={500}
                        isDynamic={true}
                        onClick={() => handleItemClick(item.name)}
                      >
                        {item.name}
                      </ScrollLink>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="flex items-center">
                <button
                  className={`${
                    isDarkMode
                      ? " hover:bg-violet-700"
                      : "bg-white hover:bg-gray-100 text-gray-800"
                  } p-2 rounded-full mr-4`}
                  onClick={toggleDarkMode}
                >
                  {isDarkMode ? <FiSun color="white" /> : <FiMoon />}
                </button>
                <div className="relative h-10 w-6 md:hidden flex items-center">
                  <HamburgerMenu
                    menuItems={menuItems}
                    isDarkMode={isDarkMode}
                  />
                </div>
              </div>
            </div>
          </nav>
        </header>
        <main className=" px-3  mx-auto">{children}</main>
        <footer className="py-12 text-center ">
          <p className={`text-sm  `}>
            © {new Date().getFullYear()} Muhammed Savad. All rights reserved.
          </p>
        </footer>
      </div>
    </>
  );
};

export default Layout;
