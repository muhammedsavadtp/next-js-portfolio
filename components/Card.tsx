import React, { useState } from "react";
import { FiGithub } from "react-icons/fi";
import types from "../utils/types";

const Card = ({ url, heading, paragraph,webUrl,git }: any) => {
  const [active, setActive] = useState(false);
  // console.log(active);

  const handleClick = (url:any) => {
    window.location.href = url;
  };

  return (
    <div className="w-full md:w-1/2 lg:w-1/3 px-4 mb-4 ">
      <div
        className={` bg-white dark:bg-gray-800/30 rounded-lg shadow-lg overflow-hidden  h-full `}
      >
        <div className="p-4 relative">
          <div
            onMouseEnter={() => setActive(true)}
            onMouseLeave={() => setActive(false)}
            className="rounded-md overflow-hidden relative"
          >
            <img
              className="w-full"
              src={url}
              alt="Placeholder Image"
              width={640}
              height={360}
            />
            {active && (
              <div className="absolute w-full bg-black opacity-90 h-full right-0 top-0  flex justify-center items-center gap-2 ">
                <div
                  onClick={() => handleClick(git)}
                  className="hover:bg-gray-100 cursor-pointer  h-16 w-16 bg-white  rounded-md text-black flex justify-center items-center"
                >
                  <FiGithub />
                </div>
                <div
                  onClick={() => handleClick(webUrl)}
                  className="hover:bg-gray-100 cursor-pointer h-16 w-16 bg-white  rounded-md text-black flex justify-center items-center"
                >
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
                </div>
              </div>
            )}
          </div>
        </div>

        <div className="p-4">
          <h2 className="text-lg font-semibold mb-2">{heading}</h2>
          <p className=" leading-relaxed mb-2">{paragraph}</p>
        </div>
      </div>
    </div>
  );
};

export default Card;
