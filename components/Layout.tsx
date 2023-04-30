import Head from "next/head";
import { useState, useEffect } from "react";
import { FiSun, FiMoon } from "react-icons/fi";
import useNavigation from "../hooks/useNavigation";
import HamburgerMenu from "./HamburgerMenu";
import useScrollDown from "../utils/scrollDown";
import { Link as ScrollLink } from "react-scroll";
import types from "../utils/types";
import { useTheme } from "next-themes";

const Layout = ({ title, children }: types) => {
  const {  menuItems } = useNavigation();
  const scrollDown = useScrollDown();

  const { systemTheme, theme, setTheme } = useTheme();
  const [mount, setMount] = useState(false);
  const renderThemeChanger = () => {
    if (!mount) return null;
    const currentTheme = theme === "system" ? systemTheme : theme;
    if (currentTheme === "dark") {
      return (
        <FiSun
          className="w-4 h-4 text-gray-400"
          role="button"
          onClick={() => setTheme("light")}
        />
      );
    } else {
      return (
        <FiMoon
          className="w-4 h-4  text-gray-400"
          role="button"
          onClick={() => setTheme("dark")}
        />
      );
    }
  };
  useEffect(() => {
    setMount(true);
  }, []);

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
            scrollDown && theme == "light" && "border-b border-gray-200 "
          } `}
        >
          <nav
            className={` py-4 md:py-6 flex flex-wrap items-center justify-between lg:w-11/12 2xl:w-4/5 w-full  mx-auto  `}
          >
            <div className="container mx-auto flex flex-wrap items-center justify-between">
              <div className={`flex items-center   `}>.</div>
              <div className="hidden md:block">
                <ul className={`flex space-x-8   `}>
                  {menuItems.map((item) => (
                    <li key={item.name}>
                      <ScrollLink
                        className={`font-medium tracking-wide hover:text-secondary cursor-pointer `}
                        to={item.route}
                        offset={-60}
                        smooth={true}
                        duration={500}
                        isDynamic={true}
                       
                      >
                        {item.name}
                      </ScrollLink>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="flex items-center  ">
                <div className="w-10 p-3 ">
                  
                {renderThemeChanger()}
                 </div>

                <div className="relative h-10 w-6 md:hidden flex items-center">
                  <HamburgerMenu menuItems={menuItems} />
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
