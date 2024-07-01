import React from 'react';
import { motion } from 'framer-motion';

import { AppWrap, MotionWrap } from '../../wrapper';
import './About.scss';

import Image1 from '../../assets/about01.png';
import Image2 from '../../assets/se.jpg';
import Image3 from '../../assets/about03.png';
import Image4 from '../../assets/about04.png';

const aboutsData = [
  {
    title: "Web Developer",
    description: "I am a passionate web developer dedicated to turning ideas into digital reality. With a blend of design and coding skills, I create user-friendly, visually stunning websites that bring concepts to life online.",
    imgUrl: Image1
  },
  {
    title: "Software Engineer",
    description: "I am a passionate software engineer focused on turning ideas into reality. Combining design and coding expertise, I develop user-friendly, visually appealing software solutions that bring concepts to life.",
    imgUrl: Image2
  },
  {
    title: "Mern Stack",
    description: "I am a software engineer specializing in the MERN stack. With a passion for creating seamless web applications, I blend design and coding skills to deliver user-friendly, visually appealing digital solutions.",
    imgUrl: Image3
  },
  {
    title: "Front-end Developer",
    description: "I am a front-end developer passionate about creating intuitive and visually stunning web interfaces. With a keen eye for design and expertise in coding, I bring user-friendly digital experiences to life.",
    imgUrl: Image4
  }
];

const About = () => {
  const abouts = aboutsData;

  return (
    <>
      <h2 className="head-text">I Know that <span>Good Dev</span> <br />means  <span>Good Business</span></h2>

      <div className="app__profiles">
        {abouts.map((about, index) => (
          <motion.div
            whileInView={{ opacity: 1 }}
            whileHover={{ scale: 1.1 }}
            transition={{ duration: 0.5, type: 'tween' }}
            className="app__profile-item"
            key={about.title + index}
          >
            <img src={about.imgUrl} alt={about.title} />
            <h2 className="bold-text" style={{ marginTop: 20 }}>{about.title}</h2>
            <p className="p-text" style={{ marginTop: 10 }}>{about.description}</p>
          </motion.div>
        ))}
      </div>
    </>
  );
};

export default AppWrap(
  MotionWrap(About, 'app__about'),
  'about',
  'app__whitebg',
);
