import React from "react";
import { AiFillAppstore } from "react-icons/ai";
import { FaMobile, FaGlobe } from "react-icons/fa";
import { SiProgress, SiAntdesign } from "react-icons/si";
import Title from "../layouts/Title";
import Card from "./Card";

const Features = () => {
  return (
    <section
      id="features"
      className="w-full py-20 border-b-[1px] border-b-black"
    >
      <Title title="Features" des="What I Do" />
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 xl:gap-20">
        <Card
          title="Business Stratagy"
          des="Developing a business strategy involves crafting a comprehensive plan to achieve specific objectives."
        />
        <Card
          title="App Development"
          des="App development involves the process of creating software applications for mobile devices, such as smartphones and tablets."
          icon={<AiFillAppstore />}
        />
        <Card
          title="SEO Optimisation"
          des="Search Engine Optimization optimization involves strategies and techniques to improve a website's visibility."
          icon={<SiProgress />}
        />
        <Card
          title="Mobile Development"
          des="Mobile development refers to the process of creating software applications that are specifically designed."
          icon={<FaMobile />}
        />
        <Card
          title="UX Design"
          des="User Experience (UX) design focuses on enhancing user satisfaction by improving the usability, accessibility."
          icon={<SiAntdesign />}
        />
        <Card
          title="Hosting Websites"
          des="Hosting a website involves making it accessible over the internet by storing its files and data on a server that is connected to the internet. "
          icon={<FaGlobe />}
        />
      </div>
    </section>
  );
};

export default Features;
