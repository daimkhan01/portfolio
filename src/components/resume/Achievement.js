import React from "react";
import { motion } from "framer-motion";
import ResumeCard from "./ResumeCard";

const Achievement = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1, transition: { duration: 0.5 } }}
      className="w-full flex flex-col lgl:flex-row gap-10 lgl:gap-20"
    >
      <div>
        <div className="py-6 lgl:py-12 font-titleFont flex flex-col gap-4">
          <p className="text-sm text-designColor tracking-[4px]">2007 - 2010</p>
          <h2 className="text-3xl md:text-4xl font-bold">Company Experience</h2>
        </div>
        <div className="mt-6 lgl:mt-14 w-full h-[1000px] border-l-[6px] border-l-black border-opacity-30 flex flex-col gap-10">
          <ResumeCard
            title="Project Completion and Impact."
            subTitle="Launched a High-Traffic Website."
            result="Success"
            des="Successfully designed and developed a website that handled over [X] million page views per month, leading to a [Y]% increase in user engagement and [Z]% growth in revenue for the client."
          />
          <ResumeCard
            title="Technical Skills and Innovations."
            subTitle="Implemented Cutting-Edge Technologies."
            result="Success"
            des=" Integrated advanced technologies like [e.g., React, GraphQL, or machine learning algorithms] into projects, improving performance by [X]% and reducing load times by [Y] seconds."
          />
          <ResumeCard
            title="Awards and Recognition."
            subTitle="Award-Winning Design."
            result="Success"
            des=" Received [Name of Award] for innovative web design and user experience in [Year]."
          />
        </div>
      </div>
      <div>
        <div className="py-6 lgl:py-12 font-titleFont flex flex-col gap-4">
          <p className="text-sm text-designColor tracking-[4px]">2007 - 2010</p>
          <h2 className="text-3xl md:text-4xl font-bold">Job Experience</h2>
        </div>
        <div className="mt-6 lgl:mt-14 w-full h-[1000px] border-l-[6px] border-l-black border-opacity-30 flex flex-col gap-10">
          <ResumeCard
            title="Client and User Satisfaction."
            subTitle="Achieved High Client Satisfaction."
            result="Success"
            des=" Consistently received [X]% satisfaction ratings from clients for delivering high-quality and timely web solutions."
          />
          <ResumeCard
            title=" Team Collaboration and Leadership."
            subTitle="Led Development Teams."
            result="Success"
            des="Successfully led a team of [X] developers on [Project ], managing tasks and ensuring timely delivery, resulting in [a successful launch or recognition]."
          />
          <ResumeCard
            title="User-Centric Design."
            subTitle="Enhanced Accessibility."
            result="Success"
            des="Improved website accessibility compliance to meet [e.g., WCAG 2.1 AA standards], making the site usable for a broader audience and receiving positive feedback from users with disabilities."
          />
        </div>
      </div>
    </motion.div>
  );
};

export default Achievement;
