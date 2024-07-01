import React from "react";

import { motion } from "framer-motion";

import { images } from "../../constants";
import { AppWrap } from '../../wrapper';

import "./Header.scss";

const scaleVarients = {
  whileInView: {
    scale: [0, 1],
    opacity: [0, 1],
    transition: {
      duration: 1,
      ease: "easeInOut",
    },
  },
};

const Header = () => {
  const resumeUrl = 'https://drive.google.com/file/d/1YcUfbvO2uFTYiAJtCmgCdIiYB7S67C4g/view?usp=sharing';
  return (
    <div className="app__header app__flex">
      <motion.div
        whileInView={{ x: [-100, 0], opacity: [0, 1] }}
        transition={{ duration: [0.5] }}
        className="app__header-info"
      >
        <div className="app__header-badge">
          <div className="badge-cmp app__flex">
            <span>👋</span>
            <div style={{ marginLeft: 20 }}>
              <p className="p-text">Hello, I am</p>
              <h1 className="head-text">Faisal</h1>
            </div>
          </div>
          <div className="tag-cmp app__flex">
            <p className="p-text">Frontend Developer</p>
          </div>
          <div className="tag-cmp app__flex">
          <a href={resumeUrl} target="_blank" rel="noopener noreferrer" className="resume-link">
              <p className="p-text">My Resume</p>
            </a>
          </div>
        </div>
      </motion.div>

      <motion.div
        whileInView={{ opacity: [0, 1] }}
        transition={{ duration: [0.5], delayChildren: [0.5] }}
        className="app__header-img"
      >
        <img src={images.profile} alt="Profile-bg" />
        <motion.img
          whileInView={{ scale: [0, 1] }}
          transition={{ duration: [1], ease: "easeInOut" }}
          src={images.circle}
          alt="Profile-circle"
          className="overlay_circle"
        />
      </motion.div>

      <motion.div
        varient={scaleVarients}
        whileInView={scaleVarients.whileInView}
        className="app__header-circles"
      >
        {[images.node, images.react, images.sass].map((circle, index) => (
          <div className="circle-cmp app__flex" key={`circle-${index}`}>
            <img src={circle} alt="profile_bg" />
          </div>
        ))}
      </motion.div>
    </div>
  );
};

export default AppWrap(Header, 'home');
