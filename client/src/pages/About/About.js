import React from "react";
import "./About.css";
import localimage from "./raunaqfs.png";
import Jump from "react-reveal/Jump";
import {
  SiJavascript,
  SiPython,
  SiReact,
  SiGit,
  SiDocker,
  SiMongodb,
  SiFigma,
  SiCodingninjas,
  SiAmazonaws,
} from "react-icons/si";
const About = () => {
  return (
    
    <Jump>
      
      <div className="about" id="about">
        <div className="row">
        <div className="sticker sticker-1">
                  <SiJavascript color="#F0DB4F" />
                </div>
                <div className="sticker sticker-2">
                  <SiPython color="#3776AB" />
                </div>
                <div className="sticker sticker-3">
                  <SiReact color="#61DAFB" />
                </div>
                <div className="sticker sticker-4">
                  <SiGit color="#F05032" />
                </div>
                
          {/* Left Column: Popout V-Shaped Image */}
          <div className="col-md-6 col-xl-6 col-lg-6 col-xs-12 about-img">
            <div className="about-hex">
              <img src={localimage} alt="profile pic" />
            </div>
          </div>

          {/* Right Column: Text */}
          <div className="col-md-6 col-xl-6 col-lg-6 col-xs-12 about-content">
          
                <div className="sticker sticker-5">
                  <SiDocker color="#2496ED" />
                </div>
                <div className="sticker sticker-6">
                  <SiMongodb color="#47A248" />
                </div>
                <div className="sticker sticker-7">
                  <SiFigma color="#F24E1E" />
                </div>
                
                <div className="sticker sticker-9">
                  <SiAmazonaws color="#FF9900" />
                </div>
            <h1>About Me</h1>
            <h2 className="about-subtitle">Computer Science Student</h2>
            <p>
              Hello, I’m Jugraunaq Singh—a curious and creative mind with a passion for learning
              and problem-solving. Currently pursuing my Bachelor’s in Computer Science at VIT, I
              thrive on exploring innovative ideas and turning challenges into opportunities. My
              journey has taken me through exciting internships and diverse projects where I
              learned the value of collaboration, perseverance, and creative thinking. I enjoy
              connecting with people who share a love for technology and learning, and I'm always
              eager to contribute to projects that make a real difference. When I’m not immersed in
              code or research, you can find me exploring new trends, reading up on emerging
              technologies, or brainstorming ideas to simplify everyday problems.
            </p>
            <a href="#contact" className="about-btn">
              Know More
            </a>
          </div>
        </div>
      </div>
    </Jump>
  );
};

export default About;
