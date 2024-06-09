"use client";
import React, { useState } from "react";
import ProjectComponent from "./Project/ProjectComponent";
import ExperienceContent from "./Project/ExperienceContent";
import AboutMe from "./Project/AboutMe";
import { AnimatePresence, motion } from "framer-motion";
import test from "../public/project-image/test.jpg";
import howtoo from "@/public/project-image/howtoo.png";
import vmpb from "@/public/project-image/vmpb.jpg";
import rps from "@/public/project-image/rps.jpg";

const PER_PAGE = 3;

const exp = [
  {
    title: "Junior System Admin",
    company: "Parikalpak",
    dates: "Since 2019",
    description:
      "Parikalpak is an archtect firm and I have been handing there Website,servers, computers, networking etc.",
    technologies: ["Networking", "Hugo"],
  },
  {
    title: "Internship",
    company: "Felicity Digital",
    dates: "Jan,2020-May,2020",
    description:
      "I have worked with felicity digital as an intern, learned graphics desiging, reactjs and manymore.",
    technologies: ["Reactjs", "Figma"],
  },
  {
    title: "Internship",
    company: "Becho Ltd.",
    dates: "Jan, 2024- Still on going",
    description:
      "I have been working as an intern in Becho Ltd. Learning new frameworks such as Svelte. Also Learning React Native and many more.",
    technologies: ["Svelete", "React Native", "Nextjs", "StoryBook"],
  },
];

const projects = [
  {
    title: "How Too",
    description:
      "It's a Educational purpose website, where everyone can learn almost everything which includes Programming Languages at first.",
    imgUrl: howtoo,
    link: "https://github.com/rayed152/HowTooo",
  },
  {
    title: "Rock Paper Scissors Game",
    description: "Rock Paper Scissors game, a project from frontend mentor",
    imgUrl: rps,
    link: "https://github.com/rayed152/rock-paper-scissors-game/tree/master",
  },
  {
    title: "Valorant Map Pick Ban Discord Bot",
    description:
      "This is a Discord bot for picking and banning maps for the game valorant.",
    imgUrl: vmpb,
    link: "https://github.com/rayed152/Map-Pick-Ban-Discord-Bot-",
  },
];

const tabs = [
  { name: "AboutMe", content: <AboutMe /> },
  { name: "Projects", content: <ProjectCards /> },
  { name: "Experience", content: <Experience /> },
];

export default function Project() {
  const [activeTab, setActiveTab] = useState(0);

  const handleTabClick = (index: React.SetStateAction<number>) => {
    setActiveTab(index);
  };

  return (
    <div className="flex flex-col items-center justify-center p-6">
      {/* //Tabs */}
      <div className="flex gap-4">
        {tabs.map((tab, index) => (
          <button
            key={index}
            className={`px-4 mb-10 py-2  ${
              activeTab === index ? " text-blue-400 " : " text-white"
            }`}
            onClick={() => handleTabClick(index)}
          >
            {tab.name}
          </button>
        ))}
      </div>
      <AnimatePresence initial={false} mode="wait">
        <motion.div
          key={activeTab}
          initial={{ opacity: 0, x: activeTab > 0 ? "-100%" : "100%" }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          exit={{
            opacity: 0,
            x: activeTab < tabs.length - 1 ? "100%" : "-100%",
          }}
        >
          {activeTab === 0
            ? tabs[0].content
            : activeTab === 1
            ? tabs[1].content
            : tabs[2].content}
        </motion.div>
      </AnimatePresence>
    </div>
  );
}

function ProjectCards() {
  const [currentPage, setCurrentPage] = useState(1);

  const handlePageChange = (pageNumber: React.SetStateAction<number>) => {
    setCurrentPage(pageNumber);
  };

  const totalPages = Math.ceil(projects.length / PER_PAGE);

  const startIndex = (currentPage - 1) * PER_PAGE;
  const endIndex = startIndex + PER_PAGE;
  const filteredProjects = projects.slice(startIndex, endIndex);

  return (
    <div className="flex flex-col items-center justify-center p-6">
      <div className="flex gap-40">
        {filteredProjects.map((project, index) => (
          <ProjectComponent
            key={index}
            title={project.title}
            description={project.description}
            imgUrl={project.imgUrl}
            link={project.link}
          />
        ))}
      </div>

      {/* Pagination */}
      {totalPages > 1 && (
        <div className="flex justify-center mt-10">
          <ul className="inline-flex list-none rounded-md shadow">
            {Array.from({ length: totalPages }, (_, pageNumber) => (
              <li
                key={pageNumber + 1}
                className={`px-3 py-2 hover:bg-gray-200 ${
                  currentPage === pageNumber + 1
                    ? "text-blue-500 font-bold"
                    : "text-white"
                }`}
                onClick={() => handlePageChange(pageNumber + 1)}
              >
                {pageNumber + 1}
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}

function Experience() {
  return (
    <div className="">
      {exp.map((experience, index) => (
        <ExperienceContent
          key={index}
          title={experience.title}
          company={experience.company}
          dates={experience.dates}
          description={experience.description}
          technologies={experience.technologies}
        />
      ))}
    </div>
  );
}
