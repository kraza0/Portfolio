import React, { useState } from "react";
import { AiFillEye, AiFillGithub } from "react-icons/ai";
import { motion } from "framer-motion";

import { AppWrap, MotionWrap } from "../../wrapper";
import "./Work.scss";
import Image1 from '../../assets/Nexus.jpg';
import Image2 from '../../assets/project2.jpg';
import Image3 from '../../assets/project3.jpg';
import Image4 from '../../assets/about04.png';

const staticWorksData = [
  {
    title: "Nexus Pro",
    description: "A complete solution for your lab.",
    projectLink: "https://nexuspro.pk/",
    codeLink: "https://github.com/example/project1",
    imgUrl: Image1,
    tags: ["Web App"],
  },
  {
    title: "E-Shop",
    description: "E-commerce clothing store.",
    projectLink: "https://nexuspro.pk/",
    codeLink: "https://github.com/example/project2",
    imgUrl: Image2,
    tags: ["Web App"],
  },
  {
    title: "Project 3",
    description: "Description of project 3.",
    projectLink: "https://nexuspro.pk/",
    codeLink: "https://github.com/example/project3",
    imgUrl: Image3,
    tags: ["Web App"],
  },
  {
    title: "Project 4",
    description: "Description of project 4.",
    projectLink: "https://nexuspro.pk/",
    codeLink: "https://github.com/example/project4",
    imgUrl: Image4,
    tags: ["Web App"],
  },
];

const Work = () => {
  const [filterWork, setFilterWork] = useState(staticWorksData);
  const [activeFilter, setActiveFilter] = useState("All");
  const [animateCard, setAnimateCard] = useState({ y: 0, opacity: 1 });

  const handleWorkFilter = (item) => {
    setActiveFilter(item);
    setAnimateCard([{ y: 100, opacity: 0 }]);

    setTimeout(() => {
      setAnimateCard([{ y: 0, opacity: 1 }]);

      if (item === "All") {
        setFilterWork(staticWorksData);
      } else {
        setFilterWork(staticWorksData.filter((work) => work.tags.includes(item)));
      }
    }, 500);
  };

  return (
    <>
      <h2 className="head-text">
        My Creative <span>Portfolio</span> Section
      </h2>

      <div className="app__work-filter">
        {["UI/UX", "Web App", "Mobile App", "React JS", "All"].map(
          (item, index) => (
            <div
              key={index}
              onClick={() => handleWorkFilter(item)}
              className={`app__work-filter-item app__flex p-text ${
                activeFilter === item ? "item-active" : ""
              }`}
            >
              {item}
            </div>
          )
        )}
      </div>

      <motion.div
        animate={animateCard}
        transition={{ duration: 0.5, delayChildren: 0.5 }}
        className="app__work-portfolio"
      >
        {filterWork.map((work, index) => (
          <div className="app__work-item app__flex" key={index}>
            <div className="app__work-img app__flex">
              <img src={work.imgUrl} alt={work.name} />

              <motion.div
                whileHover={{ opacity: [0, 1] }}
                transition={{
                  duration: 0.25,
                  ease: "easeInOut",
                  staggerChildren: 0.5,
                }}
                className="app__work-hover app__flex"
              >
                <a href={work.projectLink} target="_blank" rel="noreferrer">
                  <motion.div
                    whileInView={{ scale: [0, 1] }}
                    whileHover={{ scale: [1, 0.9] }}
                    transition={{ duration: 0.25 }}
                    className="app__flex"
                  >
                    <AiFillEye />
                  </motion.div>
                </a>
                <a href={work.codeLink} target="_blank" rel="noreferrer">
                  <motion.div
                    whileInView={{ scale: [0, 1] }}
                    whileHover={{ scale: [1, 0.9] }}
                    transition={{ duration: 0.25 }}
                    className="app__flex"
                  >
                    <AiFillGithub />
                  </motion.div>
                </a>
              </motion.div>
            </div>

            <div className="app__work-content app__flex">
              <h4 className="bold-text">{work.title}</h4>
              <p className="p-text" style={{ marginTop: 10 }}>
                {work.description}
              </p>

              <div className="app__work-tag app__flex">
                <p className="p-text">{work.tags[0]}</p>
              </div>
            </div>
          </div>
        ))}
      </motion.div>
    </>
  );
};

export default AppWrap(
  MotionWrap(Work, "app__works"),
  "work",
  "app__primarybg"
);
