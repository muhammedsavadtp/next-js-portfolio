import { useState } from "react";
import { Tab } from "@headlessui/react";
import stacks from "../utils/stacks";
import ItemList from "./ItemList";

export default function MyTabs() {
  const [currentTab, setCurrentTab] = useState("frontEnd");

  return (
    <div id="techStack " className="mt-52  md:h-[35em]">
      <h1 className="text-4xl text-center mb-6">Tech Stack</h1>
      <Tab.Group>
        <div className=" flex justify-center  ">
          <Tab.List className="flex justify-center p-1 space-x-3  bg-gray-50 rounded-xl w-full md:w-1/2">
            {["frontEnd", "backEnd", "other"].map((res) => (
              <Tab
                key={res}
                className={({ selected }) =>
                  `p-3 text-sm whitespace-nowrap leading-5 font-medium rounded-lg border-b-2 capitalize md:text-base ${
                    selected
                      ? "bg-purple-600 text-white hover:bg-purple-800 border-purple-600"
                      : " text-black hover:bg-gray-200 border-transparent"
                  }  w-full `
                }
                onClick={() => setCurrentTab(res)}
              >
                {res}
              </Tab>
            ))}
          </Tab.List>
        </div>
        <div className=" h-[35em]">
          <div className="flex justify-center   ">
            <Tab.Panels className={"mt-5 flex justify-center w-full"}>
              {Object.keys(stacks).map((stackKey) => (
                <Tab.Panel
                  value={stackKey}
                  className={"flex items-center flex-wrap  "}
                  key={stackKey}
                >
                  <ItemList items={stacks[stackKey]} />
                </Tab.Panel>
              ))}
            </Tab.Panels>
          </div>
        </div>
      </Tab.Group>
    </div>
  );
}
