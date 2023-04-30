import React, { useState } from "react";
import Card from "./Card";
import { cardContent } from "../utils/cardItems";

const Portfolio = () => {
  return (
    <section id="portfolio">
      <div className="flex flex-col   min-h-screen w-full pt-10     ">
        <h1 className="text-4xl  text-center mb-6">Portfolio</h1>

        <div className="flex pt-5 flex-wrap   w-full">
          {cardContent.map(({ title, description, url,webUrl,git }) => (
            <Card
              key={title}
              url={url}
              webUrl={webUrl}
              heading={title}
              paragraph={description}
              git={git}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
