import React from "react";
import { motion } from "framer-motion";
import { Tooltip as ReactTooltip } from "react-tooltip";

import { AppWrap, MotionWrap } from "../../wrapper";
import "./Skills.scss";
import JavascriptIcon from '../../assets/javascript.png';
import ReactIcon from '../../assets/react.png';
import NodeIcon from '../../assets/node.png';
import TypescriptIcon from '../../assets/typescript.png';
import CssIcon from '../../assets/css.png';
import MaterialUIIcon from '../../assets/mu5.png'
import GitIcon from '../../assets/git.png';
import HTML5Icon from '../../assets/html.png';
import SassIcon from '../../assets/sass.png';
import expressIcon from '../../assets/express.png';



const staticSkillsData = [
  {
    name: "JavaScript",
    bgColor: "#f0f0f0",
    icon: JavascriptIcon,
  },
  {
    name: "React Js",
    bgColor: "#f0f0f0",
    icon: ReactIcon,
  },
  {
    name: "TypeScript",
    bgColor: "#f0f0f0",
    icon: TypescriptIcon,
  },
  {
    name: "Node Js",
    bgColor: "#f0f0f0",
    icon: NodeIcon,
  },
  {
    name: "Express Js",
    bgColor: "#f0f0f0",
    icon: expressIcon,
  },
  {
    name: "HTML5",
    bgColor: "#f0f0f0",
    icon: HTML5Icon,
  },
  {
    name: "Material UI",
    bgColor: "#f0f0f0",
    icon: MaterialUIIcon,
  },
  {
    name: "Sass",
    bgColor: "#f0f0f0",
    icon: SassIcon,
  },
  {
    name: "CSS",
    bgColor: "#e0e0e0",
    icon: CssIcon,
  },
  {
    name: "Git",
    bgColor: "#f0f0f0",
    icon: GitIcon,
  },
];

const staticExperiencesData = [
  {
    year: "2023",
    works: [
      {
        name: "Associate Software Engineer",
        company: "Bitlogix Private Limited",
      },
    ],
  },
  {
    year: "2023",
    works: [
      {
        name: "Application Support Engineer",
        company: "Bitlogix Private Limited",
      },
    ],
  },
];

const Skills = () => {
  const skills = staticSkillsData;
  const experiences = staticExperiencesData;

  return (
    <>
      <h2 className="head-text">Skills & Experiences</h2>

      <div className="app__skills-container">
        <motion.div className="app__skills-list">
          {skills.map((skill) => (
            <motion.div
              whileInView={{ opacity: [0, 1] }}
              transition={{ duration: 0.5 }}
              className="app__skills-item app__flex"
              key={skill.name}
            >
              <div
                className="app__flex"
              >
                <img src={skill.icon} alt={skill.name} />
              </div>
              <p className="p-text">{skill.name}</p>
            </motion.div>
          ))}
        </motion.div>
        <div className="app__skills-exp">
          {experiences.map((experience) => (
            <motion.div className="app__skills-exp-item" key={experience.year}>
              <div className="app__skills-exp-year">
                <p className="bold-text">{experience.year}</p>
              </div>
              <motion.div className="app__skills-exp-works">
                {experience.works.map((work) => (
                  <React.Fragment key={work.name}>
                    <motion.div
                      whileInView={{ opacity: [0, 1] }}
                      transition={{ duration: 0.5 }}
                      className="app__skills-exp-work"
                      data-tip
                      data-for={work.name}
                    >
                      <h4 className="bold-text">{work.name}</h4>
                      <p className="p-text">{work.company}</p>
                    </motion.div>
                    <ReactTooltip
                      id={work.name}
                      effect="solid"
                      arrowColor="#fff"
                      className="skills-tooltip"
                    >
                      {work.desc}
                    </ReactTooltip>
                  </React.Fragment>
                ))}
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>
    </>
  );
};

export default AppWrap(
  MotionWrap(Skills, "app__skills"),
  "skills",
  "app__whitebg"
);
